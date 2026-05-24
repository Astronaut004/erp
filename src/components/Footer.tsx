import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/features" },
    { label: "API Reference", href: "/integrations" },
    { label: "Community", href: "/contact" },
    { label: "Support", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

export const Footer = () => (
  <footer className="border-t border-border bg-surface-sunken">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground text-xs font-bold">RV</span>
            RigVedam Solutions
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Modern ERP for modern businesses. Automate, streamline, grow.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-sm mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© 2026 RigVedam Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);
