import { Link } from "react-router-dom";
import { Box, CreditCard, Users, Settings, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const modules = [
  {
    icon: Box,
    name: "Inventory Management",
    desc: "Multi-location stock tracking, automated reorder points, barcode scanning, and batch traceability.",
    href: "/features#inventory",
    image: "/images/inventory.jpg",
  },
  {
    icon: CreditCard,
    name: "Finance & Accounting",
    desc: "Multi-currency invoicing, automated reconciliation, real-time P&L, and GST/VAT compliance.",
    href: "/features#finance",
    image: "/images/finance.jpg",
  },
  {
    icon: Users,
    name: "HR & Payroll",
    desc: "Employee lifecycle management, automated payroll with tax calculations, and self-service portals.",
    href: "/features#hr",
    image: "/images/hr.jpg",
  },
  {
    icon: Settings,
    name: "Production Planning",
    desc: "Bill of materials, work orders, shop-floor tracking, and quality control checkpoints.",
    href: "/features#production",
    image: "/images/production.jpg",
  },
  {
    icon: BarChart3,
    name: "Sales & CRM",
    desc: "Visual pipeline management, lead scoring, quote generation, and customer health dashboards.",
    href: "/features#crm",
    image: "/images/sales.jpg",
  },
  {
    icon: Shield,
    name: "Compliance & Reporting",
    desc: "Role-based access, immutable audit trails, 50+ built-in reports, and regulatory tooling.",
    href: "/features#compliance",
    image: "/images/compliance.jpg",
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
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Link
                to={m.href}
                className="group flex flex-col rounded-2xl border border-border bg-card shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-shadow duration-300 h-full overflow-hidden"
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
                  <div className="absolute bottom-3 left-4">
                    <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      <m.icon size={20} />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-bold text-base">{m.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.desc}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
