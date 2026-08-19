import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const progressRef = useRef(null);
  const ambientRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const ambient = ambientRef.current;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let glowX = 50, glowY = 50;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
      }
      // Ambient background glow follows the cursor with soft spring smoothing
      if (ambient && !isTouch && !reduceMotion) {
        const targetX = (mouseX / window.innerWidth) * 100;
        const targetY = (mouseY / window.innerHeight) * 100;
        glowX += (targetX - glowX) * 0.06;
        glowY += (targetY - glowY) * 0.06;
        ambient.style.setProperty("--mx", glowX + "%");
        ambient.style.setProperty("--my", glowY + "%");
      }
      raf = requestAnimationFrame(animateRing);
    };

    const onEnter = () => ring?.classList.add("hovered");
    const onLeave = () => ring?.classList.remove("hovered");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-hover]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(animateRing);

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / docHeight) * 100;
      if (progressRef.current) progressRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-[#0b0f19] text-slate-900 overflow-x-hidden">
      {/* Mouse-reactive ambient glow (desktop only, respects reduced motion) */}
      <div ref={ambientRef} className="ambient-glow hidden md:block" />

      {/* Custom cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 z-[99999] transition-all duration-100" ref={progressRef} style={{ width: "0%" }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}