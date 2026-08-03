import { motion } from "framer-motion";
import { Trophy, Award, GraduationCap, Rocket, Star, Sparkles } from "lucide-react";

const items = [
  { year: "2026", icon: Trophy, title: "Awwwards · Site of the Day", desc: "Virtual Lab simulation platform recognized for craft and interactive design.", tag: "Award" },
  { year: "2025", icon: Rocket, title: "TechCrunch Disrupt Finalist", desc: "Selected from 2,400+ startups across 60 countries.", tag: "Milestone" },
  { year: "2025", icon: Award, title: "ETHGlobal · Best Design", desc: "Won design track at ETHGlobal NYC hackathon.", tag: "Hackathon" },
  { year: "2024", icon: GraduationCap, title: "Stanford CS · Magna Cum Laude", desc: "B.S. Computer Science · concentration in HCI.", tag: "Education" },
  { year: "2024", icon: Star, title: "Y Combinator W24", desc: "Backed by YC for early-stage developer tooling.", tag: "Internship" },
  { year: "2023", icon: Sparkles, title: "Apple Design Award · Nominee", desc: "Mobile app shortlisted for visual design.", tag: "Award" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">— 03 / Recognition</div>
          <h2 className="font-display text-5xl md:text-7xl text-gradient leading-none">Milestones &<br /><span className="italic text-aurora">moments</span>.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => {
              const Icon = it.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  {/* node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-pulse z-10" />

                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="font-display text-5xl md:text-6xl text-aurora opacity-80">{it.year}</div>
                  </div>

                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="group glass-strong rounded-3xl p-6 hover:bg-foreground/5 transition">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">{it.tag}</div>
                          <h3 className="text-lg font-medium mb-1">{it.title}</h3>
                          <p className="text-sm text-muted-foreground">{it.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
