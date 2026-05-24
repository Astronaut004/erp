import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const sections = [
  {
    title: "1. Information we collect",
    body: `We collect information you provide directly to us, such as when you create an account, subscribe to a plan, fill out a form, or contact us for support. This includes:

• **Account information**: name, email address, company name, job title, phone number, and billing details.
• **Usage data**: how you navigate and use RigVedam, features you access, and actions you take within the platform.
• **Device information**: IP address, browser type, operating system, and referring URLs.
• **Financial data entered into the platform**: invoices, transactions, payroll figures, and other business records you input. This data belongs to you — we process it only as a data processor on your behalf.`,
  },
  {
    title: "2. How we use your information",
    body: `We use the information we collect to:

• Provide, operate, and improve the RigVedam platform.
• Process payments and send you billing-related communications.
• Send you technical notices, security alerts, and support messages.
• Respond to your comments, questions, and customer service requests.
• Monitor and analyse trends, usage, and activities to improve our product.
• Detect, investigate, and prevent fraudulent transactions and other illegal activities.
• Comply with legal obligations.

We do not sell your personal information to third parties.`,
  },
  {
    title: "3. Data sharing",
    body: `We share your information only in the following circumstances:

• **Service providers**: We share data with third-party vendors who help us operate the platform (e.g., cloud hosting, email delivery, payment processing). These vendors are contractually bound to protect your data and may only use it to provide services to us.
• **Business transfers**: If RigVedam is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
• **Legal requirements**: We may disclose information if required by law, court order, or governmental authority, or to protect the rights and safety of our users and the public.
• **With your consent**: We may share information for any other purpose with your explicit consent.`,
  },
  {
    title: "4. Data retention",
    body: `We retain your personal data for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time. After account closure, your data remains accessible for 30 days (so you can export it), after which it is permanently and irrecoverably deleted from our systems within 90 days.

Business records you input into RigVedam (invoices, transactions, employee data) are retained according to your configured data-retention policies, subject to any legal obligations that require longer retention.`,
  },
  {
    title: "5. Your rights",
    body: `Depending on your location, you may have the following rights regarding your personal data:

• **Access**: Request a copy of the personal data we hold about you.
• **Correction**: Request that we correct inaccurate or incomplete data.
• **Deletion**: Request that we delete your personal data ("right to erasure").
• **Portability**: Request your data in a structured, machine-readable format.
• **Objection**: Object to processing of your personal data in certain circumstances.
• **Restriction**: Request that we restrict the processing of your data.

To exercise any of these rights, contact us at privacy@rigvedam.com. We will respond within 30 days.`,
  },
  {
    title: "6. Cookies",
    body: `We use cookies and similar tracking technologies to collect and use personal information about you. Cookies we use fall into three categories:

• **Essential cookies**: Required for the platform to function. Cannot be disabled.
• **Analytics cookies**: Help us understand how users interact with RigVedam so we can improve it. You may opt out via your browser settings.
• **Marketing cookies**: Used to deliver relevant advertisements. You may opt out at any time via our cookie preferences centre.`,
  },
  {
    title: "7. International data transfers",
    body: `RigVedam operates globally. Your data may be stored and processed in India, the United Arab Emirates, or other countries where we or our service providers operate. We ensure that cross-border transfers comply with applicable laws, including through Standard Contractual Clauses approved by the European Commission for transfers from the EU/EEA.

Enterprise customers may request data residency in specific regions (EU, India, UAE). Contact our sales team for more details.`,
  },
  {
    title: "8. Security",
    body: `We implement and maintain industry-standard technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, and SOC 2 Type II certification.

Despite our best efforts, no security measures are impenetrable. In the event of a data breach affecting your rights or freedoms, we will notify you and relevant supervisory authorities as required by law.`,
  },
  {
    title: "9. Changes to this policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes by email or via a prominent notice within the platform at least 14 days before the change takes effect. Your continued use of RigVedam after the effective date constitutes acceptance of the revised policy.`,
  },
  {
    title: "10. Contact us",
    body: `If you have questions, concerns, or requests related to this Privacy Policy, please contact our Data Protection Officer:

Email: privacy@rigvedam.com
Address: RigVedam Solutions, India · Dubai · Africa

You also have the right to lodge a complaint with your local data protection authority if you believe your rights have been violated.`,
  },
];

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2026</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 pb-32">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed mb-12">
            RigVedam Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully. If you do not agree with its terms, please discontinue use of our platform.
          </p>
        </ScrollReveal>
        <div className="space-y-12">
          {sections.map((s) => (
            <ScrollReveal key={s.title}>
              <div>
                <h2 className="text-xl font-bold mb-4">{s.title}</h2>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.body}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Privacy;
