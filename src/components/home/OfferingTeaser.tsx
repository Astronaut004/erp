import { Link } from "react-router-dom";
import { ArrowRight, Layers, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  {
    icon: Briefcase,
    label: "Our Services",
    desc: "Mobile apps, web apps, chatbots, automation, RPA, Power BI, POC development, and dedicated support — the full digital stack.",
    href: "/services",
    cta: "See all services",
  },
  {
    icon: Layers,
    label: "Industry Solutions",
    desc: "ERP modules built for Hotels, Hospitals, Manufacturing, Schools, Transport, Van Sales, Tour & Travel, and more.",
    href: "/solutions",
    cta: "Explore solutions",
  },
];

export const OfferingTeaser = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything your business needs</h2>
          <p className="text-muted-foreground text-lg">Services, products, and industry solutions — all under one roof.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cards.map((c) => (
          <ScrollReveal key={c.label}>
            <Link
              to={c.href}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 h-full"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
                {c.cta} <ArrowRight size={15} />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
