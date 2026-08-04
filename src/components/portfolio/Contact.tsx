import { motion } from "framer-motion";
import { ArrowUpRight, Dna, Cloud, Code, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-4 px-6 md:px-12 max-w-3xl mx-auto mb-8">
      
      {/* Three vertical profile cards */}
      <div className="flex flex-col gap-4 mb-6">
        <motion.a 
          href="https://rosalind.info/users/tarulata_priya/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between bg-[#0d0d0d] border border-border rounded-2xl p-6 group hover:border-border/80 hover:bg-[#111] transition"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border">
              <Dna className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Rosalind</h3>
              <p className="text-sm text-muted-foreground">Bioinformatics Problem Solving</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.a 
          href="https://www.salesforce.com/trailblazer/gsr45duhuc9xrb7cb5" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between bg-[#0d0d0d] border border-border rounded-2xl p-6 group hover:border-border/80 hover:bg-[#111] transition"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border">
              <Cloud className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Salesforce</h3>
              <p className="text-sm text-muted-foreground">Cloud Computing & Trailblazer Profile</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.a 
          href="https://leetcode.com/u/taru_01/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between bg-[#0d0d0d] border border-border rounded-2xl p-6 group hover:border-border/80 hover:bg-[#111] transition"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border">
              <Code className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">LeetCode</h3>
              <p className="text-sm text-muted-foreground">Algorithmic Challenges</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/tarulata-priya-051423313/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between bg-[#0d0d0d] border border-border rounded-2xl p-6 group hover:border-border/80 hover:bg-[#111] transition"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border">
              <Linkedin className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Professional Network</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.a 
          href="https://github.com/Tarulatapriya" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between bg-[#0d0d0d] border border-border rounded-2xl p-6 group hover:border-border/80 hover:bg-[#111] transition"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border">
              <Github className="w-6 h-6 text-gray-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">GitHub</h3>
              <p className="text-sm text-muted-foreground">Code & Repositories</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#0d0d0d] border border-border rounded-[2rem] p-8 md:p-10"
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Let's work together</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">Open to select engagements, product collaborations, and creative residencies.</p>
        </div>
        
        <form action="https://formsubmit.co/tarulatapriya7@gmail.com" method="POST" className="space-y-5 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 ml-1">Name</label>
              <input type="text" name="name" required className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 ml-1">Email</label>
              <input type="email" name="email" required className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition" placeholder="jane@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2 ml-1">Message</label>
            <textarea name="message" rows={4} required className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition resize-none" placeholder="Tell me about your idea..."></textarea>
          </div>
          
          <input type="hidden" name="_subject" value="New contact from Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />
          
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-200 transition mt-2">
            Send Message
          </button>
        </form>
      </motion.div>
      
      <footer className="mt-12 text-center text-xs text-muted-foreground font-mono uppercase tracking-widest">
        <span>© 2026 · Tarulata Priya</span>
      </footer>
    </section>
  );
}
