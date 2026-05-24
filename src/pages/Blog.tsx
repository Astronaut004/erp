import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTASection } from "@/components/home/CTASection";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "#",
    category: "Product",
    title: "How AI-Powered Forecasting Transformed Inventory Management for a Lagos Retailer",
    excerpt: "A mid-sized retail chain in Lagos reduced stockouts by 62% and freed up ₦18M in working capital after deploying RigVedam's demand-forecasting module. Here's the full story.",
    author: "Priya Venkatesh",
    date: "March 18, 2026",
    readTime: "7 min read",
    tag: "Case Study",
  },
  {
    slug: "#",
    category: "Engineering",
    title: "Building a Multi-Tenant ERP That Stays Fast at 50,000 Concurrent Users",
    excerpt: "Our CTO walks through the architectural decisions — sharding strategies, connection pooling, and edge caching — that allow RigVedam to scale without degrading performance.",
    author: "Priya Venkatesh",
    date: "March 10, 2026",
    readTime: "11 min read",
    tag: "Deep Dive",
  },
  {
    slug: "#",
    category: "Finance",
    title: "Multi-Currency Accounting in Emerging Markets: What Most ERPs Get Wrong",
    excerpt: "Managing FX exposure across the Naira, Zambian Kwacha, Congolese Franc, and AED requires more than a currency table. We explain the pitfalls and how RigVedam solves them.",
    author: "Adrien Moreau",
    date: "February 28, 2026",
    readTime: "9 min read",
    tag: "Finance",
  },
  {
    slug: "#",
    category: "HR",
    title: "Automating Payroll Compliance Across Six Jurisdictions Without Hiring a Tax Lawyer",
    excerpt: "From PAYE in Nigeria to ESI/PF in India, payroll compliance is a minefield. We break down how RigVedam's rules engine keeps you compliant as regulations change.",
    author: "Amara Diallo",
    date: "February 14, 2026",
    readTime: "8 min read",
    tag: "HR & Payroll",
  },
  {
    slug: "#",
    category: "Product",
    title: "Introducing the Visual Workflow Builder: Automate Anything Without Writing Code",
    excerpt: "Our new drag-and-drop automation canvas lets operations teams build complex multi-step workflows in minutes. No developers required. Here's what you can build on day one.",
    author: "Thomas Bergström",
    date: "January 30, 2026",
    readTime: "5 min read",
    tag: "Product Update",
  },
  {
    slug: "#",
    category: "Strategy",
    title: "ERP Implementation in 30 Days: The Playbook We Give Every New Customer",
    excerpt: "Most ERP migrations take 6–18 months. Ours take 30 days. We're sharing the exact onboarding playbook our solutions engineers follow — data migration scripts included.",
    author: "Amara Diallo",
    date: "January 12, 2026",
    readTime: "13 min read",
    tag: "Implementation",
  },
];

const categories = ["All", "Product", "Engineering", "Finance", "HR", "Strategy"];

const Blog = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights from the ERP frontlines</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deep dives, product updates, and practical guides from the team building the world's most capable ERP platform.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Category filter */}
    <section className="py-8 border-b border-border">
      <div className="container">
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <span key={c} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${c === "All" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Featured post */}
    <section className="py-16">
      <div className="container">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 flex items-center">
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">{posts[0].tag}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">{posts[0].title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5"><User size={14} />{posts[0].author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} />{posts[0].readTime}</span>
                  </div>
                  <a href={posts[0].slug} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Read article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-muted to-muted/50 min-h-[280px] flex items-center justify-center">
                <div className="text-6xl font-black text-muted-foreground/10 select-none text-center px-8 leading-tight">CASE<br/>STUDY</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Post grid */}
    <section className="pb-24">
      <div className="container">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((p) => (
            <StaggerItem key={p.title}>
              <a href={p.slug} className="block rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 h-full">
                <span className="inline-block bg-secondary text-xs font-semibold px-3 py-1 rounded-full mb-4">{p.tag}</span>
                <h3 className="font-semibold text-base mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User size={12} />{p.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{p.readTime}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Blog;
