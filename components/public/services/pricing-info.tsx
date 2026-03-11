import {
  CheckCircle2,
  HelpCircle,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const pricingNotes = [
  {
    icon: CreditCard,
    title: "Formas de Pagamento",
    description:
      "Aceitamos PIX, cartão de crédito (até 3x sem juros), débito e transferência bancária. Pagamento realizado diretamente na clínica ou via link seguro.",
  },
  {
    icon: ShieldCheck,
    title: "Convênios e Reembolso",
    description:
      "Não trabalhamos diretamente com convênios, mas emitimos recibo para reembolso junto ao seu plano de saúde. Consulte sua operadora sobre cobertura.",
  },
  {
    icon: HelpCircle,
    title: "Valores Sociais",
    description:
      "Disponibilizamos um número limitado de vagas com valores acessíveis para quem precisa de atendimento e não pode arcar com o investimento integral.",
  },
  {
    icon: CheckCircle2,
    title: "Cancelamento",
    description:
      "Solicitamos aviso com no mínimo 24 horas de antecedência para cancelamentos ou remarcações, evitando cobrança da sessão.",
  },
];

export function PricingInfo() {
  return (
    <section className="relative py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/20 via-transparent to-secondary/20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Investimento
          </span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">
            Informações sobre{" "}
            <span className="italic text-primary">valores e pagamento</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Acreditamos que o cuidado com a saúde mental deve ser acessível.
            Confira as condições e entre em contato para mais detalhes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingNotes.map((note) => (
            <div
              key={note.title}
              className="group relative rounded-2xl border border-border/50 bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <note.icon className="size-5" />
              </div>
              <h3 className="font-sans! text-base font-semibold text-foreground">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {note.description}
              </p>
            </div>
          ))}
        </div>

        {/* Price summary table */}
        <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
          <div className="border-b border-border/50 bg-primary/5 px-6 py-4">
            <h3 className="font-sans! text-sm font-semibold text-foreground">
              Resumo de valores por tipo de sessão
            </h3>
          </div>
          <div className="divide-y divide-border/40">
            {[
              {
                service: "Terapia Individual",
                duration: "50 min",
                price: "R$ 180 – R$ 280",
              },
              {
                service: "Terapia de Casal",
                duration: "75 min",
                price: "R$ 250 – R$ 350",
              },
              {
                service: "Terapia Familiar",
                duration: "75 min",
                price: "R$ 280 – R$ 380",
              },
              {
                service: "Terapia Infantil",
                duration: "50 min",
                price: "R$ 180 – R$ 280",
              },
              {
                service: "Avaliação Psicológica",
                duration: "90 min/sessão",
                price: "Sob consulta",
              },
              {
                service: "Atendimento Online",
                duration: "50 min",
                price: "R$ 180 – R$ 280",
              },
            ].map((row) => (
              <div
                key={row.service}
                className="flex items-center justify-between px-6 py-3.5 text-sm transition-colors hover:bg-muted/30">
                <div>
                  <span className="font-medium text-foreground">
                    {row.service}
                  </span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({row.duration})
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border/50 bg-muted/20 px-6 py-3">
            <p className="text-xs leading-relaxed text-muted-foreground">
              * Valores variam de acordo com o profissional e a abordagem. Entre
              em contato para informações atualizadas e condições especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
