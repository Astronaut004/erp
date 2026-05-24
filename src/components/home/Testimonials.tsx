import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We migrated from three separate tools to LiteLink in under two weeks. Our finance team's monthly close went from 5 days to 1.5.",
    name: "Sara Lindqvist",
    role: "CFO, Meridian Labs",
    initials: "SL",
  },
  {
    quote: "The automation engine alone saved us 200+ hours per quarter. We've automated purchase orders, approval chains, and customer follow-ups.",
    name: "David Okafor",
    role: "Head of Ops, NorthPeak",
    initials: "DO",
  },
  {
    quote: "Finally an ERP that doesn't look like it was designed in 2005. Our team actually enjoys using it — adoption was almost instant.",
    name: "Marina Chen",
    role: "CTO, Verdant Co",
    initials: "MC",
  },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32 bg-surface-sunken">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by operators</h2>
          <p className="text-muted-foreground text-lg">Hear from teams who made the switch — and never looked back.</p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
