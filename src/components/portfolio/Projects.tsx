import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Grid } from "lucide-react";
import p1 from "@/assets/virtual lab.jpg";
import p2 from "@/assets/ai health care.jpg";
import p3 from "@/assets/cloud based pathogen.avif";
import p4 from "@/assets/spotify.webp";
import p5 from "@/assets/campus leaf scan image.png";

const projects = [
  { id: "campus-leaf-scan", title: "Campus Leaf Scan", tag: "AI/CV", year: "2024", img: p5,
    desc: "AI-powered leaf identification system using image-based classification for trees and plants.",
    githubUrl: "https://github.com/Tarulatapriya" },
  { id: "diabetes-prediction", title: "Diabetes Prediction Project", tag: "Machine Learning", year: "2025", img: p2,
    desc: "Machine learning model using Python and Scikit-learn to predict diabetes outcomes.",
    demoUrl: "https://healthguard-ai-predict.vercel.app/", githubUrl: "https://github.com/Tarulatapriya" },
  { id: "pathogen-website", title: "Pathogen Information Website", tag: "Web App", year: "2024", img: p3,
    desc: "Educational website presenting structured biological information about pathogens.",
    demoUrl: "https://pathogen-psi.vercel.app/", githubUrl: "https://github.com/Tarulatapriya" },
  { id: "virtual-lab", title: "Virtual Lab", tag: "Simulation", year: "2026", img: p1,
    desc: "An immersive virtual laboratory sandbox built for students.",
    demoUrl: "https://my-virtual-lab.vercel.app/", githubUrl: "https://github.com/Tarulatapriya" },
  { id: "spotify-clone", title: "Spotify Clone", tag: "Web App", year: "2024", img: p4,
    desc: "Responsive Spotify Clone featuring playlist functionality and interactive music controls.",
    demoUrl: "https://music-phi-brown.vercel.app/", githubUrl: "https://github.com/Tarulatapriya" },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="pt-2 pb-0 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">Featured Projects</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#222] transition rounded-full text-xs font-medium border border-border">
            <Grid className="w-3 h-3" /> {showAll ? "View Less" : "View All"}
          </button>
          {!showAll && (
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll("left")} className="p-2 bg-[#1a1a1a] hover:bg-[#222] transition rounded-full border border-border"><ArrowLeft className="w-4 h-4" /></button>
              <button onClick={() => scroll("right")} className="p-2 bg-[#1a1a1a] hover:bg-[#222] transition rounded-full border border-border"><ArrowRight className="w-4 h-4" /></button>
            </div>
          )}
        </div>
      </div>

      <div 
        ref={scrollRef}
        className={showAll 
          ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
          : "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        }
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={showAll 
              ? "w-full h-[340px] bg-[#0d0d0d] border border-border rounded-[2rem] p-4 flex flex-col"
              : "w-[85vw] md:w-[340px] h-[340px] flex-shrink-0 snap-center bg-[#0d0d0d] border border-border rounded-[2rem] p-4 flex flex-col"
            }
          >
            <div className="relative h-[220px] w-full flex-shrink-0 rounded-2xl overflow-hidden mb-4 group cursor-pointer">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 leading-tight">{p.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{p.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto px-1 pb-1">
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-white text-black hover:bg-gray-200 transition rounded-full text-sm font-semibold">
                  Live <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] text-white hover:bg-[#222] transition rounded-full text-sm font-semibold border border-border">
                  Code <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
