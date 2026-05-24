import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTASection } from "@/components/home/CTASection";
import { DetailModal, DetailItem } from "@/components/DetailModal";
import {
  BarChart3, Box, CreditCard, FileText, Settings, Shield, Users, Zap,
  Globe, Layers, RefreshCw, Database, Bell, Plug, LineChart, Lock
} from "lucide-react";

const allFeatures: DetailItem[] = [
  {
    icon: CreditCard,
    label: "Finance & Accounting",
    tagline: "Real-time financials, global compliance built in.",
    desc: "Multi-currency invoicing, automated reconciliation, real-time P&L dashboards, and tax compliance tools built for global operations.",
    description: "A comprehensive finance module that handles every accounting workflow — from day-to-day transactions to period-end close — with built-in multi-currency support, automated reconciliation, and compliance tooling for global operations.",
    highlights: [
      "Multi-currency invoicing with live exchange-rate conversion",
      "Automated bank reconciliation with smart transaction matching",
      "Real-time P&L, balance sheet, and cash-flow statements",
      "Tax compliance engine supporting VAT, GST, and regional rules",
      "Chart of accounts customisation and inter-company consolidation",
      "Audit-ready transaction logs with full change history",
    ],
  },
  {
    icon: Box,
    label: "Inventory & Warehousing",
    tagline: "Always know what you have — and where it is.",
    desc: "Multi-location tracking, automated reorder points, barcode/QR scanning, batch management, and dead-stock alerts.",
    description: "An intelligent inventory and warehouse management module that gives you real-time visibility over stock levels across every location, automates replenishment, and eliminates the costly surprises of stockouts and dead stock.",
    highlights: [
      "Multi-warehouse and bin-level stock tracking",
      "Barcode and QR-code scanning for fast stock movements",
      "Automated reorder-point alerts and purchase-order generation",
      "Batch, lot, and serial-number traceability",
      "Dead-stock and slow-moving inventory alerts",
      "Stock valuation methods: FIFO, LIFO, and weighted average",
    ],
  },
  {
    icon: Users,
    label: "HR & Payroll",
    tagline: "Manage your people, not your paperwork.",
    desc: "Employee lifecycle management, automated payroll with tax calculations, leave tracking, org charts, and self-service portals.",
    description: "A complete human resources and payroll module covering the full employee lifecycle — from onboarding and performance management through to automated payroll processing and compliance reporting.",
    highlights: [
      "Employee onboarding workflows with document checklist tracking",
      "Automated payroll with tax, deductions, and benefits calculation",
      "Leave and absence management with approval workflows",
      "Performance review cycles and goal-tracking dashboards",
      "Dynamic org chart with headcount and reporting-line views",
      "Employee self-service portal for payslips, leave requests, and HR queries",
    ],
  },
  {
    icon: BarChart3,
    label: "Sales & CRM",
    tagline: "Close more deals. Keep every customer.",
    desc: "Visual pipeline management, lead scoring with AI, email sequences, quote generation, and customer health scores.",
    description: "An integrated Sales and CRM module that gives your revenue team the tools to manage every stage of the customer journey — from first contact and pipeline management through to post-sale retention and upsell.",
    highlights: [
      "Drag-and-drop visual sales pipeline with stage-based automation",
      "AI-powered lead scoring based on engagement and firmographic data",
      "Automated email sequences and follow-up task creation",
      "Quote and proposal generation linked to product catalogue",
      "Customer health score dashboard for proactive account management",
      "Revenue forecasting with weighted pipeline and historical trend analysis",
    ],
  },
  {
    icon: FileText,
    label: "Project Management",
    tagline: "Deliver on time, on budget, every time.",
    desc: "Kanban, Gantt, and list views. Time tracking, resource allocation, budget tracking, and milestone reporting.",
    description: "A full-featured project management module that adapts to how your teams work — offering multiple views, built-in time tracking, and direct links to finance and HR so project costs are always accurate.",
    highlights: [
      "Kanban, Gantt, list, and calendar views for every working style",
      "Task dependencies, sub-tasks, and milestone tracking",
      "Time logging with approval workflows and billable-hour reporting",
      "Resource allocation across projects with capacity visualisation",
      "Project budget tracking linked to real-time cost data from Finance",
      "Client-facing project portal for status updates and document sharing",
    ],
  },
  {
    icon: Settings,
    label: "Manufacturing & MRP",
    tagline: "Produce more, waste less, ship on time.",
    desc: "Bill of materials, work orders, production scheduling, quality control checklists, and shop floor terminals.",
    description: "A manufacturing and Material Requirements Planning (MRP) module that gives production teams complete control — from demand-driven planning and work-order scheduling through to shop-floor execution and quality assurance.",
    highlights: [
      "Multi-level Bill of Materials (BOM) with version control",
      "Demand-driven MRP to auto-generate purchase and production orders",
      "Work-order scheduling with machine and labour capacity constraints",
      "Shop-floor terminals for real-time production progress updates",
      "Quality control checkpoints and non-conformance (NCR) tracking",
      "Scrap and rework management with full cost impact visibility",
    ],
  },
  {
    icon: Shield,
    label: "Compliance & Audit",
    tagline: "Stay compliant. Stay audit-ready. Always.",
    desc: "Role-based access control, complete audit trails, GDPR/SOC2 tooling, data retention policies, and IP whitelisting.",
    description: "A compliance and audit module that makes regulatory adherence a built-in property of your platform — not an afterthought — with granular access controls, immutable audit trails, and tools for GDPR, SOC2, and industry-specific regulations.",
    highlights: [
      "Role-based access control (RBAC) with field-level permissions",
      "Immutable audit trail for every create, update, and delete action",
      "GDPR tooling: data subject requests, consent management, and right to erasure",
      "SOC2-aligned controls with evidence collection for auditors",
      "Data retention policies with automated archiving and purging",
      "IP whitelisting and session management for access security",
    ],
  },
  {
    icon: Zap,
    label: "Automation Engine",
    tagline: "200+ triggers. Zero code. Infinite possibilities.",
    desc: "Visual workflow builder with 200+ triggers. Automate approvals, notifications, data sync, and cross-module actions with zero code.",
    description: "A powerful no-code automation engine that lets business teams build complex, multi-step workflows without writing a single line of code — eliminating manual tasks, accelerating approvals, and keeping every system in sync.",
    highlights: [
      "Visual drag-and-drop workflow builder accessible to non-technical users",
      "200+ triggers spanning every module: record changes, schedules, webhooks",
      "Multi-step approval workflows with conditional branching and escalation",
      "Cross-module actions — e.g., auto-create a PO when inventory drops below reorder point",
      "Notification automation via email, SMS, Slack, and in-app alerts",
      "Full execution log with step-by-step visibility and error alerting",
    ],
  },
  {
    icon: Globe,
    label: "Multi-entity Support",
    tagline: "One login. Every company. Consolidated view.",
    desc: "Manage multiple companies, branches, and legal entities from a single dashboard with consolidated reporting.",
    description: "A multi-entity management capability that lets finance and operations teams manage multiple legal entities, subsidiaries, or branches from a single LiteLink account — with consolidated reporting and granular entity-level controls.",
    highlights: [
      "Unlimited companies and branches under one account",
      "Entity-level Chart of Accounts with group consolidation",
      "Intercompany transactions with automated elimination entries",
      "Consolidated P&L, balance sheet, and cash-flow across all entities",
      "Separate user access controls and data isolation per entity",
      "Currency translation for cross-border consolidated reporting",
    ],
  },
  {
    icon: Layers,
    label: "Custom Fields & Views",
    tagline: "Mould the platform to your exact workflow.",
    desc: "Extend any module with custom fields, formulas, and filtered views. Build exactly the workspace your team needs.",
    description: "A flexible customisation layer that lets administrators and power users extend any module without development work — adding custom fields, building formula columns, and creating filtered views tailored to each team's workflow.",
    highlights: [
      "Custom field types: text, number, date, dropdown, checkbox, file upload",
      "Formula fields that calculate values from other fields across modules",
      "Saved filtered views per user or shared across teams",
      "Custom list layouts — choose which columns appear and their order",
      "Conditional field visibility based on record state or user role",
      "Custom fields available in reports, exports, and automation triggers",
    ],
  },
  {
    icon: RefreshCw,
    label: "Data Import & Migration",
    tagline: "Switch without losing a single record.",
    desc: "Bulk import from CSV, Excel, or directly from QuickBooks, SAP, and Xero. Full migration support included.",
    description: "A comprehensive data import and migration toolkit that makes switching to LiteLink painless — whether you're moving from spreadsheets or a legacy ERP — with validation, mapping tools, and a dedicated migration team for complex projects.",
    highlights: [
      "Bulk import via CSV and Excel with column-mapping wizard",
      "Native connectors for QuickBooks, Xero, SAP, and Odoo data exports",
      "Data validation with duplicate detection and error reporting before import",
      "Historical transaction import to preserve full audit trail",
      "Rollback capability to undo imports before committing to production",
      "Dedicated migration specialist support for enterprise data projects",
    ],
  },
  {
    icon: Database,
    label: "Reporting & Analytics",
    tagline: "50+ reports. Infinite insights.",
    desc: "50+ built-in reports, custom report builder, scheduled exports, and real-time KPI dashboards per department.",
    description: "A reporting and analytics module that turns your ERP data into actionable insight — with 50+ pre-built reports, a drag-and-drop report builder, real-time KPI dashboards, and scheduled delivery to stakeholders.",
    highlights: [
      "50+ pre-built reports across Finance, HR, Sales, Inventory, and more",
      "Drag-and-drop custom report builder with grouping, filters, and formulas",
      "Department-specific KPI dashboards with real-time data refresh",
      "Scheduled report delivery via email in PDF, Excel, or CSV format",
      "Drill-down from summary charts to the underlying transaction records",
      "Cross-module reports joining data from multiple business areas",
    ],
  },
  {
    icon: Bell,
    label: "Notifications & Alerts",
    tagline: "The right alert, to the right person, at the right time.",
    desc: "Configurable alerts via email, Slack, SMS, and in-app. Never miss a critical approval, stockout, or deadline.",
    description: "A fully configurable notifications engine that keeps every team member informed of the events that matter to them — delivered through the channels they actually use, with smart routing to avoid notification fatigue.",
    highlights: [
      "Rule-based alerts triggered by any field change, threshold, or schedule",
      "Multi-channel delivery: email, SMS, Slack, Microsoft Teams, and in-app",
      "Role-based routing — ensure alerts go to the right person, not everyone",
      "Digest mode to bundle multiple alerts into a single daily summary",
      "Escalation rules for unacknowledged critical alerts",
      "Full notification history and read/unread tracking per user",
    ],
  },
  {
    icon: Plug,
    label: "Integrations & API",
    tagline: "Connect everything. Sync everywhere.",
    desc: "REST API, webhooks, and native integrations with Stripe, Shopify, Slack, Google Workspace, and 100+ more.",
    description: "An open, integration-first architecture that connects LiteLink to every tool in your tech stack — through a documented REST API, real-time webhooks, and a growing library of native integrations with the platforms you rely on.",
    highlights: [
      "Comprehensive REST API with OpenAPI documentation and sandbox",
      "Webhook support for real-time event push to any external system",
      "Native integrations: Stripe, Shopify, Slack, Google Workspace, Zoom",
      "Zapier and Make (Integromat) connectors for no-code integration building",
      "OAuth 2.0 authentication for secure third-party app authorisation",
      "API rate limits, usage monitoring, and key management dashboard",
    ],
  },
  {
    icon: LineChart,
    label: "Forecasting",
    tagline: "See tomorrow's challenges — today.",
    desc: "AI-powered demand forecasting, cash flow projections, and capacity planning to stay ahead of growth.",
    description: "An AI-powered forecasting module that analyses your historical data to generate accurate predictions for demand, cash flow, and resource capacity — helping leadership make proactive decisions rather than reactive ones.",
    highlights: [
      "Demand forecasting using time-series ML models on your sales history",
      "Cash flow projections combining AR, AP, and operational cost trends",
      "Inventory replenishment recommendations based on forecast demand",
      "Headcount and capacity planning aligned to projected workload",
      "Scenario modelling — compare best-case, base, and worst-case forecasts",
      "Forecast accuracy tracking with automatic model retraining",
    ],
  },
  {
    icon: Lock,
    label: "Enterprise Security",
    tagline: "Bank-grade security. Enterprise-grade trust.",
    desc: "SSO/SAML, 2FA, encryption at rest and in transit, 99.99% SLA, and dedicated infrastructure options.",
    description: "A security-first platform architecture that protects your most sensitive business data at every layer — from identity and access management through to infrastructure isolation and continuous threat monitoring.",
    highlights: [
      "SSO/SAML 2.0 integration with Okta, Azure AD, Google Workspace, and more",
      "Multi-factor authentication (TOTP, SMS, hardware key) enforced per policy",
      "AES-256 encryption at rest and TLS 1.3 in transit for all data",
      "99.99% uptime SLA backed by geo-redundant cloud infrastructure",
      "Dedicated single-tenant infrastructure available for enterprise clients",
      "Continuous threat monitoring, penetration testing, and SOC2 Type II certification",
    ],
  },
];

const Features = () => {
  const [selected, setSelected] = useState<DetailItem | null>(null);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Features — 16 Integrated Modules | LiteLink ERP by Rigvedam Solutions</title>
        <meta name="description" content="Explore LiteLink ERP's 16 integrated modules — Finance, Inventory, HR, Sales, Manufacturing, Compliance, Automation, and more. One platform for your entire business." />
        <meta property="og:title" content="LiteLink ERP Features — 16 Integrated Modules" />
        <meta property="og:url" content="https://erp-chi-plum.vercel.app/features" />
      </Helmet>
      <Navbar />
      <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Features</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Every tool you need, unified</h1>
              <p className="text-muted-foreground text-lg">16 integrated modules built to work together. No plugins, no patchwork — just one platform that covers your entire operation.</p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allFeatures.map((f) => (
              <StaggerItem key={f.label}>
                <button
                  onClick={() => setSelected(f)}
                  className="group w-full text-left rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 h-full flex flex-col cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon size={20} />
                  </div>
                  <h3 className="font-semibold mb-2">{f.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <p className="text-xs text-primary font-medium mt-auto pt-3">Learn more →</p>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection />
      <Footer />

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Features;
