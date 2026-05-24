import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/mo",
    desc: "For small teams getting organized.",
    cta: "Start Free Trial",
    variant: "outline" as const,
    features: [
      "Up to 10 users",
      "Finance & Invoicing",
      "Inventory basics",
      "5 GB storage",
      "Email support",
      "Standard reports",
    ],
  },
  {
    name: "Business",
    price: "$99",
    period: "/user/mo",
    desc: "For growing companies that need more power.",
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
    features: [
      "Up to 100 users",
      "All 8 core modules",
      "Automation engine",
      "50 GB storage",
      "Priority support",
      "Custom reports & dashboards",
      "API access",
      "SSO / SAML",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex needs.",
    cta: "Contact Sales",
    variant: "outline" as const,
    features: [
      "Unlimited users",
      "All modules + add-ons",
      "Dedicated account manager",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "On-premise option",
      "SLA guarantee (99.99%)",
      "Data residency options",
    ],
  },
];

const faqs = [
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle, and we prorate the difference." },
  { q: "Is there a free trial?", a: "Yes — every plan comes with a 14-day free trial. No credit card required. You get full access to all features in your chosen tier." },
  { q: "What happens to my data if I cancel?", a: "Your data remains accessible for 30 days after cancellation. You can export everything as CSV or JSON at any time. After 30 days, data is permanently deleted." },
  { q: "Do you offer discounts for annual billing?", a: "Yes, annual billing saves you 20% compared to monthly. We also offer special pricing for nonprofits and educational institutions." },
  { q: "Can I add modules à la carte?", a: "On the Business and Enterprise plans, you can add specialized modules (like Manufacturing or Forecasting) individually. Contact our sales team for module pricing." },
];

const Pricing = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-muted-foreground text-lg">No hidden fees, no per-module charges. Pick a plan that fits, and scale when you're ready.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <div className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-soft h-full ${p.popular ? "border-primary shadow-medium" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={p.variant} size="lg" className="w-full" asChild>
                  <Link to="/contact">{p.cta}</Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 md:py-32">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">Can't find what you're looking for? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow">
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
