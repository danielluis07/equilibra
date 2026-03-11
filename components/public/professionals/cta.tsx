import Link from "next/link";

export function ProfessionalsCta() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/6 via-secondary/30 to-accent/10 p-8 sm:p-12 lg:p-16">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-16 -right-16 size-64 rounded-full bg-primary/5 blur-2xl" />
          <div className="animate-blob animation-delay-2000 absolute -bottom-16 -left-16 size-48 rounded-full bg-accent/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Não encontrou o que procura?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nossa equipe administrativa pode ajudar você a encontrar o
            profissional ideal para as suas necessidades. Entre em contato e
            faremos uma orientação personalizada.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com a recepção
            </Link>
            <Link
              href="tel:+551133334444"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background">
              <svg
                viewBox="0 0 24 24"
                className="size-4 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (11) 3333-4444
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
