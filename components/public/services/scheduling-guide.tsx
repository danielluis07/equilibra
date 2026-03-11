import Link from "next/link";
import { CalendarDays, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Escolha o serviço",
    description:
      "Navegue pelos nossos serviços e identifique o tipo de atendimento mais adequado às suas necessidades.",
  },
  {
    number: "02",
    title: "Selecione o profissional",
    description:
      "Conheça nossa equipe e escolha o profissional com quem você se sente mais confortável para iniciar.",
  },
  {
    number: "03",
    title: "Agende sua consulta",
    description:
      "Entre em contato pelo WhatsApp, telefone ou agende diretamente pelo nosso sistema online.",
  },
];

const channels = [
  {
    icon: CalendarDays,
    label: "Agendamento Online",
    description: "Escolha data e horário pelo nosso sistema",
    href: "/#agendar",
    cta: "Agendar agora",
    highlight: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Fale com nossa equipe em tempo real",
    href: "https://wa.me/5511999999999",
    cta: "(11) 99999-9999",
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone",
    description: "Ligue para nossa recepção",
    href: "tel:+551133334444",
    cta: "(11) 3333-4444",
    external: true,
  },
];

export function SchedulingGuide() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Agendamento
          </span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">
            Como agendar sua{" "}
            <span className="italic text-primary">primeira consulta</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O processo é simples e acolhedor. Estamos prontos para receber você.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute top-20 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="group relative text-center">
                <div className="relative mx-auto mb-5">
                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <span className="text-xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-sans! text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Channels */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {channels.map((channel) => {
            const Wrapper = channel.external ? "a" : Link;
            const wrapperProps = channel.external
              ? {
                  href: channel.href,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : { href: channel.href };

            return (
              <Wrapper
                key={channel.label}
                {...wrapperProps}
                className={`group relative flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  channel.highlight
                    ? "border-primary/30 bg-primary/5 hover:shadow-primary/10"
                    : "border-border/50 bg-card hover:border-primary/20 hover:shadow-primary/5"
                }`}>
                {channel.highlight && (
                  <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    Recomendado
                  </span>
                )}
                <div
                  className={`flex size-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                    channel.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}>
                  <channel.icon className="size-5" />
                </div>
                <h3 className="font-sans! mt-4 text-base font-semibold text-foreground">
                  {channel.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {channel.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {channel.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Wrapper>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground">
            Tem dúvidas sobre qual serviço é ideal para você?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/20"
              asChild>
              <Link href="/professionals">
                Conheça nossos profissionais
                <ArrowRight className="size-4" />
              </Link>
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
                Orientação gratuita via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
