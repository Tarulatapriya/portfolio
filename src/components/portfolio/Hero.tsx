import { Github, Linkedin, Dna, Cloud, Code, Terminal, Database, Globe, Brain, Layers, LayoutTemplate, Box, Server, Cpu, Mail, FileText } from "lucide-react";
import portrait from "@/assets/taru photo.jpeg";
import resumeUrl from "@/assets/TARULATA_PRIYA_RESUME copy.pdf";

const skills = [
  { name: "C++", color: "border-blue-500/30 text-blue-400 bg-blue-500/10", icon: Code },
  { name: "Rust", color: "border-orange-500/30 text-orange-400 bg-orange-500/10", icon: Terminal },
  { name: "React", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10", icon: Globe },
  { name: "TypeScript", color: "border-blue-600/30 text-blue-400 bg-blue-600/10", icon: Code },
  { name: "Node.js", color: "border-green-500/30 text-green-400 bg-green-500/10", icon: Server },
  { name: "PostgreSQL", color: "border-blue-400/30 text-blue-300 bg-blue-400/10", icon: Database },
  { name: "Next.js", color: "border-white/30 text-white bg-white/10", icon: Globe },
  { name: "Tailwind CSS", color: "border-sky-400/30 text-sky-300 bg-sky-400/10", icon: LayoutTemplate },
  { name: "Docker", color: "border-yellow-500/30 text-yellow-500 bg-yellow-500/10", icon: Box },
  { name: "PyTorch", color: "border-red-500/30 text-red-400 bg-red-500/10", icon: Brain },
  { name: "LangChain", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10", icon: Layers },
  { name: "Solidity", color: "border-gray-400/30 text-gray-300 bg-gray-400/10", icon: Cpu },
];

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-4 px-6 md:px-12 max-w-3xl mx-auto flex flex-col items-center">
      {/* Portrait & Socials */}
      <div className="flex flex-col items-center mb-4 w-full">
        <div className="w-56 h-64 md:w-64 md:h-72 rounded-[2rem] overflow-hidden mb-4 border border-border bg-card">
          <img src={portrait} alt="Tarulata Priya" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 w-full max-w-md">
          {[
            { Icon: Github, href: "https://github.com/Tarulatapriya" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/tarulata-priya-051423313/" },
            { Icon: Dna, href: "https://rosalind.info/users/tarulata_priya/" },
            { Icon: Code, href: "https://leetcode.com/u/taru_01/" },
            { Icon: Cloud, href: "https://www.salesforce.com/trailblazer/gsr45duhuc9xrb7cb5" },
            { Icon: Mail, href: "mailto:tarulatapriya7@gmail.com" },
            { Icon: FileText, href: resumeUrl }
          ].map((s, i) => {
            const Icon = s.Icon;
            return (
              <a 
                key={i} 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-[#0d0d0d] rounded-full hover:bg-white hover:text-black transition text-muted-foreground border border-border"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full bg-[#0d0d0d] border border-border rounded-[2rem] p-8 md:p-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">Tarulata</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          <span className="text-primary font-medium">Creative Engineer & AI Tinkerer</span> based in India with <span className="text-yellow-500 font-medium">2+ years</span> of experience building intelligent solutions at the intersection of biotechnology and technology. Passionate about <span className="text-emerald-400 font-medium">Machine Learning</span> and <span className="text-accent font-medium">modern software development</span>.
        </p>

        <div>
          <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 font-bold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${s.color} text-sm font-medium transition hover:scale-105 cursor-default`}>
                  <Icon className="w-4 h-4" />
                  {s.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
