import { Heart, Shield, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Acolhimento Humanizado",
    description:
      "Cada pessoa é única. Nosso atendimento respeita sua história, seu ritmo e suas necessidades individuais.",
  },
  {
    icon: Shield,
    title: "Ética e Sigilo",
    description:
      "Compromisso absoluto com o sigilo profissional e os princípios éticos que regem nossa prática.",
  },
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description:
      "Psicólogos, psiquiatras e terapeutas trabalhando de forma integrada para o seu bem-estar completo.",
  },
  {
    icon: Sparkles,
    title: "Abordagens Baseadas em Evidências",
    description:
      "Utilizamos métodos cientificamente comprovados, atualizados com as melhores práticas clínicas.",
  },
];

export function ValueProposition() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_50%,var(--primary)_0%,transparent_50%)] opacity-[0.03]" />
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,var(--accent)_0%,transparent_50%)] opacity-[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Cuidar da mente é um{" "}
            <span className="relative inline-block">
              ato de coragem
              <div className="absolute -bottom-1 left-0 h-3 w-full bg-accent/40 -skew-x-6" />
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Na Equilibra, criamos um espaço seguro onde você pode se
            redescobrir. Nosso compromisso é oferecer um cuidado que transforma
            vidas, com respeito, empatia e excelência profissional.
          </p>
        </div>

        {/* Values grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 150}ms` }}>
              {/* Icon */}
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="size-5" />
              </div>

              <h3 className="font-sans! text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 bg-primary/30 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
