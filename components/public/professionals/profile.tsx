import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Video,
  Star,
  Clock,
  GraduationCap,
  BadgeCheck,
  CalendarDays,
  Users,
  Heart,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop&crop=faces";

/* ── Static mock data ── */
const professional = {
  name: "Dra. Camila Ferreira",
  slug: "dra-camila-ferreira",
  crp: "CRP 06/12345",
  title: "Psicóloga Clínica",
  specialty: "Terapia Cognitivo-Comportamental",
  rating: 4.9,
  reviews: 127,
  experience: "12 anos",
  bio: `Sou psicóloga clínica com mais de 12 anos de experiência no atendimento a adultos e adolescentes. Minha abordagem é fundamentada na Terapia Cognitivo-Comportamental (TCC), aliada a técnicas de mindfulness e terapia do esquema.

Acredito que cada pessoa traz consigo os recursos necessários para a mudança — meu papel é acompanhar esse processo com acolhimento, escuta atenta e ferramentas baseadas em evidências científicas.

Ao longo da minha trajetória, tive o privilégio de ajudar centenas de pessoas a superarem quadros de ansiedade, depressão, transtorno obsessivo-compulsivo e dificuldades nos relacionamentos. Cada história me ensina algo novo e reforça minha paixão por essa profissão.`,
  education: [
    "Graduação em Psicologia — Universidade de São Paulo (USP)",
    "Especialização em TCC — Instituto de Psiquiatria do HC-FMUSP",
    "Formação em Terapia do Esquema — ISST (International Society of Schema Therapy)",
    "Mestrado em Psicologia Clínica — PUC-SP",
  ],
  specialties: [
    "Terapia Cognitivo-Comportamental (TCC)",
    "Terapia do Esquema",
    "Mindfulness e Técnicas de Relaxamento",
    "Psicoterapia Breve",
  ],
  targetAudience: [
    { icon: Users, label: "Adultos (18+)" },
    { icon: GraduationCap, label: "Adolescentes (14–17)" },
    { icon: Heart, label: "Casais" },
  ],
  focusAreas: [
    "Ansiedade e Pânico",
    "Depressão",
    "Transtorno Obsessivo-Compulsivo (TOC)",
    "Estresse e Burnout",
    "Dificuldades nos Relacionamentos",
    "Autoestima e Autoconhecimento",
    "Luto e Perdas",
    "Fobias Específicas",
  ],
  modalities: [
    {
      icon: MapPin,
      label: "Presencial",
      detail: "Av. Paulista, 1578 — Conj. 412, São Paulo – SP",
    },
    {
      icon: Video,
      label: "Online",
      detail: "Atendimento por videoconferência via plataforma segura",
    },
  ],
  schedule: [
    { day: "Segunda-feira", hours: "8h – 18h" },
    { day: "Terça-feira", hours: "8h – 20h" },
    { day: "Quarta-feira", hours: "8h – 18h" },
    { day: "Quinta-feira", hours: "8h – 20h" },
    { day: "Sexta-feira", hours: "8h – 16h" },
  ],
  sessionDuration: "50 minutos",
  nextAvailable: "Quarta, 12 de março",
};

