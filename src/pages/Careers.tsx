import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Globe } from "lucide-react";

const perks = [
  { title: "Fully remote-first", desc: "Work from anywhere. We have teammates in 12 countries and async-first culture built in from day one." },
  { title: "Competitive equity", desc: "Every employee gets meaningful equity. We're building something big and you should own a piece of it." },
  { title: "Learning budget", desc: "$2,000/year for courses, conferences, books, and certifications. We invest in your growth." },
  { title: "Health & wellness", desc: "Comprehensive health coverage, mental health support, and a monthly wellness stipend." },
  { title: "Home office setup", desc: "$1,500 one-time home office allowance plus top-of-the-line equipment shipped to you." },
  { title: "Generous PTO", desc: "25 days vacation plus public holidays in your country. We take rest seriously." },
];

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Build the core platform powering finance, HR, and supply chain for thousands of businesses. Deep TypeScript + Go experience required.",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Own end-to-end design for our enterprise modules. You'll work closely with engineers and customers to make complex workflows feel effortless.",
  },
  {
    title: "Solutions Engineer — Africa",
    team: "Customer Success",
    location: "Lagos or Remote",
    type: "Full-time",
    desc: "Be the technical bridge between our product and enterprise customers across West and East Africa. Implementation, onboarding, and post-launch success.",
  },
  {
    title: "Senior Data Engineer",
    team: "Data",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Design the data infrastructure behind our reporting engine, AI forecasting, and customer analytics. dbt, Spark, and Python are your daily tools.",
  },
  {
    title: "Enterprise Account Executive",
    team: "Sales",
    location: "Dubai or Remote (MENA)",
    type: "Full-time",
    desc: "Drive new enterprise logos across the Middle East. You'll run full-cycle deals from prospecting through close, supported by strong marketing and SE resources.",
  },
  {
    title: "Head of Finance & Accounting Module",
    team: "Product",
    location: "Remote (Global)",
    type: "Full-time",
    desc: "Own the product strategy and roadmap for RigVedam's flagship Finance module. You have deep domain knowledge of accounting workflows and a product instinct for making them simple.",
  },
];

const Careers = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Careers</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help us rebuild enterprise software from the ground up</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We're a small, fast-moving team building the ERP that millions of businesses deserve. If you want your work to matter and move fast, you're in the right place.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Globe size={16} className="text-primary" /> Remote-first, 12 countries</span>
            <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-primary" /> {openings.length} open roles</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Perks */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RigVedam</h2>
            <p className="text-muted-foreground text-lg">We've built the kind of company we always wanted to work at.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {perks.map((p) => (
            <StaggerItem key={p.title}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-soft h-full">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Open roles */}
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open roles</h2>
            <p className="text-muted-foreground text-lg">Don't see a perfect fit? <Link to="/contact" className="text-primary hover:underline">Send us your resume anyway.</Link></p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {openings.map((job) => (
            <StaggerItem key={job.title}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">{job.team}</span>
                      <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">{job.type}</span>
                    </div>
                    <h3 className="font-semibold text-base mb-1">{job.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3"><MapPin size={13} />{job.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0" asChild>
                    <Link to="/contact">Apply <ArrowRight size={14} className="ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Careers;
