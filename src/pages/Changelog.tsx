import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Zap, Plus, Wrench } from "lucide-react";

const releases = [
  {
    version: "v3.2.0",
    date: "March 15, 2026",
    title: "AI Forecasting Engine & Visual Workflow Builder",
    highlights: ["AI-powered demand and cash-flow forecasting", "Drag-and-drop automation canvas (200+ triggers)", "New Kanban view for Sales pipeline"],
    new: [
      "AI Forecasting module: demand forecasting, cash flow projections, and scenario modelling powered by machine learning.",
      "Visual Workflow Builder: build multi-step automations with a drag-and-drop canvas — no code required.",
      "Kanban board view added to the Sales & CRM pipeline module.",
      "Bulk data import wizard for QuickBooks, Xero, and SAP migrations.",
      "New Flutterwave and Paystack payment integrations.",
      "SCIM 2.0 support for automated user provisioning from Okta and Azure AD.",
    ],
    improved: [
      "Reporting engine now 3× faster on large datasets (10M+ rows).",
      "Payroll calculation engine updated for Nigeria PAYE 2026 rates.",
      "Inventory multi-location transfer UI redesigned for speed.",
    ],
    fixed: [
      "Fixed a race condition in concurrent invoice approvals that could cause duplicate postings.",
      "Corrected rounding errors in multi-currency purchase order totals.",
      "Resolved a display bug in the org chart when reporting lines exceeded 6 levels deep.",
    ],
  },
  {
    version: "v3.1.0",
    date: "February 3, 2026",
    title: "Multi-entity Management & Power BI Connector",
    highlights: ["Manage unlimited legal entities from one dashboard", "Native Power BI and Tableau connectors", "HR self-service portal"],
    new: [
      "Multi-entity management: consolidate financials, intercompany transfers, and reporting across unlimited legal entities.",
      "Native Power BI connector — stream live ERP metrics into your dashboards.",
      "Tableau connector with direct query support.",
      "HR self-service portal: employees can submit leave requests, view payslips, and update personal details.",
      "Barcode scanning via mobile camera in the Inventory module.",
    ],
    improved: [
      "Finance module now supports IFRS 16 lease accounting schedules.",
      "Audit trail search is now full-text and filters by user, module, and date range.",
      "Mobile app (iOS & Android) redesigned with faster navigation.",
    ],
    fixed: [
      "Fixed an issue where deleted users' assignments remained visible in project timelines.",
      "Resolved incorrect tax calculation for UAE VAT on partially exempt supplies.",
    ],
  },
  {
    version: "v3.0.0",
    date: "December 10, 2025",
    title: "RigVedam 3.0 — Complete Platform Redesign",
    highlights: ["Redesigned UI with dark mode", "New Manufacturing & MRP module", "99.99% SLA for Enterprise"],
    new: [
      "Complete UI redesign: faster, cleaner, and fully accessible. Dark mode available for all plans.",
      "Manufacturing & MRP module: bill of materials, work orders, production scheduling, and QC checklists.",
      "Custom Fields & Views: extend any module with custom fields, formulas, and filtered views.",
      "Notifications centre: email, Slack, SMS, and in-app alerts with configurable rules.",
      "99.99% uptime SLA now available for Enterprise customers.",
      "Data residency options in EU, India, and UAE.",
    ],
    improved: [
      "Dashboard load times reduced by 60% with new virtualised rendering.",
      "Finance reconciliation engine now handles banks with 500K+ monthly transactions.",
      "Completely rewritten API with OpenAPI 3.1 spec — 100% backwards compatible.",
    ],
    fixed: [
      "Fixed over 140 UI and logic issues identified during the v3.0 beta programme.",
    ],
  },
  {
    version: "v2.9.0",
    date: "October 22, 2025",
    title: "Compliance Suite & Africa Payments",
    highlights: ["GDPR & NDPR compliance tooling", "M-Pesa integration", "SOC 2 Type II certification achieved"],
    new: [
      "Compliance & Audit module: GDPR/NDPR tooling, data subject request workflows, and automated data retention.",
      "M-Pesa integration for Kenya and Tanzania.",
      "SOC 2 Type II certification achieved — report available to Enterprise customers on request.",
      "Custom report builder: drag-and-drop report designer with 50+ chart types.",
    ],
    improved: [
      "Leave management now supports custom approval chains of unlimited depth.",
      "Purchase order approval workflows now support parallel approvers.",
    ],
    fixed: [
      "Fixed broken CSV export in the General Ledger for fiscal years spanning two calendar years.",
    ],
  },
];

const tagColors: Record<string, string> = {
  new: "bg-primary/10 text-primary",
  improved: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  fixed: "bg-green-500/10 text-green-600 dark:text-green-400",
};

const Changelog = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Changelog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What's new in RigVedam</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every release, every fix, every improvement — documented. We ship multiple times a day and publish a summary with each version.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 pb-32">
      <div className="container max-w-3xl">
        <StaggerContainer className="space-y-16">
          {releases.map((r) => (
            <StaggerItem key={r.version}>
              <ScrollReveal>
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-background" />
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded">{r.version}</span>
                      <span className="text-sm text-muted-foreground">{r.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{r.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {r.highlights.map((h) => (
                        <span key={h} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-soft">
                    {r.new.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Plus size={14} className="text-primary" />
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors.new}`}>New</span>
                        </div>
                        <ul className="space-y-2">
                          {r.new.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-primary/30">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {r.improved.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={14} className="text-amber-500" />
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors.improved}`}>Improved</span>
                        </div>
                        <ul className="space-y-2">
                          {r.improved.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-amber-400/30">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {r.fixed.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wrench size={14} className="text-green-500" />
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors.fixed}`}>Fixed</span>
                        </div>
                        <ul className="space-y-2">
                          {r.fixed.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-green-400/30">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Changelog;
