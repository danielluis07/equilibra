"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/services" },
  { label: "Profissionais", href: "/professionals" },
  { label: "Contato", href: "/#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative flex size-9 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110" />
            <svg
              viewBox="0 0 32 32"
              className="relative size-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M16 4 C10 4 5 9 5 16 C5 23 10 28 16 28" />
              <path d="M16 4 C22 4 27 9 27 16 C27 23 22 28 16 28" />
              <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className="font-serif text-xl tracking-tight text-foreground">
            Equilibra
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}>
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#agendar"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md lg:inline-flex">
          Agendar Consulta
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label="Menu de navegação">
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}>
        <div className="border-t border-border/50 bg-background/95 px-6 py-4 backdrop-blur-xl">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/5 text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border/50 pt-4">
            <Link
              href="/#agendar"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90">
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
