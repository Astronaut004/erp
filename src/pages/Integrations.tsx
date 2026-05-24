import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, RefreshCw, Shield } from "lucide-react";

const categories = [
  {
    name: "Accounting & Finance",
    integrations: [
      { name: "QuickBooks", desc: "Two-way sync of invoices, payments, and chart of accounts." },
      { name: "Xero", desc: "Real-time bank reconciliation and financial reporting." },
      { name: "Sage", desc: "Import historical data and migrate to RigVedam seamlessly." },
      { name: "Stripe", desc: "Automatic payment reconciliation and revenue recognition." },
      { name: "PayPal", desc: "Sync transactions and manage multi-currency payouts." },
      { name: "Flutterwave", desc: "Collect and reconcile payments across Africa." },
    ],
  },
  {
    name: "Communication & Productivity",
    integrations: [
      { name: "Slack", desc: "Get ERP alerts, approvals, and reports directly in Slack." },
      { name: "Microsoft Teams", desc: "Collaborate on deals and approvals inside Teams." },
      { name: "Google Workspace", desc: "Sync contacts, calendar, and docs with your ERP." },
      { name: "Zoom", desc: "Schedule and log customer calls from the CRM module." },
      { name: "Outlook", desc: "Track email threads against accounts and deals." },
      { name: "Notion", desc: "Embed live ERP data in Notion pages and docs." },
    ],
  },
  {
    name: "E-Commerce & Payments",
    integrations: [
      { name: "Shopify", desc: "Sync orders, inventory, and customer data in real time." },
      { name: "WooCommerce", desc: "Pull orders and auto-update stock levels across channels." },
      { name: "Amazon Seller", desc: "Manage FBA inventory and reconcile marketplace fees." },
      { name: "Paystack", desc: "Accept and reconcile payments across West Africa." },
      { name: "M-Pesa", desc: "Collect mobile money and sync with accounts receivable." },
      { name: "Jumia", desc: "Sync product listings and order fulfilment automatically." },
    ],
  },
  {
    name: "Logistics & Supply Chain",
    integrations: [
      { name: "DHL", desc: "Track shipments and auto-update delivery status in orders." },
      { name: "FedEx", desc: "Generate labels, track packages, and update fulfilment." },
      { name: "Flexport", desc: "Manage freight bookings and landed cost calculations." },
      { name: "Kobo360", desc: "Book and track last-mile delivery across Africa." },
      { name: "SAP Ariba", desc: "Connect procurement workflows with your supply base." },
      { name: "Customs APIs", desc: "Auto-generate import/export documentation for 50+ countries." },
    ],
  },
  {
    name: "HR & Workforce",
    integrations: [
      { name: "BambooHR", desc: "Sync employee records and onboarding workflows." },
      { name: "Workday", desc: "Migrate or sync HR data during ERP rollouts." },
      { name: "LinkedIn Talent", desc: "Post jobs and import applicants into the HR module." },
      { name: "Deel", desc: "Manage global contractor payments and compliance." },
      { name: "Payoneer", desc: "Pay remote employees across 200+ countries." },
      { name: "Zoho People", desc: "Sync attendance, leave, and appraisal data." },
    ],
  },
  {
    name: "Business Intelligence",
    integrations: [
      { name: "Power BI", desc: "Stream live ERP metrics into your Power BI dashboards." },
      { name: "Tableau", desc: "Connect Tableau to any RigVedam data source via REST API." },
      { name: "Google Looker", desc: "Build custom analytics on top of your ERP data warehouse." },
      { name: "Metabase", desc: "Self-serve analytics for non-technical teams." },
      { name: "Snowflake", desc: "Replicate ERP data to Snowflake for advanced analytics." },
      { name: "dbt", desc: "Transform and model ERP data with dbt Core or Cloud." },
    ],
  },
];

const highlights = [
  { icon: <Zap size={20} />, title: "100+ native integrations", desc: "Pre-built connectors that set up in minutes, not months." },
  { icon: <RefreshCw size={20} />, title: "Real-time sync", desc: "Data flows both ways — changes in any system propagate instantly." },
  { icon: <Shield size={20} />, title: "Enterprise-grade security", desc: "OAuth 2.0, field-level encryption, and audit logs for every sync." },
];

const Integrations = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Integrations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect your entire business stack</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            RigVedam plugs into the tools you already use — from accounting software and payment processors to e-commerce platforms and BI tools. 100+ native connectors, a REST API, and webhook support for everything else.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/contact">Request a custom integration</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 border-b border-border">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">{h.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Integration categories */}
    {categories.map((cat, i) => (
      <section key={cat.name} className={`py-16 ${i % 2 === 1 ? "bg-surface-sunken" : ""}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className="text-xl font-bold mb-8">{cat.name}</h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.integrations.map((int) => (
              <StaggerItem key={int.name}>
                <div className="rounded-xl border border-border bg-card p-5 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                      {int.name.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="font-semibold text-sm">{int.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{int.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    ))}

    <CTASection />
    <Footer />
  </div>
);

export default Integrations;
