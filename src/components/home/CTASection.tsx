import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const CTASection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal>
        <div className="relative rounded-3xl bg-gradient-primary overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-[1.1]">
              Ready to simplify your operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Join 2,400+ companies that replaced their tool sprawl with LiteLink. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="xl" variant="accent" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
