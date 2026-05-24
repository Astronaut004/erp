import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const resourceCategories = [
  {
    icon: Video,
    title: "Product Tours",
    desc: "Walkthrough videos covering every module — from Finance to Production Planning.",
    items: ["Inventory Management Tour", "Finance & Accounting Walkthrough", "HR & Payroll Demo", "Sales & CRM Overview"],
    cta: "Browse all videos",
  },
  {
    icon: FileText,
    title: "Industry Guides",
    desc: "Deep-dive guides for FMCG, Chemical, Pharma, Trading, and more.",
    items: ["FMCG ERP Buyer's Guide", "Pharma Compliance Checklist", "Chemical Hazmat Management Guide", "Trading Inventory Optimisation"],
    cta: "Download guides",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Technical documentation, API reference, and integration guides.",
    items: ["Getting Started Guide", "REST API Reference", "Webhook Integration Guide", "Data Import Templates"],
    cta: "Open docs",
  },
  {
    icon: Download,
    title: "Templates & Tools",
    desc: "Ready-to-use templates for common business workflows.",
    items: ["Inventory Count Sheet", "GST Invoice Template", "Production Planning Template", "Employee Onboarding Checklist"],
    cta: "Download templates",
  },
];

const Resources = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Resources — Guides, Docs & Templates | LiteLink ERP by Rigvedam Solutions</title>
      <meta
        name="description"
        content="LiteLink ERP resources — product guides, industry documentation, video tours, and downloadable templates to help you get the most from your ERP."
      />
      <meta property="og:title" content="Resources | LiteLink ERP by Rigvedam Solutions" />
      <meta property="og:description" content="Product guides, industry documentation, video tours, and templates for LiteLink ERP." />
      <meta property="og:url" content="https://erp-chi-plum.vercel.app/resources" />
    </Helmet>

    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Everything you need to succeed with LiteLink
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Guides, documentation, templates, and video walkthroughs — curated for every role and industry.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {resourceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem key={cat.title}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{cat.title}</h2>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {cat.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-slate-50">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-3">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help — reach out and we'll point you in the right direction.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Contact support <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default Resources;
