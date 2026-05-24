import { ScrollReveal } from "@/components/ScrollReveal";

const logos = [
  "Meridian Labs", "Arctura", "Verdant Co", "NorthPeak", "Helix Dynamics",
  "Crestline", "Athena Systems", "Prism Works",
];

export const LogoCloud = () => (
  <section className="py-16 border-b border-border/50">
    <div className="container">
      <ScrollReveal>
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">
          Trusted by forward-thinking teams
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden">
        <div className="flex animate-logo-scroll gap-12 w-max">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground/40 whitespace-nowrap">
              <div className="h-6 w-6 rounded bg-border" />
              <span className="text-sm font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
