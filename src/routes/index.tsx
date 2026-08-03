import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Nav } from "@/components/portfolio/Nav";
import { Cursor } from "@/components/portfolio/Cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taru — Creative Engineer & Designer" },
      { name: "description", content: "Cinematic portfolio of Taru — a creative engineer crafting intelligent products, brand systems, and award-winning interfaces." },
      { property: "og:title", content: "Taru — Creative Engineer & Designer" },
      { property: "og:description", content: "Cinematic portfolio of Taru — a creative engineer crafting intelligent products, brand systems, and award-winning interfaces." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <SmoothScroll />
      <Cursor />
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
