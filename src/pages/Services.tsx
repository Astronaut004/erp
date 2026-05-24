import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/home/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Cloud, Server } from "lucide-react";

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud-Based",
    points: [
      "Zero infrastructure setup",
      "Automatic updates & backups",
      "Access from anywhere, any device",
      "Pay-as-you-scale pricing",
    ],
  },
  {
    icon: Server,
    title: "On-Premises",
    points: [
      "Full data sovereignty & control",
      "Works in low-connectivity environments",
      "One-time license, no recurring fees",
      "Custom integrations with existing systems",
    ],
  },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services built for modern businesses</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From mobile apps to intelligent automation — RigVedam Solutions covers the full digital stack so you can focus on growth.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <ServicesSection />

    {/* Deployment options */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Flexible Deployment</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your infrastructure, your choice</h2>
            <p className="text-muted-foreground text-lg">
              Deploy in the cloud for instant access or on-premises for maximum control — both are fully supported.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {deploymentOptions.map((opt) => (
            <ScrollReveal key={opt.title}>
              <div className="rounded-xl border border-border bg-card p-8 shadow-soft h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <opt.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{opt.title}</h3>
                <ul className="space-y-2.5">
                  {opt.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Services;
