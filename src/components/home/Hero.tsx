import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const industryIcons = ["FMCG", "Chemical", "Plastic", "Pharma", "Trading", "Engineering", "Process Mfg", "Education"];

const miniStats = [
  { label: "Revenue", value: "₹2.8Cr", change: "+12%", up: true },
  { label: "Orders", value: "1,847", change: "+8%", up: true },
  { label: "Inventory", value: "98.2%", change: "+1.4%", up: true },
  { label: "Payroll", value: "On Time", change: "100%", up: true },
];

const chartBars = [38, 52, 44, 68, 72, 58, 82, 76, 90, 84, 96, 88];

export const Hero = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #4F46E5 100%)" }}
  >
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

    <div className="container relative py-20 md:py-28 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            Now in public beta — 2,400+ companies onboarded
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Run Your Entire Business
            <span className="block text-[#F59E0B]">From One Place</span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
            LiteLink ERP unifies inventory, finance, HR, and operations into one
            intelligent platform — built for Indian industry, trusted by 2,400+ companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              size="xl"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 font-semibold shadow-lg"
              asChild
            >
              <Link to="/contact">
                Start Free Trial <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              asChild
            >
              <Link to="/contact">Watch Demo</Link>
            </Button>
          </div>

          {/* Trust bar */}
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider mb-3 font-medium">
              Industries served
            </p>
            <div className="flex flex-wrap gap-2">
              {industryIcons.map((name) => (
                <span
                  key={name}
                  className="text-xs bg-white/10 border border-white/15 text-white/70 px-3 py-1 rounded-full"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: dashboard mock */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/10 rounded-md px-4 py-1 text-xs text-white/50 font-mono">
                  app.litelinkErp.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-sm">Business Overview</h3>
                  <p className="text-white/50 text-xs">Live · Updated just now</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400 font-medium">
                  <TrendingUp size={12} /> All systems nominal
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {miniStats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/10 border border-white/10 p-3">
                    <p className="text-white/50 text-xs mb-1">{s.label}</p>
                    <p className="text-white font-bold text-base tabular-nums">{s.value}</p>
                    <div className="flex items-center gap-1 text-xs font-medium text-green-400 mt-0.5">
                      <ArrowUpRight size={10} /> {s.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <p className="text-white/50 text-xs mb-3">Revenue — last 12 months</p>
                <div className="flex items-end gap-1 h-16">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-[#F59E0B]/60 hover:bg-[#F59E0B] transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Module pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Finance", "Inventory", "HR", "Sales", "Production", "Compliance"].map((m) => (
                  <span
                    key={m}
                    className="text-xs bg-white/10 border border-white/10 text-white/60 px-2.5 py-1 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
