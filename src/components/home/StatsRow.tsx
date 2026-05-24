import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { number: "2,400+", label: "Companies", sub: "across 6 countries" },
  { number: "8", label: "Industries", sub: "purpose-built solutions" },
  { number: "15+", label: "Years", sub: "of ERP experience" },
  { number: "98%", label: "Renewal Rate", sub: "year over year" },
];

export const StatsRow = () => (
  <section className="py-16 md:py-20 bg-white border-y border-border">
    <div className="container">
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-primary tabular-nums">{s.number}</p>
              <p className="font-semibold text-slate-800 mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
