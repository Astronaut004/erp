import { useState } from "react";
import { Smartphone, Headphones, Globe, Bot, Zap, BarChart2, FlaskConical, Layout } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { DetailModal, DetailItem } from "@/components/DetailModal";

const services: DetailItem[] = [
  {
    icon: Smartphone,
    label: "Mobile App",
    tagline: "Your ERP in your pocket — iOS & Android.",
    desc: "Native iOS & Android apps so your team stays productive on the go.",
    description: "We design and develop custom native mobile applications for iOS and Android that give your team full access to critical business data and workflows — whether they're in the office, on-site, or in the field.",
    highlights: [
      "Native iOS and Android apps with platform-specific UX patterns",
      "Offline mode with automatic sync when connectivity resumes",
      "Push notifications for approvals, alerts, and task updates",
      "Biometric authentication (Face ID, fingerprint) for secure access",
      "Deep integration with your existing ERP and backend systems",
      "Published to App Store and Google Play with ongoing maintenance",
    ],
  },
  {
    icon: Layout,
    label: "Web App",
    tagline: "Powerful, browser-based applications for any team.",
    desc: "Full-featured browser-based ERP accessible from anywhere, any device.",
    description: "We build robust, scalable web applications that run in any modern browser — giving your entire organisation real-time access to data, workflows, and reports with no software installation required.",
    highlights: [
      "Responsive design that works seamlessly across desktop, tablet, and mobile",
      "Role-based dashboards tailored to each team's daily workflow",
      "Real-time collaboration features — live updates, shared queues, comments",
      "SSO/SAML and multi-factor authentication for enterprise security",
      "Progressive Web App (PWA) support for offline capability",
      "Scalable cloud infrastructure with 99.99% uptime SLA",
    ],
  },
  {
    icon: Globe,
    label: "Website",
    tagline: "Your digital presence, built to convert.",
    desc: "Corporate and product websites designed and developed end-to-end.",
    description: "From corporate identity sites to high-converting product landing pages, we handle everything — strategy, UX design, development, and launch — so your website works as hard as your team does.",
    highlights: [
      "Custom UI/UX design aligned with your brand and target audience",
      "CMS integration (headless or traditional) for easy content updates",
      "SEO-optimised structure, meta tags, and Core Web Vitals performance",
      "E-commerce capabilities with payment gateway integration",
      "Cookie consent, accessibility (WCAG 2.1), and GDPR compliance",
      "Analytics setup (GA4, Hotjar) and ongoing performance monitoring",
    ],
  },
  {
    icon: Bot,
    label: "Chatbot",
    tagline: "AI conversations that work around the clock.",
    desc: "AI-powered chatbots for customer support, lead capture, and internal helpdesks.",
    description: "We build intelligent chatbots that handle customer inquiries, qualify leads, and support internal teams — 24/7, across every channel your audience uses, with seamless handoff to live agents when needed.",
    highlights: [
      "NLP-powered intent recognition for natural, context-aware conversations",
      "Multi-channel deployment: website, WhatsApp, Messenger, Slack, Teams",
      "Lead capture flows with CRM integration and automated follow-up",
      "FAQ and knowledge-base automation to deflect tier-1 support tickets",
      "Live-agent handoff with full conversation history transferred",
      "Analytics dashboard for conversation volume, deflection rate, and CSAT",
    ],
  },
  {
    icon: Zap,
    label: "Automation & RPA",
    tagline: "Let robots handle the repetitive work.",
    desc: "Robotic Process Automation to eliminate repetitive tasks and cut operational overhead.",
    description: "We design and deploy RPA bots and workflow automations that take over time-consuming, rule-based tasks — freeing your team to focus on higher-value work while reducing errors and operational costs.",
    highlights: [
      "Visual workflow builder — no-code automation for business teams",
      "RPA bots for data entry, document processing, and report generation",
      "Cross-application automation connecting your ERP, email, and third-party tools",
      "Approval workflow automation with escalation and SLA tracking",
      "Scheduled jobs and event-triggered automation for real-time responses",
      "Full audit log and monitoring dashboard for every automated process",
    ],
  },
  {
    icon: BarChart2,
    label: "Power BI",
    tagline: "Turn raw data into decisions, instantly.",
    desc: "Real-time dashboards and business intelligence reports powered by Microsoft Power BI.",
    description: "We design and deploy Microsoft Power BI solutions that connect your data sources, build meaningful dashboards, and deliver the insights decision-makers need — accessible on any device, in real time.",
    highlights: [
      "Custom dashboard design tailored to each department's KPIs",
      "Direct connectors to your ERP, databases, CRM, and SaaS tools",
      "Scheduled report delivery to stakeholders via email or Teams",
      "Row-level security so each user only sees data they're authorised for",
      "Embedded analytics within your existing web applications",
      "Training and enablement so your team can build their own reports",
    ],
  },
  {
    icon: FlaskConical,
    label: "POC Development",
    tagline: "Validate the idea before the full investment.",
    desc: "Rapid proof-of-concept builds to validate ideas before full investment.",
    description: "Before committing to a full build, a well-executed POC de-risks your investment. We rapidly prototype the core functionality of your idea, get it in front of real users, and help you decide confidently whether to proceed.",
    highlights: [
      "Scoped sprint delivery — working prototype in 2–4 weeks",
      "Functional UI and backend to demonstrate core user journeys",
      "User testing sessions and structured feedback collection",
      "Technical feasibility assessment and architecture recommendations",
      "Clear go/no-go report with effort and cost estimates for full build",
      "Codebase and assets handed over for use in full development phase",
    ],
  },
  {
    icon: Headphones,
    label: "Support",
    tagline: "Expert help, always available.",
    desc: "Dedicated technical support with SLA-backed response times for every client.",
    description: "Every LiteLink client gets access to our dedicated support team — real engineers who know your system, respond within agreed SLA windows, and work proactively to keep your platform running at its best.",
    highlights: [
      "SLA-backed response times: Critical (1hr), High (4hr), Standard (24hr)",
      "Dedicated account manager and named support engineer for each client",
      "Multi-channel support: ticketing portal, email, phone, and live chat",
      "Proactive monitoring with automated alerts before issues impact users",
      "Regular platform health reviews and performance optimisation",
      "On-site and remote training sessions for new staff and feature rollouts",
    ],
  },
];

export const ServicesSection = () => {
  const [selected, setSelected] = useState<DetailItem | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services we provide</h2>
            <p className="text-muted-foreground text-lg">
              From mobile apps to intelligent automation — we cover the full digital stack for your business.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.label}>
              <button
                onClick={() => setSelected(s)}
                className="w-full text-left rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 h-full flex flex-col gap-3 cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon size={20} />
                </div>
                <h3 className="font-semibold text-base">{s.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="text-xs text-primary font-medium mt-auto pt-1">Learn more →</p>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
