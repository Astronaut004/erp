import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const sections = [
  {
    title: "1. Acceptance of terms",
    body: `By accessing or using the RigVedam platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.

If you do not agree to these Terms, you may not use the Service.`,
  },
  {
    title: "2. Description of service",
    body: `RigVedam Solutions provides a cloud-based Enterprise Resource Planning (ERP) platform that includes modules for finance and accounting, inventory and warehousing, human resources and payroll, sales and CRM, project management, manufacturing, compliance, and related business services.

We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice to you.`,
  },
  {
    title: "3. Accounts and registration",
    body: `To access the Service, you must register for an account. You agree to:

• Provide accurate, current, and complete information during registration.
• Maintain the security of your password and account.
• Notify us immediately of any unauthorised use of your account.
• Accept responsibility for all activities that occur under your account.

You may not share your account credentials with third parties or create accounts on behalf of others without authorisation.`,
  },
  {
    title: "4. Subscriptions and billing",
    body: `The Service is provided on a subscription basis. By selecting a paid plan, you agree to pay the applicable fees as described on our Pricing page. All fees are:

• Billed in advance on a monthly or annual basis.
• Non-refundable except as expressly stated in our refund policy or required by law.
• Subject to change with 30 days' written notice.

If your payment fails and remains unresolved for 14 days, we may suspend your account. Your data will be retained for 30 days after suspension before deletion.

Annual subscribers receive a 20% discount. Annual subscriptions are non-refundable after the first 30 days.`,
  },
  {
    title: "5. Acceptable use",
    body: `You agree not to use the Service to:

• Violate any applicable law, regulation, or third-party rights.
• Upload, transmit, or store data that is unlawful, harmful, or fraudulent.
• Attempt to gain unauthorised access to any part of the Service or its systems.
• Use the Service to build a competing product or service.
• Interfere with or disrupt the integrity or performance of the Service.
• Circumvent any access controls or usage limits.
• Use automated means to scrape, crawl, or extract data from the Service.

We reserve the right to terminate accounts that violate these restrictions without refund.`,
  },
  {
    title: "6. Your data",
    body: `You retain ownership of all data you input into the RigVedam platform ("Customer Data"). You grant us a limited licence to process Customer Data solely to provide and improve the Service.

We will:
• Never sell your Customer Data to third parties.
• Never use your Customer Data to train AI models without your explicit consent.
• Provide data export tools so you can retrieve your data at any time.
• Delete your Customer Data within 90 days of account termination (after a 30-day grace period).

You are responsible for ensuring that your use of the Service and the data you input comply with applicable laws, including data protection laws.`,
  },
  {
    title: "7. Intellectual property",
    body: `The Service, including its software, design, trademarks, and content, is owned by RigVedam Solutions and protected by intellectual property laws. These Terms do not grant you any rights to use RigVedam's trademarks, logos, or branding.

We may use your company name and logo in our customer lists and marketing materials unless you opt out by contacting us.`,
  },
  {
    title: "8. Service level agreement",
    body: `For Business and Enterprise plan customers, we commit to the following:

• **Uptime**: 99.9% monthly uptime for Starter; 99.99% for Business and Enterprise.
• **Scheduled maintenance**: We will provide at least 48 hours' notice for planned downtime exceeding 15 minutes.
• **Support response times**: Critical issues (platform unavailable) — 1 hour for Enterprise, 4 hours for Business; High-priority issues — 4 hours for Enterprise, 8 hours for Business.

Service credits are available for SLA breaches. Contact support@rigvedam.com to submit a claim within 30 days of the incident.`,
  },
  {
    title: "9. Limitation of liability",
    body: `To the maximum extent permitted by law, RigVedam Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service.

Our total liability to you for any claim arising out of or relating to these Terms or the Service shall not exceed the amount you paid to us in the 12 months preceding the claim.

Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "10. Changes to terms",
    body: `We may update these Terms from time to time. We will notify you of material changes via email or a prominent notice within the platform at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes your acceptance of the updated Terms.`,
  },
  {
    title: "11. Governing law",
    body: `These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict-of-law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of India, unless otherwise agreed in an Enterprise agreement.`,
  },
  {
    title: "12. Contact",
    body: `For questions about these Terms, contact us at:

Email: legal@rigvedam.com
Address: RigVedam Solutions, India · Dubai · Africa`,
  },
];

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2026</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 pb-32">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground leading-relaxed mb-12">
            These Terms of Service govern your access to and use of RigVedam Solutions' platform and services. Please read them carefully before using our product.
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

export default Terms;
