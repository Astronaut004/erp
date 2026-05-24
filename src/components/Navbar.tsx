import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground text-xs font-bold">RV</span>
          <span>RigVedam <span className="text-muted-foreground font-normal">Solutions</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors duration-200",
                location.pathname === l.href
                  ? "text-foreground bg-secondary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="gradient" size="sm" asChild>
            <Link to="/contact">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <div className="container py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm rounded-lg hover:bg-secondary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Button variant="gradient" className="flex-1" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>Book Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
