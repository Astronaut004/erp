import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { industries } from "@/data/industries";

export const IndustrySolutionsTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              Industry Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for your industry</h2>
            <p className="text-muted-foreground text-lg">
              Pre-configured modules tailored to the real workflows and compliance requirements of each sector.
            </p>
          </div>
        </ScrollReveal>

        {/* Pill tabs */}
        <ScrollReveal>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide justify-start md:flex-wrap md:justify-center">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <button
                  key={ind.slug}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                    i === activeIndex
                      ? "bg-primary text-white shadow-soft"
                      : "bg-white border border-border text-slate-600 hover:border-primary/40 hover:text-primary"
                  )}
                >
                  <IndIcon size={14} />
                  {ind.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div key={active.slug}>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary text-white flex items-center justify-center">
                  <ActiveIcon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{active.headline}</h3>
                  <p className="text-sm text-muted-foreground">{active.tagline}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">{active.subtext}</p>
              <Link
                to={`/solutions/${active.slug}`}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                View full solution <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>

          <div key={`${active.slug}-pain`}>
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {active.painPoints.map((p, i) => {
                  const PainIcon = p.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white rounded-xl border border-border p-4 shadow-soft"
                    >
                      <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <PainIcon size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-800 mb-1">{p.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
