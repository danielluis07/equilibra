import Image from "next/image";
import { MapPin, Video, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces";

const professionals = [
  {
    name: "Dra. Camila Ferreira",
    crp: "CRP 06/12345",
    specialty: "Terapia Cognitivo-Comportamental",
    focus: ["Ansiedade", "Depressão", "TOC"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 127,
    experience: "12 anos de experiência",
    bio: "Especialista em transtornos de ansiedade e humor, com abordagem acolhedora e baseada em evidências científicas.",
  },
  {
    name: "Dr. Rafael Mendes",
    crp: "CRM 54321",
    specialty: "Psiquiatria",
    focus: ["Psicofarmacologia", "Transtornos de Humor", "TDAH"],
    modality: "Presencial",
    availability: "Disponível na próxima semana",
    rating: 4.8,
    reviews: 93,
    experience: "15 anos de experiência",
    bio: "Psiquiatra com foco em tratamento integrado, combinando medicação quando necessário com acompanhamento terapêutico.",
  },
  {
    name: "Dra. Juliana Costa",
    crp: "CRP 06/67890",
    specialty: "Psicologia Infantil",
    focus: ["Ludoterapia", "Desenvolvimento Infantil", "TDAH"],
    modality: "Presencial",
    availability: "Disponível esta semana",
    rating: 5.0,
    reviews: 84,
    experience: "8 anos de experiência",
    bio: "Apaixonada pelo universo infantil, utiliza o brincar como ferramenta terapêutica para o desenvolvimento emocional.",
  },
  {
    name: "Dr. André Oliveira",
    crp: "CRP 06/11223",
    specialty: "Psicanálise",
    focus: ["Terapia de Casal", "Autoconhecimento", "Luto"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 156,
    experience: "18 anos de experiência",
    bio: "Psicanalista com vasta experiência em terapia de casal e individual, focado na escuta profunda e transformação pessoal.",
  },
  {
    name: "Dra. Mariana Santos",
    crp: "CRP 06/33445",
    specialty: "Neuropsicologia",
    focus: ["Avaliação Neuropsicológica", "Reabilitação Cognitiva"],
    modality: "Presencial",
    availability: "Disponível na próxima semana",
    rating: 4.7,
    reviews: 62,
    experience: "10 anos de experiência",
    bio: "Neuropsicóloga especializada em avaliação e reabilitação, com experiência em casos de TDAH, TEA e lesões cerebrais.",
  },
  {
    name: "Dr. Lucas Ribeiro",
    crp: "CRP 06/55667",
    specialty: "Terapia Cognitivo-Comportamental",
    focus: ["Fobias", "Pânico", "Estresse Pós-Traumático"],
    modality: "Online",
    availability: "Disponível esta semana",
    rating: 4.8,
    reviews: 108,
    experience: "9 anos de experiência",
    bio: "Especialista em transtornos de ansiedade e traumas, com formação em EMDR e técnicas de exposição.",
  },
  {
    name: "Dra. Beatriz Almeida",
    crp: "CRP 06/77889",
    specialty: "Terapia de Casal",
    focus: ["Comunicação", "Conflitos", "Sexualidade"],
    modality: "Presencial e Online",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 74,
    experience: "11 anos de experiência",
    bio: "Terapeuta de casal com abordagem sistêmica, ajudando parceiros a reconstruir a comunicação e o vínculo afetivo.",
  },
  {
    name: "Dr. Felipe Torres",
    crp: "CRP 06/99001",
    specialty: "Psicologia Clínica",
    focus: ["Burnout", "Carreira", "Autoestima"],
    modality: "Online",
    availability: "Disponível na próxima semana",
    rating: 4.6,
    reviews: 51,
    experience: "7 anos de experiência",
    bio: "Focado em saúde mental no trabalho, auxilia profissionais a encontrar equilíbrio entre carreira e vida pessoal.",
  },
  {
    name: "Dra. Isabela Martins",
    crp: "CRP 06/22334",
    specialty: "Psicologia Infantil",
    focus: ["Autismo", "Dificuldade de Aprendizagem", "Ansiedade Infantil"],
    modality: "Presencial",
    availability: "Disponível esta semana",
    rating: 4.9,
    reviews: 91,
    experience: "13 anos de experiência",
    bio: "Especialista em TEA e dificuldades de aprendizagem, com abordagem lúdica e acolhedora para crianças e famílias.",
  },
];

export function ProfessionalsGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {professionals.map((person, index) => (
          <article
            key={person.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            style={{ animationDelay: `${index * 80}ms` }}>
            {/* Top: Image + overlay info */}
            <div className="relative h-56 overflow-hidden sm:h-60">
              <Image
                src={PLACEHOLDER_IMAGE}
                alt={person.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />

              {/* Availability badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                    person.availability.includes("esta")
                      ? "bg-green-500/10 text-green-700 ring-1 ring-green-500/20"
                      : "bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20"
                  }`}>
                  <span
                    className={`size-1.5 rounded-full ${
                      person.availability.includes("esta")
                        ? "bg-green-500"
                        : "bg-amber-500"
                    }`}
                  />
                  {person.availability}
                </span>
              </div>

              {/* Rating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
                <Star className="size-3 fill-amber-400 text-amber-400" />
                {person.rating}
                <span className="text-muted-foreground font-normal">
                  ({person.reviews})
                </span>
              </div>

              {/* Modality tag at bottom-right of image */}
              <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                {person.modality.includes("Online") ? (
                  <Video className="size-3 text-primary" />
                ) : (
                  <MapPin className="size-3 text-primary" />
                )}
                {person.modality}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 pt-4">
              {/* Name + credential */}
              <div>
                <h3 className="font-sans! text-lg font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {person.crp}
                </p>
              </div>

              {/* Specialty */}
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {person.specialty}
                </span>
              </div>

              {/* Bio */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {person.bio}
              </p>

              {/* Focus tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {person.focus.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer: experience + CTA */}
              <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {person.experience}
                </div>
                <Button
                  size="sm"
                  className="rounded-full px-4 text-xs shadow-none">
                  Agendar
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" text="Anterior" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" text="Próximo" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
