import { Database, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const items = [
  {
    icon: Database,
    image: "/images/fragmented-data.jpg",
    problem: "Fragmented data across departments",
    solution: "Unified real-time dashboard",
    solutionDesc:
      "All modules share a single data layer — finance, inventory, HR, and sales update in real time so every team works from the same numbers.",
  },
  {
    icon: Clock,
    image: "/images/manual-reporting.jpg",
    problem: "Manual reporting taking days",
    solution: "Automated reports in minutes",
    solutionDesc:
      "LiteLink generates P&Ls, inventory reports, and payroll summaries automatically. Month-end close drops from 5 days to under 2 hours.",
  },
  {
    icon: ShieldCheck,
    image: "/images/compliance.jpg",
    problem: "Compliance gaps in regulated industries",
    solution: "Built-in audit trails",
    solutionDesc:
      "Every create, update, and delete is logged immutably. FSSAI, GST, and sector-specific compliance rules are baked in — not bolted on.",
  },
];

export const PainSolution = () => (
  <section className="py-20 md:py-28 bg-slate-50">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Why LiteLink</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From problem to solution</h2>
          <p className="text-muted-foreground text-lg">
            The pains every Indian business knows — and exactly how LiteLink solves them.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <StaggerItem key={item.problem}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="rounded-2xl border border-border bg-white overflow-hidden shadow-soft hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.problem}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-red-900/70" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-7 w-7 rounded-lg bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                      <item.icon size={14} />
                    </div>
                    <p className="text-xs font-semibold text-red-200 uppercase tracking-wider">Pain Point</p>
                  </div>
                  <p className="font-semibold text-white text-sm leading-snug">{item.problem}</p>
                </div>
              </div>
              {/* Solution */}
              <div className="px-6 py-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">LiteLink Solution</p>
                <p className="font-semibold text-slate-800 mb-2">{item.solution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.solutionDesc}</p>
                <div className="flex items-center gap-1 text-primary text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
