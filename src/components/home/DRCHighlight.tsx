import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Clock, Headphones, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  { icon: MapPin, text: "DGI onsite facility support across India" },
  { icon: Users, text: "Dedicated implementation teams per project" },
  { icon: Clock, text: "4-hour critical response, 24-hour resolution SLA" },
  { icon: Headphones, text: "Local language support — Hindi, Tamil, Marathi & more" },
];

export const DRCHighlight = () => (
  <section
    className="py-20 md:py-28"
    style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #312e81 100%)" }}
  >
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal direction="left">
          <p className="text-sm font-semibold text-[#F59E0B] mb-4 uppercase tracking-wider">DRC Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            On-Ground Support,
            <br />Wherever You Are
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Our DRC solution — powered by DGI onsite facility support from India — puts a real team on
            the ground at your location. Rapid implementation, local-language training, and a dedicated
            point of contact from day one through go-live and beyond.
          </p>
          <Link
            to="/drc"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg text-sm"
          >
            Learn about DRC <ArrowRight size={16} />
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="rounded-2xl border border-white/15 bg-white/8 p-7 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-6">What DRC includes</h3>
            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0">
                    <h.icon size={16} />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed pt-1.5">{h.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed">
                  In partnership with Rigvedam Solutions — implementation, training, and ongoing
                  support across India, Dubai, and Africa.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
