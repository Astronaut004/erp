import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "DRC", href: "/drc" },
  { label: "Resources", href: "/resources" },
  { label: "Integrations", href: "/integrations" },
  { label: "Changelog", href: "/changelog" },
];

const solutionLinks = [
  { label: "FMCG", href: "/solutions/fmcg" },
  { label: "Chemical", href: "/solutions/chemical" },
  { label: "Pharmaceutical", href: "/solutions/pharma" },
  { label: "Trading", href: "/solutions/trading" },
  { label: "Engineering", href: "/solutions/engineering" },
  { label: "Education", href: "/solutions/education" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Security", href: "/security" },
];

const contactInfo = [
  { icon: Mail, value: "hello@litelinkErp.io" },
  { icon: Phone, value: "+91 95280 XXXXX" },
  { icon: MapPin, value: "India · Dubai · Africa" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-slate-50">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Col 1: Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex flex-col leading-none mb-4">
            <span className="text-base font-bold text-[#4F46E5]">LiteLink ERP</span>
            <span className="text-xs text-slate-400">by Rigvedam Solutions</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Modern ERP for Indian industry — FMCG, Chemical, Pharma, Trading, Engineering & more.
          </p>
          <div className="space-y-2">
            {contactInfo.map((c) => (
              <div key={c.value} className="flex items-center gap-2 text-xs text-muted-foreground">
                <c.icon size={13} className="text-primary shrink-0" />
                {c.value}
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Product */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-slate-800">Product</h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Solutions */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-slate-800">Solutions</h4>
          <ul className="space-y-2.5">
            {solutionLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-slate-800">Company</h4>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Legal */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-slate-800">Legal</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Security", href: "/security" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Rigvedam Solutions. LiteLink ERP. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);
