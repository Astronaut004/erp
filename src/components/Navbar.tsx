import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown,
  Package, FlaskConical, Factory, Stethoscope,
  BarChart3, Wrench, Settings, GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const industryLinks = [
  { label: "FMCG", href: "/solutions/fmcg", icon: Package },
  { label: "Chemical", href: "/solutions/chemical", icon: FlaskConical },
  { label: "Plastic", href: "/solutions/plastic", icon: Factory },
  { label: "Pharmaceuticals", href: "/solutions/pharma", icon: Stethoscope },
  { label: "Trading", href: "/solutions/trading", icon: BarChart3 },
  { label: "Engineering", href: "/solutions/engineering", icon: Wrench },
  { label: "Process Manufacturing", href: "/solutions/process-manufacturing", icon: Settings },
  { label: "Education", href: "/solutions/education", icon: GraduationCap },
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "DRC", href: "/drc" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0, y: -8, scale: 0.96,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.2, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
};

const drawerVariants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { type: "spring" as const, damping: 28, stiffness: 300 } },
  exit: { x: "100%", transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 16 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.25, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/90 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none shrink-0">
            <span className="text-lg font-bold text-[#4F46E5]">LiteLink ERP</span>
            <span className="text-xs text-slate-400 font-normal">by Rigvedam Solutions</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm rounded-full transition-colors duration-200",
                  isSolutionsActive
                    ? "text-[#4F46E5] bg-[#4F46E5]/10 font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                Solutions
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-border bg-white shadow-elevated p-2 z-50"
                  >
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
                      Industries
                    </p>
                    {industryLinks.map((l, i) => (
                      <motion.div key={l.href} custom={i} variants={itemVariants} initial="hidden" animate="show">
                        <Link
                          to={l.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="h-7 w-7 rounded-md bg-[#4F46E5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] transition-colors">
                            <l.icon size={14} className="text-[#4F46E5] group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-sm text-slate-700 group-hover:text-slate-900">{l.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <Link
                        to="/solutions"
                        className="flex items-center justify-center gap-1 px-3 py-2 text-xs text-[#4F46E5] font-medium hover:bg-[#4F46E5]/5 rounded-lg transition-colors"
                      >
                        View all solutions →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-colors duration-200",
                  isActive(l.href)
                    ? "text-[#4F46E5] bg-[#4F46E5]/10 font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Sign In</Link>
            </Button>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="sm"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 shadow-soft"
                asChild
              >
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex md:hidden items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </motion.button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-elevated flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <Link to="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
                <span className="text-lg font-bold text-[#4F46E5]">LiteLink ERP</span>
                <span className="text-xs text-slate-400">by Rigvedam Solutions</span>
              </Link>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(false)}
                className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {/* Solutions accordion */}
              <motion.button
                custom={0}
                variants={mobileItemVariants}
                initial="hidden"
                animate="show"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium">Solutions</span>
                <motion.span
                  animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pl-4 space-y-1"
                  >
                    {industryLinks.map((l) => (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <l.icon size={14} className="text-[#4F46E5] shrink-0" />
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      to="/solutions"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-xs text-[#4F46E5] font-medium"
                    >
                      View all solutions →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((l, i) => (
                <motion.div key={l.href} custom={i + 1} variants={mobileItemVariants} initial="hidden" animate="show">
                  <Link
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm rounded-lg transition-colors",
                      isActive(l.href)
                        ? "text-[#4F46E5] bg-[#4F46E5]/10 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-border space-y-2">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Sign In</Link>
              </Button>
              <Button
                size="lg"
                className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white border-0"
                asChild
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
