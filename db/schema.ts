import { sql } from "drizzle-orm";
import {
  AnyPgColumn,
  boolean,
  check,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uniqueIndex,
  date,
} from "drizzle-orm/pg-core";

// ============================================================================
// ENUMS
// ============================================================================

export const userRoleEnum = pgEnum("user_role", [
  "admin",
  "professional",
  "receptionist",
]);

export const staffStatusEnum = pgEnum("staff_status", ["active", "inactive"]);

export const appointmentStatusEnum = pgEnum("appointment_status", [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
  "no_show",
  "rescheduled",
]);

export const appointmentSourceEnum = pgEnum("appointment_source", [
  "admin_panel",
  "public_booking",
  "whatsapp",
  "manual",
]);

export const weekDayEnum = pgEnum("week_day", [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]);

export const meetingTypeEnum = pgEnum("meeting_type", ["in_person", "online"]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "paid",
  "refunded",
]);

// ============================================================================
// AUTH TABLES AND USER
// ============================================================================

export const user = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  role: userRoleEnum("role").notNull().default("professional"),
  banned: boolean("banned").notNull().default(false),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  impersonatedBy: text("impersonated_by"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const verification = pgTable("verification", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ============================================================================
// BUSINESS / BOOKING SETTINGS
// ============================================================================

export const businessProfile = pgTable(
  "business_profile",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    name: text("name").notNull(),
    phone: text("phone"),
    email: text("email"),
    timezone: text("timezone").notNull().default("America/Sao_Paulo"),

    // disponibilidade pública
    bookingEnabled: boolean("booking_enabled").notNull().default(true),
    allowPublicCancellation: boolean("allow_public_cancellation")
      .notNull()
      .default(true),
    allowPublicRescheduling: boolean("allow_public_rescheduling")
      .notNull()
      .default(true),

    // regras de agendamento
    requiresManualConfirmation: boolean("requires_manual_confirmation")
      .notNull()
      .default(true),
    minNoticeToBookInHours: integer("min_notice_to_book_in_hours")
      .notNull()
      .default(24),
    minNoticeToCancelInHours: integer("min_notice_to_cancel_in_hours")
      .notNull()
      .default(12),
    minNoticeToRescheduleInHours: integer("min_notice_to_reschedule_in_hours")
      .notNull()
      .default(12),
    maxBookingDaysAhead: integer("max_booking_days_ahead")
      .notNull()
      .default(60),
    slotIntervalInMinutes: integer("slot_interval_in_minutes")
      .notNull()
      .default(30),

    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    check(
      "business_profile_min_notice_to_book_in_hours_check",
      sql`${table.minNoticeToBookInHours} >= 0`,
    ),
    check(
      "business_profile_min_notice_to_cancel_in_hours_check",
      sql`${table.minNoticeToCancelInHours} >= 0`,
    ),
    check(
      "business_profile_min_notice_to_reschedule_in_hours_check",
      sql`${table.minNoticeToRescheduleInHours} >= 0`,
    ),
    check(
      "business_profile_max_booking_days_ahead_check",
      sql`${table.maxBookingDaysAhead} >= 1`,
    ),
    check(
      "business_profile_slot_interval_in_minutes_check",
      sql`${table.slotIntervalInMinutes} >= 5`,
    ),
  ],
);

// ============================================================================
// CLIENTS
// ============================================================================

export const client = pgTable(
  "client",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    document: text("document"), // CPF ou identificador para emissão de recibos
    birthDate: date("birth_date"), // Essencial para identificação clínica
    emergencyContact: text("emergency_contact"), // Padrão ético/segurança em saúde mental

    // usar apenas para observações administrativas, não clínicas
    administrativeNotes: text("administrative_notes"),

    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("client_name_idx").on(table.name),
    index("client_email_idx").on(table.email),
    index("client_phone_idx").on(table.phone),
    index("client_document_idx").on(table.document),
  ],
);

// ============================================================================
// STAFF
// ============================================================================

export const staff = pgTable(
  "staff",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    userId: text("user_id").references(() => user.id, {
      onDelete: "set null",
    }),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    image: text("image"),
    bio: text("bio"),
    status: staffStatusEnum("status").notNull().default("active"),
    isBookable: boolean("is_bookable").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex("staff_user_id_unique").on(table.userId),
    index("staff_name_idx").on(table.name),
    index("staff_status_idx").on(table.status),
  ],
);

