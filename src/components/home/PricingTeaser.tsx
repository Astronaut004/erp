import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/mo",
    desc: "For small teams getting organized.",
    features: ["Up to 10 users", "Finance & Inventory", "Standard reports", "Email support"],
    cta: "Start Free Trial",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/user/mo",
    desc: "For companies that need more power.",
    features: ["Up to 100 users", "All 6 core modules", "Automation engine", "Priority support"],
    cta: "Start Free Trial",
    href: "/contact",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organisations at scale.",
    features: ["Unlimited users", "All modules + DRC support", "Dedicated manager", "SLA guarantee"],
    cta: "Contact Sales",
    href: "/contact",
    highlight: false,
  },
];

export const PricingTeaser = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. Pick a plan that fits, and scale when you're ready.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {plans.map((p) => (
          <StaggerItem key={p.name}>
            <div
              className={`relative flex flex-col rounded-2xl border p-7 h-full ${
                p.highlight
                  ? "border-primary bg-primary/5 shadow-medium"
                  : "border-border bg-card shadow-soft"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {p.badge}
                </div>
              )}
              <div className="mb-5">
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">{p.price}</span>
                  {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
                </div>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check size={15} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={p.href}
                className={`w-full text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-[#F59E0B] hover:bg-[#D97706] text-white"
                    : "border border-border hover:bg-slate-50 text-slate-700"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal>
        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 text-sm"
          >
            See full pricing & feature comparison <ArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