export function ProfessionalProfile() {
  return (
    <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-32 -right-32 h-100 w-100 rounded-full bg-primary/4 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -left-24 h-87.5 w-87.5 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/professionals"
          className="animate-fade-up group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Voltar para profissionais
        </Link>

        {/* ── Hero card ── */}
        <div className="animate-fade-up animation-delay-200 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm">
          <div className="grid lg:grid-cols-[360px_1fr]">
            {/* Photo column */}
            <div className="relative aspect-3/4 lg:aspect-auto">
              <Image
                src={PLACEHOLDER_IMAGE}
                alt={professional.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              {/* Gradient overlay on mobile */}
              <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent lg:hidden" />

              {/* Rating chip */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                {professional.rating}
                <span className="text-xs font-normal text-muted-foreground">
                  ({professional.reviews} avaliações)
                </span>
              </div>
            </div>

            {/* Info column */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-500/20">
                  <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                  Disponível — {professional.nextAvailable}
                </span>
              </div>

              {/* Name */}
              <h1 className="mt-4 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {professional.name}
              </h1>

              {/* Title + CRP */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-base font-medium text-foreground">
                  {professional.title}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-primary" />
                  {professional.crp}
                </span>
              </div>

              {/* Quick stats */}
              <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2">
                  <Clock className="size-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {professional.experience}
                  </span>
                  <span className="text-xs text-muted-foreground">exp.</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2">
                  <Brain className="size-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {professional.specialty}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2">
                  <CalendarDays className="size-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {professional.sessionDuration}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    / sessão
                  </span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-full px-8 shadow-lg shadow-primary/20">
                  <CalendarDays className="size-4" />
                  Agendar com {professional.name.split(" ")[0]}.{" "}
                  {professional.name.split(" ").pop()}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                  asChild>
                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content grid ── */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main column */}
          <div className="space-y-10">
            {/* Bio */}
            <section className="animate-fade-up animation-delay-300">
              <h2 className="text-2xl tracking-tight">Sobre</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                {professional.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            <Separator className="bg-border/50" />

            {/* Specialties */}
            <section className="animate-fade-up animation-delay-400">
              <h2 className="text-2xl tracking-tight">Especialidades</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {professional.specialties.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/60 p-4 transition-colors hover:border-primary/20">
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium leading-snug text-foreground">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-border/50" />

            {/* Focus areas */}
            <section className="animate-fade-up animation-delay-500">
              <h2 className="text-2xl tracking-tight">Áreas de Atuação</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {professional.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5">
                    {area}
                  </span>
                ))}
              </div>
            </section>

            <Separator className="bg-border/50" />

            {/* Target audience */}
            <section className="animate-fade-up animation-delay-600">
              <h2 className="text-2xl tracking-tight">Público Atendido</h2>
              <div className="mt-5 flex flex-wrap gap-4">
                {professional.targetAudience.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 px-5 py-3.5 transition-colors hover:border-primary/20">
                    <item.icon className="size-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-border/50" />

            {/* Education */}
            <section className="animate-fade-up animation-delay-700">
              <h2 className="text-2xl tracking-tight">Formação Acadêmica</h2>
              <div className="mt-5 space-y-4">
                {professional.education.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/40">
                      <GraduationCap className="size-4 text-accent-foreground" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* Service modalities */}
            <div className="animate-fade-up animation-delay-400 rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
              <h3 className="font-sans! text-base font-semibold text-foreground">
                Modalidades de Atendimento
              </h3>
              <div className="mt-4 space-y-3">
                {professional.modalities.map((mod) => (
                  <div
                    key={mod.label}
                    className="flex items-start gap-3 rounded-xl bg-muted/30 p-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <mod.icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {mod.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {mod.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available schedule */}
            <div className="animate-fade-up animation-delay-500 rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
              <h3 className="font-sans! text-base font-semibold text-foreground">
                Horários Disponíveis
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Sessões de {professional.sessionDuration}
              </p>

              <div className="mt-4 space-y-2">
                {professional.schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors odd:bg-muted/30">
                    <span className="font-medium text-foreground">
                      {item.day}
                    </span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-5 bg-border/50" />

              {/* Sticky CTA */}
              <div className="space-y-3">
                <Button className="w-full rounded-full shadow-lg shadow-primary/20">
                  <CalendarDays className="size-4" />
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  asChild>
                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer">
                    Enviar Mensagem
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact mini card */}
            <div className="animate-fade-up animation-delay-600 rounded-2xl border border-primary/15 bg-primary/3 p-6">
              <p className="text-sm font-medium text-foreground">
                Tem dúvidas sobre o atendimento?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Nossa equipe pode ajudar a esclarecer valores, planos de saúde
                aceitos e modalidades de pagamento.
              </p>
              <Link
                href="tel:+551133334444"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                (11) 3333-4444
                <span className="transition-transform hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
