import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue share",
    desc: "Earn ongoing revenue share on every client you refer, implement, or support — with transparent monthly payouts.",
  },
  {
    icon: Award,
    title: "Certification programme",
    desc: "Get certified as a LiteLink Implementation Partner. Training, exams, and badging provided at no cost.",
  },
  {
    icon: Users,
    title: "Co-marketing support",
    desc: "Joint marketing activities, co-branded collateral, and priority listing in our partner directory.",
  },
  {
    icon: Globe,
    title: "Global network",
    desc: "Access our network of partners across India, Dubai, and Africa for collaboration and referral opportunities.",
  },
];

const partnerTypes = [
  {
    name: "Implementation Partner",
    desc: "Deploy and configure LiteLink for clients in your region. Receive implementation fees and ongoing support revenue.",
    requirements: ["ERP implementation experience", "Minimum 2 certified consultants", "Coverage in at least one industry vertical"],
    highlight: false,
  },
  {
    name: "Reseller Partner",
    desc: "Sell LiteLink licences and earn margin on every deal. Full sales support and pre-sales collateral provided.",
    requirements: ["Active B2B sales capability", "Regional presence", "Customer success track record"],
    highlight: true,
  },
  {
    name: "Technology Partner",
    desc: "Build integrations or complementary solutions on top of LiteLink. Co-sell and co-market with us.",
    requirements: ["Software product or SaaS", "API integration capability", "Compatible target market"],
    highlight: false,
  },
];

const Partners = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Partner with LiteLink ERP | Rigvedam Solutions Partner Programme</title>
      <meta
        name="description"
        content="Join the LiteLink ERP partner programme — become an implementation partner, reseller, or technology partner. Revenue share, certification, and co-marketing support."
      />
      <meta property="og:title" content="LiteLink ERP Partner Programme" />
      <meta
        property="og:description"
        content="Implementation partners, resellers, and technology partners — join the LiteLink ERP partner network."
      />
      <meta property="og:url" content="https://erp-chi-plum.vercel.app/partners" />
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
          <p className="text-sm font-semibold text-[#F59E0B] mb-4 uppercase tracking-wider">Partner Programme</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Grow your business
            <br />with LiteLink ERP
          </h1>
          <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
            Join the Rigvedam Solutions partner network and build a recurring revenue stream by
            delivering LiteLink ERP to businesses across India, the Middle East, and Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
          >
            Apply to become a partner <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* Partner benefits */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Why partner with us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What you get as a partner</h2>
            <p className="text-muted-foreground text-lg">
              More than just a referral programme — a full partnership with tools, support, and shared success.
            </p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft h-full">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <b.icon size={22} />
                </div>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Partner types */}
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Partnership models</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your partnership type</h2>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partnerTypes.map((p) => (
            <StaggerItem key={p.name}>
              <div className={`rounded-2xl border p-8 h-full flex flex-col ${p.highlight ? "border-primary bg-primary/5 shadow-medium" : "border-border bg-white shadow-soft"}`}>
                {p.highlight && (
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Most popular</div>
                )}
                <h3 className="font-bold text-xl mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Requirements</p>
                  <ul className="space-y-2">
                    {p.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className={`w-full text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${p.highlight ? "bg-[#F59E0B] hover:bg-[#D97706] text-white" : "border border-border hover:bg-slate-100 text-slate-700"}`}
                >
                  Apply now
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Partners;
