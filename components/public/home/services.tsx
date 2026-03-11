import Image from "next/image";
import {
  Brain,
  HeartHandshake,
  Baby,
  Users,
  Stethoscope,
  Laptop,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Terapia Individual",
    description:
      "Sessões personalizadas para adultos com foco em autoconhecimento, manejo de ansiedade, depressão e desenvolvimento pessoal.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
  },
  {
    icon: HeartHandshake,
    title: "Terapia de Casal",
    description:
      "Fortalecimento de vínculos, resolução de conflitos e melhoria da comunicação entre parceiros.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
  },
  {
    icon: Baby,
    title: "Terapia Infantil",
    description:
      "Atendimento lúdico e acolhedor para crianças, ajudando no desenvolvimento emocional e comportamental.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    description:
      "Mediação de conflitos familiares, fortalecimento de laços e construção de uma convivência mais harmoniosa.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
  },
  {
    icon: Stethoscope,
    title: "Avaliação Psicológica",
    description:
      "Avaliações neuropsicológicas e psicodiagnósticos com laudos completos para diferentes finalidades.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    icon: Laptop,
    title: "Atendimento Online",
    description:
      "Sessões por videoconferência com a mesma qualidade do presencial, onde quer que você esteja.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/30 via-transparent to-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Nossos Serviços
            </span>
            <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Cuidados para cada{" "}
              <span className="italic text-primary">fase da vida</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-right">
            Oferecemos uma gama completa de serviços psicológicos, adaptados às
            suas necessidades específicas.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Icon badge */}
                <div className="absolute bottom-4 left-6 flex size-11 items-center justify-center rounded-xl border border-background/20 bg-background/90 shadow-lg backdrop-blur-sm">
                  <service.icon className="size-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="font-sans! text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Saiba mais
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
