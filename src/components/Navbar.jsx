import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-blue-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          className="relative text-xl font-extrabold tracking-wider text-white cursor-pointer flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse" />
          <span className="text-blue-400">Yash</span>
          <span className="text-white">Jani</span>
          <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-500 to-transparent" />
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item, i) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
              >

                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="shine px-5 py-2 rounded-lg text-sm font-semibold tracking-wide
              bg-gradient-to-r from-blue-700 to-blue-500 text-white
              shadow-[0_0_20px_rgba(59,130,246,0.3)]
              hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow duration-300"
          >
            Hire Me
          </motion.a>
        </div>

        {/* MOBILE TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-lg border border-blue-800/50 flex items-center justify-center text-white text-xl bg-blue-950/30"
        >
          {open ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[#060a12]/98 backdrop-blur-xl border-t border-blue-900/20"
      >
        <div className="flex flex-col px-6 py-6 space-y-5">
          {links.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: open ? 0 : -20, opacity: open ? 1 : 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-gray-300 text-lg font-medium hover:text-blue-400 transition-colors"
            >
              <span className="font-mono text-blue-600 text-xs">0{i + 1}.</span>
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}