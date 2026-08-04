import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, GraduationCap, FileBadge, ExternalLink, ArrowLeft, ArrowRight, Grid } from "lucide-react";
import bioQuestCert from "@/assets/Bio quest certificate.jpg";
import iitKgpCert from "@/assets/IIT Kharagpur certificate.jpg";
import udemyCert from "@/assets/udemy certificate.jpeg";

const items: Array<{icon: any, title: string, desc: string, tag: string, certificate?: string, color: string}> = [
  { icon: Trophy, title: "Track Winner – Blockchain", desc: "Alva’s Institute of Engineering & Technology", tag: "Hackathon", color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20 border" },
  { icon: Award, title: "Third Prize – BioQuest", desc: "NMAM Institute of Technology", tag: "Competition", certificate: bioQuestCert, color: "text-amber-500 bg-amber-500/10 border-amber-500/20 border" },
  { icon: FileBadge, title: "Full Stack Web Development", desc: "Udemy", tag: "Certification", certificate: udemyCert, color: "text-blue-400 bg-blue-500/10 border-blue-500/20 border" },
  { icon: FileBadge, title: "Biopython for Bioinformatics", desc: "Udemy", tag: "Certification", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border" },
  { icon: GraduationCap, title: "Bioinformatics & AI", desc: "IIT Kharagpur", tag: "Certification", certificate: iitKgpCert, color: "text-purple-400 bg-purple-500/10 border-purple-500/20 border" },
];

export function Achievements() {
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
    <section id="achievements" className="pt-0 pb-4 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase">Achievements & Certifications</h2>
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
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={showAll 
                ? "w-full h-[340px] bg-[#0d0d0d] border border-border rounded-[2rem] p-4 flex flex-col"
                : "w-[85vw] md:w-[340px] h-[340px] flex-shrink-0 snap-center bg-[#0d0d0d] border border-border rounded-[2rem] p-4 flex flex-col"
              }
            >
              <div className="relative h-[220px] w-full flex-shrink-0 rounded-2xl overflow-hidden mb-4 group cursor-pointer bg-[#111] flex items-center justify-center">
                {it.certificate ? (
                  <img src={it.certificate} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                ) : (
                  <Icon className={`w-16 h-16 opacity-30 ${it.color.split(' ')[0]}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 leading-tight">{it.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-2">{it.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-auto px-1 pb-1">
                {it.certificate && (
                  <a href={it.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-white text-black hover:bg-gray-200 transition rounded-full text-sm font-semibold">
                    View <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <span className="flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] text-white transition rounded-full text-sm font-semibold border border-border">
                  {it.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
