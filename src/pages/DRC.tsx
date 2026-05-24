import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Users, Headphones, MapPin, Award, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const timeline = [
  {
    step: "01",
    title: "Discovery",
    desc: "Our DRC team conducts an onsite business analysis workshop to map your current workflows, pain points, and ERP requirements.",
    duration: "1–2 weeks",
  },
  {
    step: "02",
    title: "Setup & Configuration",
    desc: "We configure LiteLink to your specific industry and business rules, migrate your existing data, and set up user roles.",
    duration: "2–4 weeks",
  },
  {
    step: "03",
    title: "Training",
    desc: "Role-based training sessions delivered onsite in your preferred language — covering every department from finance to operations.",
    duration: "1–2 weeks",
  },
  {
    step: "04",
    title: "Go-Live",
    desc: "Supervised go-live with our team onsite for the first week — monitoring, troubleshooting, and ensuring smooth adoption.",
    duration: "1 week",
  },
  {
    step: "05",
    title: "Ongoing Support",
    desc: "SLA-backed support continues after go-live with a dedicated account manager, quarterly health checks, and proactive updates.",
    duration: "Ongoing",
  },
];

const slas = [
  { icon: Clock, title: "4-hour response", desc: "For critical issues affecting business operations." },
  { icon: CheckCircle2, title: "24-hour resolution", desc: "Target resolution time for high-priority tickets." },
  { icon: Users, title: "Named team", desc: "A dedicated account manager and support engineer." },
  { icon: Headphones, title: "Multi-channel support", desc: "Phone, WhatsApp, email, and ticketing portal." },
  { icon: MapPin, title: "Onsite availability", desc: "DGI facility support available across India." },
  { icon: Award, title: "Quarterly reviews", desc: "Proactive platform health and optimisation reviews." },
];

const DRC = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>DRC Solution — Onsite ERP Support | LiteLink ERP by Rigvedam Solutions</title>
      <meta
        name="description"
        content="LiteLink DRC solution — powered by DGI onsite facility support from India. Dedicated implementation, local-language training, and SLA-backed support for your ERP deployment."
      />
      <meta
        property="og:title"
        content="DRC Solution — On-Ground ERP Support | LiteLink ERP"
      />
      <meta
        property="og:description"
        content="DGI onsite facility support, dedicated implementation teams, and SLA-backed ERP support across India, Dubai, and Africa."
      />
      <meta property="og:url" content="https://erp-chi-plum.vercel.app/drc" />
    </Helmet>

    <Navbar />

    {/* Hero */}
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #4F46E5 100%)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="container relative max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-[#F59E0B] mb-4 uppercase tracking-wider">DRC Solution</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            On-Ground Support,
            <br />Wherever You Are
          </h1>
          <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
            LiteLink's DRC solution — powered by DGI onsite facility support from India — puts a
            dedicated team at your location from day one. Rapid deployment, local-language training,
            and a support partner that genuinely knows your business.
          </p>
          <Link
            to="/contact?type=drc"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
          >
            Talk to our DRC team <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* Process timeline */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From first meeting to full go-live
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured, proven process that puts our DRC team on the ground with you at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.step} delay={i * 0.08}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-11 w-11 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {t.step}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8 last:pb-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{t.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                      {t.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* SLA commitments */}
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              SLA commitments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support you can hold us to
            </h2>
            <p className="text-muted-foreground text-lg">
              Our DRC support agreement includes contractual SLAs backed by Rigvedam Solutions.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {slas.map((s) => (
            <StaggerItem key={s.title}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft h-full">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="font-bold mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-white">
      <div className="container text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield size={18} className="text-primary" />
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              In partnership with Rigvedam Solutions
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to deploy with full DRC support?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Talk to our DRC team today. We'll walk you through the process and put together a
            deployment plan tailored to your business.
          </p>
          <Link
            to="/contact?type=drc"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
          >
            Talk to our DRC team <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default DRC;
