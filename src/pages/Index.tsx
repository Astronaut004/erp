import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/home/Hero";
import { PainSolution } from "@/components/home/PainSolution";
import { CoreModules } from "@/components/home/CoreModules";
import { IndustrySolutionsTabs } from "@/components/home/IndustrySolutionsTabs";
import { DRCHighlight } from "@/components/home/DRCHighlight";
import { StatsRow } from "@/components/home/StatsRow";
import { Testimonials } from "@/components/home/Testimonials";
import { PartnerSection } from "@/components/home/PartnerSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>LiteLink ERP — Run Your Entire Business From One Place | Rigvedam Solutions</title>
      <meta
        name="description"
        content="LiteLink ERP unifies inventory, finance, HR, and operations into one intelligent platform. Built for Indian industry, trusted by 2,400+ companies across FMCG, Chemical, Pharma, and more."
      />
      <meta property="og:title" content="LiteLink ERP — Run Your Entire Business From One Place" />
      <meta
        property="og:description"
        content="Unify inventory, finance, HR, and operations. 2,400+ companies trust LiteLink ERP by Rigvedam Solutions."
      />
      <meta property="og:url" content="https://erp-chi-plum.vercel.app/" />
    </Helmet>

    <Navbar />
    <Hero />
    <StatsRow />
    <PainSolution />
    <CoreModules />
    <IndustrySolutionsTabs />
    <DRCHighlight />
    <Testimonials />
    <PartnerSection />
    <PricingTeaser />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
