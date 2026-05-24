import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { number: "2,400+", label: "Companies", sub: "across 6 countries" },
  { number: "8", label: "Industries", sub: "purpose-built solutions" },
  { number: "15+", label: "Years", sub: "of ERP experience" },
  { number: "98%", label: "Renewal Rate", sub: "year over year" },
];

const parseNumber = (str: string) => {
  const match = str.match(/^([\d,]+)(.*)$/);
  if (!match) return null;
  return { num: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
};

const CounterStat = ({ number, label, sub }: { number: string; label: string; sub: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const parsed = parseNumber(number);
  const [display, setDisplay] = useState(parsed ? "0" + parsed.suffix : number);

  useEffect(() => {
    if (!isInView || !parsed) return;

    const duration = 1600;
    const start = performance.now();
    const end = parsed.num;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * end);
      const formatted = value >= 1000 ? value.toLocaleString("en-IN") : String(value);
      setDisplay(formatted + parsed.suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-primary tabular-nums">{display}</p>
      <p className="font-semibold text-slate-800 mt-1">{label}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
};

export const StatsRow = () => (
  <section className="py-16 md:py-20 bg-white border-y border-border">
    <div className="container">
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <CounterStat number={s.number} label={s.label} sub={s.sub} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
