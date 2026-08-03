import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "AI", "Web3", "Cloud", "DevOps", "Design", "Tools"] as const;
type Cat = typeof categories[number];

const skills: { name: string; cat: Exclude<Cat, "All"> }[] = [
  { name: "React", cat: "Frontend" }, { name: "Next.js", cat: "Frontend" }, { name: "TypeScript", cat: "Frontend" },
  { name: "Tailwind", cat: "Frontend" }, { name: "Framer Motion", cat: "Frontend" }, { name: "Three.js", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" }, { name: "Rust", cat: "Backend" }, { name: "Go", cat: "Backend" },
  { name: "PostgreSQL", cat: "Backend" }, { name: "GraphQL", cat: "Backend" },
  { name: "PyTorch", cat: "AI" }, { name: "LangChain", cat: "AI" }, { name: "OpenAI", cat: "AI" }, { name: "Vector DBs", cat: "AI" },
  { name: "Solidity", cat: "Web3" }, { name: "Ethers.js", cat: "Web3" }, { name: "Foundry", cat: "Web3" },
  { name: "AWS", cat: "Cloud" }, { name: "Cloudflare", cat: "Cloud" }, { name: "Vercel", cat: "Cloud" },
  { name: "Docker", cat: "DevOps" }, { name: "Kubernetes", cat: "DevOps" }, { name: "Terraform", cat: "DevOps" },
  { name: "Figma", cat: "Design" }, { name: "Blender", cat: "Design" }, { name: "After Effects", cat: "Design" },
  { name: "Git", cat: "Tools" }, { name: "Linear", cat: "Tools" }, { name: "Notion", cat: "Tools" },
];

export function Skills() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">— 01 / Capabilities</div>
            <h2 className="font-display text-5xl md:text-7xl text-gradient leading-none">An ecosystem<br />of <span className="italic text-aurora">craft</span>.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">A living stack — refined across years of shipping production systems, design tools, and intelligent products.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition ${
                active === c ? "bg-foreground text-background" : "glass hover:bg-foreground/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-wrap gap-3">
          {filtered.map((s, i) => (
            <motion.div
              layout
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group relative glass rounded-2xl px-5 py-4 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <div className="relative flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary glow-pulse" />
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.cat}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
