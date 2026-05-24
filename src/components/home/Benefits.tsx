import { Clock, DollarSign, TrendingUp } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const benefits = [
  {
    icon: Clock,
    stat: "47%",
    title: "Faster operations",
    desc: "Automate repetitive workflows and eliminate manual data entry across departments. Teams reclaim an average of 12 hours per week.",
  },
  {
    icon: DollarSign,
    stat: "31%",
    title: "Lower overhead costs",
    desc: "Replace 6+ disconnected tools with one platform. Reduce licensing, training, and integration maintenance costs from day one.",
  },
  {
    icon: TrendingUp,
    stat: "3.2×",
    title: "Faster scaling",
    desc: "Add new teams, locations, and product lines without re-architecting your stack. LiteLink grows with you from 10 to 10,000 employees.",
  },
];

export const Benefits = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable results from week one</h2>
          <p className="text-muted-foreground text-lg">Our customers see real ROI — not a year later, but within the first billing cycle.</p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <StaggerItem key={b.title}>
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-soft h-full">
              <div className="mb-5 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                <b.icon size={22} />
              </div>
              <p className="text-4xl font-extrabold text-gradient-primary mb-2">{b.stat}</p>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
