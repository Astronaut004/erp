import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { industries } from "@/data/industries";

export const IndustrySolutions = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Industry Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for your industry</h2>
          <p className="text-muted-foreground text-lg">
            Pre-configured ERP modules tailored to the real workflows and compliance needs of each sector.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <StaggerItem key={ind.slug}>
              <Link
                to={`/solutions/${ind.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 h-full hover:-translate-y-0.5"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-base">{ind.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ind.desc}</p>
                <div className="flex items-center gap-1 text-xs text-primary font-medium mt-auto group-hover:gap-2 transition-all duration-200">
                  View solution <ArrowRight size={12} />
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