// ============================================================================
// SERVICES
// ============================================================================

export const service = pgTable(
  "service",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    name: text("name").notNull(),
    description: text("description"),
    priceInCents: integer("price_in_cents").notNull(),
    durationInMinutes: integer("duration_in_minutes").notNull(),
    bufferBeforeInMinutes: integer("buffer_before_in_minutes")
      .notNull()
      .default(0),
    bufferAfterInMinutes: integer("buffer_after_in_minutes")
      .notNull()
      .default(0),
    isActive: boolean("is_active").notNull().default(true),
    isVisibleOnBookingPage: boolean("is_visible_on_booking_page")
      .notNull()
      .default(true),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("service_name_idx").on(table.name),
    index("service_is_active_idx").on(table.isActive),
    index("service_sort_order_idx").on(table.sortOrder),
    check("service_price_in_cents_check", sql`${table.priceInCents} >= 0`),
    check(
      "service_duration_in_minutes_check",
      sql`${table.durationInMinutes} > 0`,
    ),
    check(
      "service_buffer_before_in_minutes_check",
      sql`${table.bufferBeforeInMinutes} >= 0`,
    ),
    check(
      "service_buffer_after_in_minutes_check",
      sql`${table.bufferAfterInMinutes} >= 0`,
    ),
  ],
);

export const staffService = pgTable(
  "staff_service",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    staffId: text("staff_id")
      .notNull()
      .references(() => staff.id, { onDelete: "cascade" }),
    serviceId: text("service_id")
      .notNull()
      .references(() => service.id, { onDelete: "cascade" }),
    priceInCents: integer("price_in_cents"),
    durationInMinutes: integer("duration_in_minutes"),
    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex("staff_service_staff_id_service_id_unique").on(
      table.staffId,
      table.serviceId,
    ),
    index("staff_service_staff_id_idx").on(table.staffId),
    index("staff_service_service_id_idx").on(table.serviceId),
    check(
      "staff_service_price_in_cents_check",
      sql`${table.priceInCents} IS NULL OR ${table.priceInCents} >= 0`,
    ),
    check(
      "staff_service_duration_in_minutes_check",
      sql`${table.durationInMinutes} IS NULL OR ${table.durationInMinutes} > 0`,
    ),
  ],
);

// ============================================================================
// AVAILABILITY
// ============================================================================

export const staffWorkingHour = pgTable(
  "staff_working_hour",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    staffId: text("staff_id")
      .notNull()
      .references(() => staff.id, { onDelete: "cascade" }),
    weekDay: weekDayEnum("week_day").notNull(),
    startTime: time("start_time").notNull(),
    endTime: time("end_time").notNull(),
    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("staff_working_hour_staff_id_idx").on(table.staffId),
    index("staff_working_hour_staff_id_week_day_idx").on(
      table.staffId,
      table.weekDay,
    ),
    check(
      "staff_working_hour_start_before_end_check",
      sql`${table.startTime} < ${table.endTime}`,
    ),
  ],
);

export const staffTimeOff = pgTable(
  "staff_time_off",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),
    staffId: text("staff_id")
      .notNull()
      .references(() => staff.id, { onDelete: "cascade" }),
    startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
    endsAt: timestamp("ends_at", { withTimezone: true }).notNull(),
    reason: text("reason"),
    isAllDay: boolean("is_all_day").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("staff_time_off_staff_id_idx").on(table.staffId),
    index("staff_time_off_staff_id_starts_at_idx").on(
      table.staffId,
      table.startsAt,
    ),
    check(
      "staff_time_off_starts_before_ends_check",
      sql`${table.startsAt} < ${table.endsAt}`,
    ),
  ],
);

// ============================================================================
// APPOINTMENTS
// ============================================================================

