import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/virtual lab.jpg";
import p2 from "@/assets/ai health care.jpg";
import p3 from "@/assets/cloud based pathogen.avif";
import p4 from "@/assets/spotify.webp";
import p5 from "@/assets/campus leaf scan image.png";

type Project = {
  id: string; title: string; tag: string; year: string; img: string;
  desc: string; stack: string[]; features: string[]; size: "lg" | "md" | "sm" | "xl";
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  { id: "virtual-lab", title: "Virtual Lab", tag: "Simulation · Education", year: "2026", img: p1, size: "lg",
    desc: "An immersive virtual laboratory sandbox built for students to conduct complex chemistry and physics experiments in a safe 3D environment.",
    stack: ["Three.js", "React Three Fiber", "WebSockets", "WebGL", "GSAP"],
    features: ["Realtime collaborative experiment lobbies", "Accurate thermodynamic & chemical solvers", "Interactive 3D instrumentation controls", "Student progress analytics dashboard"],
    demoUrl: "https://my-virtual-lab.vercel.app/" },
  { id: "ai-healthcare", title: "AI Healthcare", tag: "AI · HealthTech", year: "2025", img: p2, size: "sm",
    desc: "An intelligent diagnostic assistant and clinical workflow manager parsing patient data and medical documentation under secure protocols.",
    stack: ["React", "FastAPI", "PyTorch", "Hugging Face", "TailwindCSS"],
    features: ["HIPAA-compliant document ingestion", "Real-time clinical symptom profiling", "Automated diagnostic suggestion engine", "Multi-modal medical imaging support"],
    demoUrl: "https://healthguard-ai-predict.vercel.app/" },
  { id: "pathogen-analyzer", title: "Pathogen Analyzer", tag: "Cloud · Biotech", year: "2025", img: p3, size: "md",
    desc: "A high-throughput cloud platform for sequencing DNA/RNA, tracking mutating pathogen variants, and predicting local outbreak trends.",
    stack: ["Next.js", "AWS S3/Batch", "Rust", "Python", "PostgreSQL"],
    features: ["Sub-minute genomic alignment", "Interactive phylogenetic tree generator", "Real-time global epidemiological reports", "S3-native raw sequencing storage"],
    demoUrl: "https://pathogen-psi.vercel.app/" },
  { id: "spotify-clone", title: "Spotify Clone", tag: "Web App · Integrations", year: "2024", img: p4, size: "md",
    desc: "A real-time co-listening platform and listener telemetry dashboard offering deep statistical insights into personal audio features and trends.",
    stack: ["React", "Spotify API", "Node.js", "TailwindCSS", "Recharts"],
    features: ["Low-latency playback synchronization", "Interactive acoustic feature visualization", "Custom profile dynamic themes", "Smart playlist compiler"],
    demoUrl: "https://music-phi-brown.vercel.app/" },
  { id: "campus-leaf-scan", title: "Campus Leaf Scan", tag: "CV · Mobile", year: "2024", img: p5, size: "xl",
    desc: "A computer-vision-driven cataloging and diagnostic application identifying trees, plants, and foliage health metrics across campus environments.",
    stack: ["React Native", "TensorFlow Lite", "Express.js", "PostgreSQL", "Google Maps"],
    features: ["Offline mobile classification neural net", "Geospatial flora distribution map", "Botanical catalog and sharing database", "Leaf disease diagnostic system"] },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">— 02 / Selected Work</div>
            <h2 className="font-display text-5xl md:text-7xl text-gradient leading-none">Projects with<br /><span className="italic text-aurora">presence</span>.</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            View archive <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => {
                if (p.demoUrl) {
                  window.open(p.demoUrl, "_blank", "noopener,noreferrer");
                } else {
                  setOpen(p);
                }
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass text-left aspect-[4/3] w-full"
            >
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={832}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />

              <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-xs font-mono uppercase tracking-widest">
                <span className="glass rounded-full px-3 py-1">{p.tag}</span>
                <span className="text-muted-foreground">{p.year}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-5xl text-gradient mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground max-w-md line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 glass rounded-full px-3 py-1.5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    {p.demoUrl ? "Open Live App" : "Open case"} <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(null)} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/10">
                <X className="w-4 h-4" />
              </button>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={open.img} alt={open.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 p-8 md:p-12">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">{open.tag} · {open.year}</div>
                  <h3 className="font-display text-5xl md:text-7xl text-gradient">{open.title}</h3>
                </div>
              </div>
              <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  <p className="text-lg leading-relaxed text-foreground/90">{open.desc}</p>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Features</div>
                    <ul className="space-y-3">
                      {open.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {open.stack.map((s) => (
                        <span key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href={open.demoUrl || "#"} target={open.demoUrl ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center justify-between glass rounded-2xl px-5 py-3 hover:bg-foreground/5 transition">
                      <span className="text-sm">Live demo</span><ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={open.githubUrl || "#"} target={open.githubUrl ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center justify-between glass rounded-2xl px-5 py-3 hover:bg-foreground/5 transition">
                      <span className="text-sm">Source code</span><Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
