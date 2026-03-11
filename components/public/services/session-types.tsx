import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  HeartHandshake,
  Baby,
  Users,
  Stethoscope,
  Laptop,
  Clock,
  MapPin,
  Video,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const sessions = [
  {
    icon: Brain,
    title: "Terapia Individual",
    subtitle: "Adultos e adolescentes",
    description:
      "Sessões focadas no autoconhecimento, manejo de emoções, superação de traumas e desenvolvimento de habilidades para lidar com os desafios do dia a dia. Trabalhamos com abordagens como TCC, Psicanálise, Terapia do Esquema e Humanismo.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&h=500&fit=crop",
    duration: "50 min",
    formats: ["Presencial", "Online"],
    audiences: ["Adultos (18+)", "Adolescentes (14–17)"],
    indications: [
      "Ansiedade e pânico",
      "Depressão",
      "Estresse e burnout",
      "Autoestima",
      "Luto e perdas",
      "Fobias e TOC",
    ],
    price: "A partir de R$ 180",
  },
  {
    icon: HeartHandshake,
    title: "Terapia de Casal",
    subtitle: "Fortalecimento de vínculos",
    description:
      "Espaço seguro para casais trabalharem a comunicação, resolverem conflitos e fortalecerem os laços afetivos. O terapeuta atua como mediador, facilitando o diálogo e promovendo a compreensão mútua.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&h=500&fit=crop",
    duration: "75 min",
    formats: ["Presencial", "Online"],
    audiences: ["Casais"],
    indications: [
      "Conflitos recorrentes",
      "Dificuldade de comunicação",
      "Infidelidade",
      "Ciúmes excessivos",
      "Crise no relacionamento",
      "Planejamento familiar",
    ],
    price: "A partir de R$ 250",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    subtitle: "Harmonia e convivência",
    description:
      "Terapia voltada para famílias que enfrentam conflitos, mudanças ou dificuldades de relacionamento. O trabalho busca fortalecer vínculos, melhorar a comunicação e construir uma convivência mais saudável.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700&h=500&fit=crop",
    duration: "75 min",
    formats: ["Presencial"],
    audiences: ["Famílias"],
    indications: [
      "Conflitos familiares",
      "Divórcio e recasamento",
      "Dificuldade com filhos adolescentes",
      "Luto familiar",
      "Mudanças na dinâmica familiar",
      "Dependência química de um membro",
    ],
    price: "A partir de R$ 280",
  },
  {
    icon: Baby,
    title: "Terapia Infantil",
    subtitle: "Desenvolvimento e acolhimento",
    description:
      "Atendimento especializado para crianças, utilizando o brincar como linguagem terapêutica. Em um ambiente lúdico e seguro, a criança expressa emoções, trabalha dificuldades e desenvolve habilidades socioemocionais.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=700&h=500&fit=crop",
    duration: "50 min",
    formats: ["Presencial"],
    audiences: ["Crianças (4–12 anos)"],
    indications: [
      "Ansiedade infantil",
      "Dificuldade de aprendizagem",
      "Agressividade",
      "TDAH",
      "Autismo (TEA)",
      "Medos e inseguranças",
    ],
    price: "A partir de R$ 180",
  },
  {
    icon: Stethoscope,
    title: "Avaliação Psicológica",
    subtitle: "Psicodiagnóstico completo",
    description:
      "Avaliações neuropsicológicas e psicodiagnósticos realizados por profissionais especializados, com emissão de laudos completos para diversas finalidades: clínica, jurídica, escolar e profissional.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop",
    duration: "90 min por sessão",
    formats: ["Presencial"],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    indications: [
      "Avaliação neuropsicológica",
      "Laudo para escola ou trabalho",
      "Diagnóstico diferencial",
      "Avaliação para cirurgia bariátrica",
      "Avaliação para TDAH",
      "Perícia psicológica",
    ],
    price: "Sob consulta",
  },
  {
    icon: Laptop,
    title: "Atendimento Online",
    subtitle: "Onde quer que você esteja",
    description:
      "Sessões por videoconferência com a mesma qualidade, sigilo e eficácia do atendimento presencial. Ideal para quem tem rotina corrida, mora em outra cidade ou prefere a comodidade do atendimento remoto.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=500&fit=crop",
    duration: "50 min",
    formats: ["Online"],
    audiences: ["Adultos", "Adolescentes", "Casais"],
    indications: [
      "Disponível para todas as especialidades",
      "Plataforma segura e criptografada",
      "Flexibilidade de horário",
      "Atendimento de qualquer lugar",
    ],
    price: "A partir de R$ 180",
  },
];

export function SessionTypes() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
      <div className="space-y-20">
        {sessions.map((session, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={session.title}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5">
              <div
                className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"}`}>
                {/* Image */}
                <div
                  className={`relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-120 ${isEven ? "" : "lg:order-2"}`}>
                  <Image
                    src={session.image}
                    alt={session.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent lg:hidden" />

                  {/* Duration chip on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
                    <Clock className="size-3 text-primary" />
                    {session.duration}
                  </div>

                  {/* Formats chips */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {session.formats.map((format) => (
                      <span
                        key={format}
                        className="flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        {format === "Online" ? (
                          <Video className="size-3 text-primary" />
                        ) : (
                          <MapPin className="size-3 text-primary" />
                        )}
                        {format}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${isEven ? "" : "lg:order-1"}`}>
                  {/* Icon + title */}
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <session.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl tracking-tight sm:text-3xl">
                        {session.title}
                      </h2>
                      <p className="text-sm text-primary">{session.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {session.description}
                  </p>

                  {/* Audience */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Público:
                    </span>
                    {session.audiences.map((audience) => (
                      <span
                        key={audience}
                        className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground">
                        {audience}
                      </span>
                    ))}
                  </div>

                  <Separator className="my-6 bg-border/50" />

                  {/* Indications grid */}
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Indicações
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {session.indications.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs text-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: price + CTA */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Investimento
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {session.price}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="rounded-full px-8 shadow-lg shadow-primary/20"
                      asChild>
                      <Link href="/#agendar">
                        Agendar
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