export const appointment = pgTable(
  "appointment",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => Bun.randomUUIDv7()),

    // vínculo opcional com cliente, mas snapshot obrigatório
    clientId: text("client_id").references(() => client.id, {
      onDelete: "set null",
    }),
    clientName: text("client_name").notNull(),
    clientEmail: text("client_email"),
    clientPhone: text("client_phone"),

    // vínculo opcional com profissional, mas snapshot obrigatório
    staffId: text("staff_id").references(() => staff.id, {
      onDelete: "set null",
    }),
    staffName: text("staff_name").notNull(),

    // vínculo opcional com serviço, mas snapshot obrigatório
    serviceId: text("service_id").references(() => service.id, {
      onDelete: "set null",
    }),
    serviceName: text("service_name").notNull(),
    servicePriceInCents: integer("service_price_in_cents").notNull(),
    serviceDurationInMinutes: integer("service_duration_in_minutes").notNull(),

    // horário real do atendimento
    startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
    endsAt: timestamp("ends_at", { withTimezone: true }).notNull(),

    // intervalo efetivamente bloqueado na agenda
    blockedStartsAt: timestamp("blocked_starts_at", {
      withTimezone: true,
    }).notNull(),
    blockedEndsAt: timestamp("blocked_ends_at", {
      withTimezone: true,
    }).notNull(),

    // modalidade da sessão
    meetingType: meetingTypeEnum("meeting_type").notNull().default("in_person"),
    meetingUrl: text("meeting_url"), // Link do Google Meet, Zoom, etc.

    // agrupamento para sessões recorrentes (ex: terapia toda terça)
    recurringGroupId: text("recurring_group_id"),

    // status do agendamento
    status: appointmentStatusEnum("status").notNull().default("pending"),
    source: appointmentSourceEnum("source").notNull().default("admin_panel"),

    // financeiro
    paymentStatus: paymentStatusEnum("payment_status")
      .notNull()
      .default("pending"),
    externalTransactionId: text("external_transaction_id"),

    // ligação explícita com remarcação anterior
    rescheduledFromAppointmentId: text(
      "rescheduled_from_appointment_id",
    ).references((): AnyPgColumn => appointment.id, {
      onDelete: "set null",
    }),

    notes: text("notes"),

    // usar apenas para operação administrativa, não clínica
    administrativeInternalNotes: text("administrative_internal_notes"),

    cancelReason: text("cancel_reason"),

    confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
    cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    noShowAt: timestamp("no_show_at", { withTimezone: true }),
    rescheduledAt: timestamp("rescheduled_at", { withTimezone: true }),

    createdByUserId: text("created_by_user_id").references(() => user.id, {
      onDelete: "set null",
    }),

    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("appointment_starts_at_idx").on(table.startsAt),
    index("appointment_blocked_starts_at_idx").on(table.blockedStartsAt),
    index("appointment_staff_id_starts_at_idx").on(
      table.staffId,
      table.startsAt,
    ),
    index("appointment_staff_id_blocked_starts_at_idx").on(
      table.staffId,
      table.blockedStartsAt,
    ),
    index("appointment_client_id_starts_at_idx").on(
      table.clientId,
      table.startsAt,
    ),
    index("appointment_status_idx").on(table.status),
    index("appointment_payment_status_idx").on(table.paymentStatus),
    index("appointment_recurring_group_id_idx").on(table.recurringGroupId),
    index("appointment_rescheduled_from_appointment_id_idx").on(
      table.rescheduledFromAppointmentId,
    ),

    check(
      "appointment_service_price_in_cents_check",
      sql`${table.servicePriceInCents} >= 0`,
    ),
    check(
      "appointment_service_duration_in_minutes_check",
      sql`${table.serviceDurationInMinutes} > 0`,
    ),
    check(
      "appointment_starts_before_ends_check",
      sql`${table.startsAt} < ${table.endsAt}`,
    ),
    check(
      "appointment_blocked_starts_before_blocked_ends_check",
      sql`${table.blockedStartsAt} < ${table.blockedEndsAt}`,
    ),
    check(
      "appointment_blocked_starts_at_before_or_equal_starts_at_check",
      sql`${table.blockedStartsAt} <= ${table.startsAt}`,
    ),
    check(
      "appointment_blocked_ends_at_after_or_equal_ends_at_check",
      sql`${table.blockedEndsAt} >= ${table.endsAt}`,
    ),
  ],
);
