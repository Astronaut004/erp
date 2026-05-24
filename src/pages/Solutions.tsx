import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { CTASection } from "@/components/home/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Zambia", region: "Southern Africa", flag: "🇿🇲" },
  { city: "Kinshasa", region: "DR Congo", flag: "🇨🇩" },
  { city: "Nigeria", region: "West Africa", flag: "🇳🇬" },
  { city: "Uganda", region: "East Africa", flag: "🇺🇬" },
  { city: "Dubai", region: "United Arab Emirates", flag: "🇦🇪" },
  { city: "India", region: "South Asia", flag: "🇮🇳" },
];

const Solutions = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Industry Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP built for your industry</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pre-configured modules tailored to the real workflows and compliance needs of each sector — ready to deploy out of the box.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <IndustrySolutions />

    {/* Global Presence */}
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Global Reach</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where we operate</h2>
            <p className="text-muted-foreground text-lg">
              Local expertise, global standards — serving businesses across Africa, the Middle East, and Asia.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((loc) => (
            <StaggerItem key={loc.city}>
              <div className="rounded-xl border border-border bg-card p-5 text-center shadow-soft hover:shadow-card-hover transition-shadow duration-300">
                <div className="text-3xl mb-2">{loc.flag}</div>
                <div className="flex items-center justify-center gap-1 text-sm font-semibold mb-1">
                  <MapPin size={12} className="text-primary" />
                  {loc.city}
                </div>
                <p className="text-xs text-muted-foreground">{loc.region}</p>
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

export default Solutions;
