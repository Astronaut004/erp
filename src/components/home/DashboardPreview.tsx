import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Revenue", value: "$284,392", change: "+12.3%", up: true },
  { label: "Orders", value: "1,847", change: "+8.1%", up: true },
  { label: "Customers", value: "12,493", change: "+23.6%", up: true },
  { label: "Avg. Order", value: "$153.90", change: "-2.4%", up: false },
];

const chartBars = [38, 52, 44, 68, 72, 58, 82, 76, 90, 84, 96, 88];

export const DashboardPreview = () => (
  <section className="py-24 md:py-32 bg-surface-sunken">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Dashboard</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your command center</h2>
          <p className="text-muted-foreground text-lg">Real-time insights across every department. No more tab-switching between five different tools.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="rounded-2xl border border-border bg-card shadow-elevated overflow-hidden max-w-5xl mx-auto">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-secondary rounded-md px-4 py-1 text-xs text-muted-foreground font-mono">dashboard.litelink.io</div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-lg">Business Overview</h3>
                <p className="text-sm text-muted-foreground">March 2026</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                <TrendingUp size={16} />
                All systems nominal
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="text-xl font-bold tabular-nums">{s.value}</p>
                  <div className={`flex items-center gap-1 text-xs font-medium mt-1 ${s.up ? "text-primary" : "text-destructive"}`}>
                    {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {s.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart mockup */}
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-end justify-between h-32 gap-2">
                {chartBars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-primary/20 hover:bg-primary/40 transition-colors duration-200 relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${Math.round(h * 312)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
