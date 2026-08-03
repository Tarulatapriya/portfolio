import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px] glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-pulse" />
            Available for Work
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-none">
            <span className="text-gradient">Let's build the</span><br />
            <span className="text-aurora italic">next icon.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Open to select engagements, product collaborations, and creative residencies through 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@studio.com" />
            </div>
            <Field label="Subject" placeholder="Project, role, or idea" />
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-2">Message</label>
              <textarea rows={5} placeholder="Tell me about the vision…" required
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base resize-none transition" />
            </div>
            <button type="submit"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:scale-[1.02] transition">
              {sent ? "Sent — talk soon" : (<>Send message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" /></>)}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <a href="mailto:hello@alex.dev" className="group block glass-strong rounded-3xl p-6 hover:bg-foreground/5 transition">
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
              <div className="text-lg mt-1">hello@taru.dev</div>
            </a>

            <div className="glass-strong rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Location</div>
              <div className="text-lg mt-1">Remote</div>
              <div className="text-xs text-muted-foreground mt-1">Worldwide · responding within 24h</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="group glass-strong rounded-2xl px-3 py-4 text-center hover:bg-foreground/5 transition">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary">{s}</div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <span>© 2026 · Taru</span>
          <span>Crafted with intention</span>
        </footer>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</label>
      <input type={type} placeholder={placeholder} required
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base transition" />
    </div>
  );
}
