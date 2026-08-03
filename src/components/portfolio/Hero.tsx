import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/taru photo.jpeg";

const titles = ["Creative Engineer", "Product Designer", "AI Tinkerer", "Web3 Builder"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % titles.length), 2600);
    return () => clearInterval(t);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(0)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = "perspective(1200px) rotateY(0) rotateX(0)"; };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      {/* ambient lights */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px] glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px] glow-pulse" />
      <div className="absolute inset-0 aurora-bg opacity-60" />
      <div className="absolute inset-0 noise" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-pulse" />
            Available · Q1 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            <span className="text-gradient">Taru</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <div className="mt-6 h-8 overflow-hidden font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <motion.div animate={{ y: -idx * 32 }} transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}>
              {titles.map((t) => (
                <div key={t} className="h-8 flex items-center">— {t}</div>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Passionate about building intelligent solutions at the intersection of biotechnology and technology. Constantly learning, exploring Machine Learning, AI, and modern software development while creating impactful projects and embracing new challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform">
              View Work <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition">
              <Download className="w-4 h-4" /> Resume
            </a>
            <div className="flex items-center gap-1 ml-2">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-6 max-w-xs">
            {[
              { v: "2+", l: "Years" },
              { v: "20+", l: "Projects" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }}
          className="relative mx-auto w-full max-w-md"
          onMouseMove={onMove} onMouseLeave={onLeave}
        >
          <div ref={cardRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden glow-ring transition-transform duration-300 ease-out will-change-transform">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/40 via-accent/30 to-transparent" />
            <div className="absolute inset-[1px] rounded-3xl overflow-hidden glass-strong">
              <img src={portrait} alt="Taru portrait" width={896} height={1152} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            </div>
          </div>

          <div className="absolute -top-6 -right-6 glass-strong rounded-2xl px-4 py-3 float-slow">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Now</div>
            <div className="text-sm">Shipping v4.0</div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-4 py-3 float-slow" style={{ animationDelay: "1.5s" }}>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Stack</div>
            <div className="text-sm">React · Rust · AI</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
