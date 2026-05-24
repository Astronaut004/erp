import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/home/Hero";
import { LogoCloud } from "@/components/home/LogoCloud";
import { OfferingTeaser } from "@/components/home/OfferingTeaser";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <LogoCloud />
    <OfferingTeaser />
    <FeaturesGrid />
    <DashboardPreview />
    <Benefits />
    <Testimonials />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
