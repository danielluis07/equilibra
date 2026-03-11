"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ProfessionalsFilters() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="rounded-2xl border border-border/50 bg-card/60 p-4 shadow-sm backdrop-blur-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          {/* Search input */}
          <div className="flex-1 space-y-1.5">
            <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Buscar profissional
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Nome do profissional..."
                className="h-10 rounded-lg border-border/60 bg-background pl-10 text-sm shadow-none focus-visible:border-primary/40 focus-visible:ring-primary/20"
              />
            </div>
          </div>

          {/* Specialty select */}
          <div className="space-y-1.5 sm:min-w-50">
            <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Especialidade
            </label>
            <Select>
              <SelectTrigger className="h-10 w-full rounded-lg border-border/60 bg-background shadow-none focus-visible:border-primary/40 focus-visible:ring-primary/20">
                <SelectValue placeholder="Todas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="tcc">
                  Terapia Cognitivo-Comportamental
                </SelectItem>
                <SelectItem value="psicanalise">Psicanálise</SelectItem>
                <SelectItem value="infantil">Psicologia Infantil</SelectItem>
                <SelectItem value="casal">Terapia de Casal</SelectItem>
                <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
                <SelectItem value="neuropsicologia">Neuropsicologia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Approach select */}
          <div className="space-y-1.5 sm:min-w-50">
            <label className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Tipo de atendimento
            </label>
            <Select>
              <SelectTrigger className="h-10 w-full rounded-lg border-border/60 bg-background shadow-none focus-visible:border-primary/40 focus-visible:ring-primary/20">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="presencial">Presencial</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="both">Presencial e Online</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter button */}
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-border/60 px-4">
            <SlidersHorizontal className="size-4" />
            <span className="sm:hidden lg:inline">Filtrar</span>
          </Button>
        </div>

        {/* Active filters (decorative) */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/30 pt-4">
          <span className="text-xs text-muted-foreground">
            Exibindo <strong className="text-foreground">12</strong>{" "}
            profissionais
          </span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Ordenar por:</span>
            <Select>
              <SelectTrigger className="h-7 min-w-32.5 rounded-md border-none bg-muted/50 text-xs shadow-none">
                <SelectValue placeholder="Nome (A–Z)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Nome (A–Z)</SelectItem>
                <SelectItem value="name-desc">Nome (Z–A)</SelectItem>
                <SelectItem value="specialty">Especialidade</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
