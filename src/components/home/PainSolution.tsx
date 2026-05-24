import { Database, Clock, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const items = [
  {
    icon: Database,
    problem: "Fragmented data across departments",
    solution: "Unified real-time dashboard",
    solutionDesc:
      "All modules share a single data layer — finance, inventory, HR, and sales update in real time so every team works from the same numbers.",
  },
  {
    icon: Clock,
    problem: "Manual reporting taking days",
    solution: "Automated reports in minutes",
    solutionDesc:
      "LiteLink generates P&Ls, inventory reports, and payroll summaries automatically. Month-end close drops from 5 days to under 2 hours.",
  },
  {
    icon: ShieldCheck,
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
            <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-soft h-full flex flex-col">
              {/* Problem header */}
              <div className="bg-red-50 border-b border-red-100 px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                    <item.icon size={18} />
                  </div>
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">Pain Point</p>
                </div>
                <p className="font-semibold text-red-800 text-base leading-snug">{item.problem}</p>
              </div>
              {/* Solution */}
              <div className="px-6 py-5 flex-1">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">LiteLink Solution</p>
                <p className="font-semibold text-slate-800 mb-2">{item.solution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.solutionDesc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
