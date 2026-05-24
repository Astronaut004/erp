import { Link } from "react-router-dom";
import { Box, CreditCard, Users, Settings, BarChart3, Shield } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const modules = [
  {
    icon: Box,
    name: "Inventory Management",
    desc: "Multi-location stock tracking, automated reorder points, barcode scanning, and batch traceability.",
    href: "/features#inventory",
  },
  {
    icon: CreditCard,
    name: "Finance & Accounting",
    desc: "Multi-currency invoicing, automated reconciliation, real-time P&L, and GST/VAT compliance.",
    href: "/features#finance",
  },
  {
    icon: Users,
    name: "HR & Payroll",
    desc: "Employee lifecycle management, automated payroll with tax calculations, and self-service portals.",
    href: "/features#hr",
  },
  {
    icon: Settings,
    name: "Production Planning",
    desc: "Bill of materials, work orders, shop-floor tracking, and quality control checkpoints.",
    href: "/features#production",
  },
  {
    icon: BarChart3,
    name: "Sales & CRM",
    desc: "Visual pipeline management, lead scoring, quote generation, and customer health dashboards.",
    href: "/features#crm",
  },
  {
    icon: Shield,
    name: "Compliance & Reporting",
    desc: "Role-based access, immutable audit trails, 50+ built-in reports, and regulatory tooling.",
    href: "/features#compliance",
  },
];

export const CoreModules = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Modules</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything your business needs</h2>
          <p className="text-muted-foreground text-lg">
            Six integrated modules that share a single data layer — no re-entry, no silos.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m) => (
          <StaggerItem key={m.name}>
            <Link
              to={m.href}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 h-full"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <m.icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base mb-2">{m.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
              <span className="text-sm font-medium text-primary group-hover:gap-2 flex items-center gap-1.5 transition-all">
                Learn more →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
