import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTASection } from "@/components/home/CTASection";

const team = [
  { name: "Adrien Moreau", role: "CEO & Co-founder", initials: "AM", bio: "Previously VP Engineering at Salesforce. 15 years building enterprise software." },
  { name: "Priya Venkatesh", role: "CTO & Co-founder", initials: "PV", bio: "Ex-Google Staff Engineer. Built distributed systems serving 200M+ users." },
  { name: "Thomas Bergström", role: "Head of Product", initials: "TB", bio: "Former Product Lead at Figma. Obsessed with making complex tools feel simple." },
  { name: "Amara Diallo", role: "Head of Customer Success", initials: "AD", bio: "Scaled CS teams at Notion and Stripe. Champions customer outcomes over tickets." },
];

const values = [
  { title: "Ship daily", desc: "We deploy multiple times a day. Small, fast iterations beat big releases." },
  { title: "Default to transparency", desc: "Public roadmap, open pricing, honest communication — inside and outside the company." },
  { title: "Earn trust through craft", desc: "Every pixel, every API response, every support reply reflects our standard." },
  { title: "Think in systems", desc: "We build composable, interconnected tools — not isolated features." },
];

const About = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>About Us | LiteLink ERP by Rigvedam Solutions</title>
      <meta name="description" content="Learn about LiteLink ERP and Rigvedam Solutions — the team and values behind India's modern ERP platform for FMCG, Chemical, Pharma, Trading, and more." />
      <meta property="og:title" content="About LiteLink ERP | Rigvedam Solutions" />
      <meta property="og:url" content="https://erp-chi-plum.vercel.app/about" />
    </Helmet>
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We believe ERPs should feel like modern software</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            RigVedam Solutions was founded by a team of engineers and operators who were tired of clunky, overpriced enterprise software. We set out to build an ERP that's powerful enough for a 5,000-person company but intuitive enough for a team of five.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, we serve businesses across Africa, the Middle East, and Asia — from bootstrapped startups to publicly traded manufacturers. Our platform is trusted in Zambia, DRC, Nigeria, Uganda, Dubai, and India.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide every decision we make.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-soft h-full">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground text-lg">The people building RigVedam Solutions.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((t) => (
            <StaggerItem key={t.name}>
              <div className="text-center">
                <div className="h-20 w-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {t.initials}
                </div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{t.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default About;
