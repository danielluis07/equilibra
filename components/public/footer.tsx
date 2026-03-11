import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Sobre a Clínica", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Agendar Consulta", href: "#agendar" },
];

const serviceLinks = [
  { label: "Terapia Individual", href: "#servicos" },
  { label: "Terapia de Casal", href: "#servicos" },
  { label: "Terapia Infantil", href: "#servicos" },
  { label: "Terapia Familiar", href: "#servicos" },
  { label: "Atendimento Online", href: "#servicos" },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border/50">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="relative flex size-9 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/10" />
                <svg
                  viewBox="0 0 32 32"
                  className="relative size-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round">
                  <path d="M16 4 C10 4 5 9 5 16 C5 23 10 28 16 28" />
                  <path d="M16 4 C22 4 27 9 27 16 C27 23 22 28 16 28" />
                  <circle
                    cx="16"
                    cy="16"
                    r="3"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <span className="font-serif text-xl tracking-tight text-foreground">
                Equilibra
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cuidando da saúde mental com acolhimento, ética e excelência.
              Acreditamos que cada pessoa merece um espaço seguro para se
              redescobrir.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                <Instagram className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                <Facebook className="size-4" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary">
                <Linkedin className="size-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans! text-sm font-semibold tracking-wide text-foreground uppercase">
              Links Rápidos
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans! text-sm font-semibold tracking-wide text-foreground uppercase">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4">
            <h4 className="font-sans! text-sm font-semibold tracking-wide text-foreground uppercase">
              Contato &amp; Localização
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Av. Paulista, 1578 — Conj. 412
                  <br />
                  Bela Vista, São Paulo — SP
                  <br />
                  CEP 01310-200
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <Link
                  href="tel:+551133334444"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  (11) 3333-4444
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <Link
                  href="mailto:contato@equilibra.com.br"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  contato@equilibra.com.br
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Seg — Sex: 8h às 20h
                  <br />
                  Sáb: 8h às 14h
                </span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20BD5A] hover:shadow-md">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Equilibra — Clínica de Psicologia e
            Saúde Mental. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </Link>
            <span className="text-border">·</span>
            <Link href="#" className="transition-colors hover:text-foreground">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
