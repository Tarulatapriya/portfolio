import { motion } from "framer-motion";
import { Home, User, Briefcase, Trophy, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(it.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)]">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-colors"
              aria-label={it.label}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-foreground/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10 hidden sm:inline">{it.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
