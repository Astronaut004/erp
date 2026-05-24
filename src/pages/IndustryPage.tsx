import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { getIndustry } from "@/data/industries";

const IndustryPage = () => {
  const { industry } = useParams<{ industry: string }>();
  const data = getIndustry(industry ?? "");

  if (!data) return <Navigate to="/solutions" replace />;

  const Icon = data.icon;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{data.label} ERP Solution | LiteLink ERP by Rigvedam Solutions</title>
        <meta name="description" content={data.metaDesc} />
        <meta
          property="og:title"
          content={`${data.label} ERP Solution | LiteLink ERP by Rigvedam Solutions`}
        />
        <meta property="og:description" content={data.metaDesc} />
        <meta
          property="og:url"
          content={`https://erp-chi-plum.vercel.app/solutions/${data.slug}`}
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #4F46E5 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/20 text-white flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wider">
                  {data.label} Solution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {data.headline}
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">{data.subtext}</p>
              <Link
                to={`/contact?industry=${data.slug}`}
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Book a demo for {data.label} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                The challenges
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's holding your {data.label} business back
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((p, i) => {
              const PIcon = p.icon;
              return (
                <StaggerItem key={i}>
                  <div className="rounded-2xl border border-red-100 bg-white p-7 shadow-soft h-full">
                    <div className="h-10 w-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
                      <PIcon size={20} />
                    </div>
                    <h3 className="font-bold text-base mb-2 text-slate-800">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                How LiteLink helps
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The LiteLink {data.label} advantage
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {data.solutions.map((s, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl border border-border bg-card p-7 shadow-soft h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <h3 className="font-bold text-base text-slate-800">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 bg-slate-50 border-y border-border">
        <div className="container">
          <StaggerContainer className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {data.kpis.map((k) => (
              <StaggerItem key={k.label}>
                <p className="text-4xl font-extrabold text-primary tabular-nums">{k.number}</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">{k.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft text-center">
              <div className="flex gap-0.5 justify-center mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 italic text-slate-700">
                "{data.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {data.testimonial.initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{data.testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {data.testimonial.role}, {data.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Ready to transform your {data.label} operations?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a personalised demo and see how LiteLink handles your exact workflows.
            </p>
            <Link
              to={`/contact?industry=${data.slug}`}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Book a demo for {data.label} <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default IndustryPage;
