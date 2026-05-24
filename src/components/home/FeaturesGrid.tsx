import { BarChart3, Box, CreditCard, FileText, Settings, Shield, Users, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const modules = [
  { icon: CreditCard, title: "Finance & Accounting", desc: "Automated invoicing, expense tracking, and real-time financial reporting with multi-currency support." },
  { icon: Box, title: "Inventory Management", desc: "Track stock levels, automate reordering, and manage warehouses with barcode scanning." },
  { icon: Users, title: "Human Resources", desc: "Payroll, leave management, recruitment pipelines, and employee self-service portals." },
  { icon: BarChart3, title: "Sales & CRM", desc: "Pipeline management, lead scoring, and customer communication in one unified view." },
  { icon: FileText, title: "Project Management", desc: "Kanban boards, Gantt charts, time tracking, and resource allocation for every team." },
  { icon: Settings, title: "Manufacturing", desc: "Bill of materials, work orders, quality control, and production planning tools." },
  { icon: Shield, title: "Compliance & Security", desc: "Role-based access, audit logs, GDPR tools, and enterprise-grade encryption." },
  { icon: Zap, title: "Automation Engine", desc: "No-code workflows to automate approvals, notifications, and cross-module actions." },
];

export const FeaturesGrid = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Modules</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything your business needs</h2>
          <p className="text-muted-foreground text-lg">Eight integrated modules that talk to each other — so your teams don't have to re-enter data.</p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((m) => (
          <StaggerItem key={m.title}>
            <div className="group relative rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 h-full">
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <m.icon size={20} />
              </div>
              <h3 className="font-semibold mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
