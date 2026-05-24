import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-hero bg-gradient-mesh">
    <div className="container relative py-24 md:py-36 lg:py-44">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now in public beta — 2,400+ companies onboarded
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6">
            Run your entire business
            <br />
            <span className="text-gradient-primary">from one place</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            RigVedam Solutions unifies inventory, finance, HR, and operations into a single platform that scales with you — no spreadsheet chaos, no disconnected tools.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/contact">
                Book a Demo
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/features">
                <Play size={16} />
                Watch Overview
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-xs text-muted-foreground">
            Free 14-day trial · No credit card required · Setup in 5 minutes
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
