import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-24 -right-24 h-125 w-125 rounded-full bg-primary/6 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -bottom-32 -left-32 h-150 w-150 rounded-full bg-accent/20 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        {/* Text content */}
        <div className="order-2 lg:order-1">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" />
            Clínica de Psicologia &amp; Saúde Mental
          </div>

          <h1 className="animate-fade-up animation-delay-200 mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Encontre o seu
            <span className="relative ml-2 inline-block">
              equilíbrio
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary/30"
                viewBox="0 0 200 12"
                fill="none">
                <path
                  d="M2 8 C50 2, 150 2, 198 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-primary">interior</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Na Equilibra, acreditamos que o cuidado com a saúde mental é um
            caminho de autoconhecimento. Nossa equipe de profissionais
            especializados está pronta para acompanhar você nessa jornada com
            acolhimento, ética e respeito.
          </p>

          <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#agendar"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
              <span className="relative z-10">Agendar Consulta</span>
              <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-primary">
              Conheça a clínica
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up animation-delay-800 mt-14 flex items-center gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="text-2xl font-semibold text-foreground">+2.500</p>
              <p className="text-xs text-muted-foreground">
                Pacientes atendidos
              </p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div>
              <p className="text-2xl font-semibold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">
                Profissionais especializados
              </p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div>
              <p className="text-2xl font-semibold text-foreground">8 anos</p>
              <p className="text-xs text-muted-foreground">
                De experiência clínica
              </p>
            </div>
          </div>
        </div>

        {/* Image composition */}
        <div className="relative order-1 lg:order-2">
          <div className="animate-fade-in animation-delay-300 relative">
            {/* Main image */}
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-2xl shadow-foreground/5">
              <Image
                src="/images/hero.png"
                alt="Ambiente acolhedor da clínica Equilibra"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="animate-float animation-delay-500 absolute -right-4 -bottom-6 rounded-2xl border border-border/50 bg-background/90 p-4 shadow-xl backdrop-blur-sm sm:-right-8 sm:-bottom-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    98% de satisfação
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Avaliação dos pacientes
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative organic shape */}
            <div className="animate-blob absolute -top-6 -left-6 -z-10 h-full w-full rounded-[2rem] bg-primary/[0.07]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in animation-delay-1200 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Explore
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
