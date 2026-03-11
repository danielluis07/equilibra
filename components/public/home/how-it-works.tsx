import {
  CalendarDays,
  MessageCircle,
  ClipboardList,
  Smile,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Agendamento",
    description:
      "Escolha o profissional e o horário que melhor se encaixam na sua rotina. Agende online em poucos cliques ou entre em contato pelo WhatsApp.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Acolhimento Inicial",
    description:
      "Na primeira sessão, conheceremos sua história e suas necessidades. É um momento de escuta atenta, sem julgamentos.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Plano Terapêutico",
    description:
      "Juntos, construímos um plano personalizado com objetivos claros, abordagem adequada e frequência ideal para você.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Acompanhamento",
    description:
      "Sessões regulares com acompanhamento do seu progresso, ajustando o percurso conforme sua evolução e necessidades.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/4 via-transparent to-accent/6" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Como Funciona
          </span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Sua jornada começa com um{" "}
            <span className="italic text-primary">simples passo</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            O primeiro passo pode parecer difícil, mas estamos aqui para tornar
            esse processo o mais acolhedor possível.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Connecting line — desktop only */}
          <div className="absolute top-24 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative text-center"
                style={{ animationDelay: `${index * 200}ms` }}>
                {/* Step number + icon */}
                <div className="relative mx-auto mb-6">
                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <step.icon className="size-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                    {step.number}
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
      </div>
    </section>
  );
}
