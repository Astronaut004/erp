import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const EMAILJS_SERVICE_ID  = "service_px22m4k";
const EMAILJS_TEMPLATE_ID = "template_kw6hjzl";
const EMAILJS_PUBLIC_KEY  = "yvoTstHmfHmoJaocm";

const ease = [0.16, 1, 0.3, 1] as const;

const contactItems = [
  { icon: Mail, label: "Email", value: "ac4548817@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9528085" },
  { icon: MapPin, label: "Office", value: "India · Dubai · Africa" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setSent(true);
        toast.success("Message sent! We'll get back to you within 24 hours.");
        formRef.current?.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again or email us directly.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us — Book a Demo | LiteLink ERP by Rigvedam Solutions</title>
        <meta name="description" content="Book a demo, ask about pricing, or get migration help. Contact the LiteLink ERP team — we respond within one business day." />
        <meta property="og:title" content="Contact LiteLink ERP | Book a Demo" />
        <meta property="og:url" content="https://erp-chi-plum.vercel.app/contact" />
      </Helmet>
      <Navbar />

      <section className="py-24 md:py-32 bg-gradient-hero bg-gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Left: info */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Contact</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's talk about your business</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Whether you want a demo, have a question about pricing, or need help migrating — we're here.
                </p>

                <div className="space-y-6">
                  {contactItems.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                        className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0"
                      >
                        <c.icon size={18} />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium">{c.label}</p>
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal direction="right">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8 shadow-medium"
              >
                <h2 className="text-lg font-semibold mb-6">Book a demo</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">First name</label>
                      <Input required name="first_name" placeholder="Sara" className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Last name</label>
                      <Input required name="last_name" placeholder="Lindqvist" className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Work email</label>
                    <Input required name="from_email" type="email" placeholder="sara@company.com" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Company</label>
                    <Input required name="company" placeholder="Meridian Labs" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">How can we help?</label>
                    <Textarea
                      required
                      name="message"
                      placeholder="Tell us about your team size, current tools, and what you're looking for…"
                      className="rounded-lg min-h-[100px]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || sent}
                    whileHover={!loading && !sent ? { scale: 1.02 } : {}}
                    whileTap={!loading && !sent ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.15 }}
                    className="w-full py-3 px-6 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5] text-white shadow-md disabled:opacity-70 transition-opacity flex items-center justify-center gap-2"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {sent ? (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={16} className="text-green-300" />
                          Message Sent!
                        </motion.span>
                      ) : loading ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <p className="text-xs text-muted-foreground text-center">We'll respond within one business day.</p>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
