import { Link } from "react-router-dom";
import { ArrowRight, Layers, GraduationCap, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const pillars = [
  {
    icon: Layers,
    title: "Implementation",
    desc: "Rigvedam's certified consultants handle full ERP deployment — from data migration to go-live, with zero disruption to your operations.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Role-based training programmes for every team, delivered onsite in your preferred language. Your staff are productive from day one.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "SLA-backed support with a named account manager, rapid escalation paths, and proactive health-check reviews every quarter.",
  },
];

export const PartnerSection = () => (
  <section className="py-20 md:py-28 bg-slate-50">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Our Partner</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In Partnership with Rigvedam Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            LiteLink is delivered through Rigvedam Solutions — a dedicated implementation and support
            partner that ensures every deployment succeeds.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
        {pillars.map((p) => (
          <StaggerItem key={p.title}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="rounded-2xl border border-border bg-white p-7 shadow-soft hover:shadow-card-hover hover:border-primary/20 transition-shadow duration-300 h-full"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: -5, transition: { duration: 0.2 } }}
                className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 inline-flex"
              >
                <p.icon size={22} />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal>
        <div className="text-center">
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-flex">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 text-sm"
            >
              Become a partner <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
