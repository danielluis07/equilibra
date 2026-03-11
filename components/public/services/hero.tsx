export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-32 -right-32 h-100 w-100 rounded-full bg-primary/4 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" />
            Nossos Serviços
          </div>

          <h1 className="animate-fade-up animation-delay-200 mt-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Cuidados pensados para{" "}
            <span className="italic text-primary">cada necessidade</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-6 text-lg leading-relaxed text-muted-foreground">
            Oferecemos uma variedade de serviços terapêuticos, cada um desenhado
            para atender às particularidades da sua história. Conheça nossas
            modalidades e encontre o caminho mais adequado para você.
          </p>
        </div>
      </div>
    </section>
  );
}
