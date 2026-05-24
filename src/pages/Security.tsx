import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CTASection } from "@/components/home/CTASection";
import { Shield, Lock, Eye, Server, Key, AlertCircle, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: <Lock size={22} />,
    title: "End-to-end encryption",
    desc: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Field-level encryption is available for especially sensitive data such as salary figures, tax IDs, and banking details.",
  },
  {
    icon: <Key size={22} />,
    title: "Identity & access management",
    desc: "SSO via SAML 2.0 and OIDC, SCIM-based user provisioning, role-based access control (RBAC) with attribute-level granularity, and mandatory MFA enforcement for admin accounts.",
  },
  {
    icon: <Eye size={22} />,
    title: "Full audit trail",
    desc: "Every action in RigVedam — every record created, edited, or deleted — is captured in an immutable, tamper-proof audit log with timestamps, IP addresses, and session metadata.",
  },
  {
    icon: <Server size={22} />,
    title: "Infrastructure & availability",
    desc: "Multi-region deployments on ISO 27001-certified infrastructure. Automated daily backups with point-in-time recovery. 99.99% uptime SLA with transparent status monitoring.",
  },
  {
    icon: <Shield size={22} />,
    title: "Compliance & certifications",
    desc: "SOC 2 Type II certified. GDPR-compliant with data residency options in EU, India, and UAE. Built-in data retention policies and right-to-erasure workflows.",
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Vulnerability management",
    desc: "Continuous SAST/DAST scanning in CI/CD pipelines. Annual third-party penetration tests. A public responsible-disclosure program and dedicated security incident response team.",
  },
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR Compliant",
  "PCI DSS (Payments)",
  "HIPAA Ready",
  "NDPR (Nigeria)",
];

const practices = [
  "Zero-trust network architecture",
  "Least-privilege access by default",
  "Secrets managed via HashiCorp Vault",
  "Dependency vulnerability scanning (Snyk)",
  "Automated compliance checks in CI pipeline",
  "Private VPC with no public database endpoints",
  "WAF and DDoS mitigation at the edge",
  "24/7 Security Operations Centre (SOC) monitoring",
];

const Security = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Security</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your data is a responsibility we take seriously</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RigVedam is built on a security-first foundation. From encryption to compliance, every layer of our platform is designed to protect the businesses and people who trust us with their most sensitive data.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Pillars */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security by design</h2>
            <p className="text-muted-foreground text-lg">Six pillars that protect your data at every level of the stack.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-soft h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">{p.icon}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Certifications + Practices */}
    <section className="py-24 md:py-32 bg-surface-sunken">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-6">Certifications & compliance</h2>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={17} className="text-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold mb-6">Engineering practices</h2>
            <ul className="space-y-3">
              {practices.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={17} className="text-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Responsible disclosure */}
    <section className="py-24 md:py-32">
      <div className="container max-w-2xl">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-card p-10 shadow-soft text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
              <Shield size={26} />
            </div>
            <h2 className="text-2xl font-bold mb-3">Found a vulnerability?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We run a responsible-disclosure programme and reward researchers who help us improve. Report security issues to <span className="text-primary font-medium">security@rigvedam.com</span>. We commit to acknowledging reports within 24 hours and resolving critical issues within 72 hours.
            </p>
            <p className="text-sm text-muted-foreground">We do not pursue legal action against good-faith security researchers.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Security;
