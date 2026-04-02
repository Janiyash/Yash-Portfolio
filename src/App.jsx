import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
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
      <Contact />
      <Footer />
    </div>
  );
}
