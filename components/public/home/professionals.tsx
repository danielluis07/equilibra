import Image from "next/image";
import Link from "next/link";
import { featuredProfessionals } from "@/lib/professionals";

export function Professionals() {
  return (
    <section id="equipe" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Nossa Equipe
          </span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Profissionais que{" "}
            <span className="italic text-primary">inspiram confiança</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Uma equipe cuidadosamente selecionada, comprometida com a excelência
            e a atualização contínua em suas áreas de atuação.
          </p>
        </div>

        {/* Professionals grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProfessionals.map((person, index) => (
            <Link
              key={person.slug}
              href={`/professionals/${person.slug}`}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}>
              {/* Photo */}
              <div className="relative mb-5 aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Quote on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed font-light italic text-white">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-sans! text-base font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {person.role}
              </p>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-primary">
                {person.focus.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
