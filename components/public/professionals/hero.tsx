export function ProfessionalsHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-32 -right-32 h-112.5 w-112.5 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -bottom-24 -left-24 h-100 w-100 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" />
            Equipe Clínica
          </div>

          <h1 className="animate-fade-up animation-delay-200 mt-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Conheça nossos{" "}
            <span className="italic text-primary">profissionais</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-6 text-lg leading-relaxed text-muted-foreground">
            Uma equipe multidisciplinar cuidadosamente selecionada, comprometida
            com o seu bem-estar. Encontre o profissional ideal para a sua
            jornada de autoconhecimento.
          </p>

          {/* Stats ribbon */}
          <div className="animate-fade-up animation-delay-600 mx-auto mt-10 inline-flex items-center gap-6 rounded-2xl border border-border/50 bg-card/60 px-8 py-4 shadow-sm backdrop-blur-sm sm:gap-10">
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Profissionais</p>
            </div>
            <div className="h-8 w-px bg-border/60" />
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground">5</p>
              <p className="text-xs text-muted-foreground">Especialidades</p>
            </div>
            <div className="h-8 w-px bg-border/60" />
            <div className="text-center">
              <p className="text-2xl font-semibold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
