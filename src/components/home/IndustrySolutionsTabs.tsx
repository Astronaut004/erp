import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { industries } from "@/data/industries";

const ease = [0.16, 1, 0.3, 1] as const;

export const IndustrySolutionsTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = industries[activeIndex];
  const ActiveIcon = active.icon;

  const handleTab = (i: number) => {
    setDirection(i >= activeIndex ? 1 : -1);
    setActiveIndex(i);
  };

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
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.slug}
                  onClick={() => handleTab(i)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 shrink-0",
                    isActive
                      ? "text-white shadow-soft"
                      : "bg-white border border-border text-slate-600 hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <IndIcon size={14} />
                    {ind.label}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.slug}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease }}
            >
              {/* Industry image */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 shadow-soft">
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                    <ActiveIcon size={18} />
                  </div>
                  <span className="text-white font-semibold text-sm">{active.label}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{active.headline}</h3>
              <p className="text-sm text-muted-foreground mb-4">{active.tagline}</p>
              <p className="text-slate-700 leading-relaxed mb-6">{active.subtext}</p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-flex">
                <Link
                  to={`/solutions/${active.slug}`}
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  View full solution <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${active.slug}-pain`}
              custom={direction}
              initial={{ opacity: 0, x: direction * -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * 24 }}
              transition={{ duration: 0.35, ease, delay: 0.05 }}
            >
              <div className="space-y-3">
                {active.painPoints.map((p, i) => {
                  const PainIcon = p.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.07, ease }}
                      className="flex items-start gap-4 bg-white rounded-xl border border-border p-4 shadow-soft hover:border-primary/30 hover:shadow-card-hover transition-all duration-200"
                    >
                      <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <PainIcon size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-800 mb-1">{p.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
