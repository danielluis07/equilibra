import Image from "next/image";
import Link from "next/link";
import { MapPin, Video, Clock, Star } from "lucide-react";
import { professionals } from "@/lib/professionals";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function ProfessionalsGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {professionals.map((person, index) => (
          <Link
            key={person.slug}
            href={`/professionals/${person.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            style={{ animationDelay: `${index * 80}ms` }}>
            {/* Top: Image + overlay info */}
            <div className="relative h-56 overflow-hidden sm:h-60">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

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
                  {person.registration}
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
                <span className="rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground shadow-none">
                  Ver perfil
                </span>
              </div>
            </div>
          </Link>
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
