import Image from "next/image";

export function Cta() {
  return (
    <section id="agendar" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-white/5 blur-2xl" />
            {/* Organic pattern */}
            <svg
              className="absolute top-0 right-0 h-full w-1/2 text-white/4"
              viewBox="0 0 400 600"
              fill="currentColor">
              <circle cx="300" cy="100" r="150" />
              <circle cx="350" cy="400" r="200" />
              <circle cx="200" cy="300" r="100" />
            </svg>
          </div>

          <div className="relative grid items-center gap-12 px-8 py-16 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
            {/* Content */}
            <div>
              <h2 className="text-3xl tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Dê o primeiro passo
                <br />
                <span className="italic opacity-80">rumo ao bem-estar</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80">
                Não espere mais para cuidar da sua saúde mental. Agende sua
                primeira consulta agora e comece sua jornada de transformação.
                Nosso atendimento é acolhedor, sigiloso e sem julgamentos.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-all hover:shadow-xl">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Agendar Consulta
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden aspect-square overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=600&fit=crop"
                alt="Ambiente tranquilo e acolhedor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
