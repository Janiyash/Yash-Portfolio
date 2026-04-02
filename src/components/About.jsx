import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ── ANIMATED COUNTER ── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const timelineData = [
  {
    year: "2021–2022",
    title: "High School",
    subtitle: "Shreyas Vidhyalaya",
    description: "Completed secondary education in the Science stream with a strong academic foundation and active involvement in extracurricular activities.",
    icon: "🏫",
  },
  {
    year: "2023–2027",
    title: "University",
    subtitle: "ITM (SLS) Baroda University",
    description: "Pursuing B.Tech in Computer Science & Engineering with a focus on full-stack development, problem-solving, and modern web technologies.",
    icon: "🎓",
  },
  {
    year: "Now",
    title: "Internship",
    subtitle: "Actively Seeking Opportunities",
    description: "Looking for internship opportunities to apply my MERN stack skills in real-world projects and gain hands-on industry experience.",
    icon: "🚀",
  },
];

const stats = [
  { val: 8, suffix: "+", label: "Projects Built" },
  { val: 2, suffix: "+", label: "Years Coding" },
  { val: 15, suffix: "+", label: "Technologies" },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
        <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#0B0F19]"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"></div>
      {/* Glows */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-gray-600 text-sm tracking-widest uppercase">Background</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ── LEFT: TIMELINE ── */}
          <div className="relative mt-2">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
              className="absolute left-[33px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500 via-blue-800/50 to-transparent"
            />

            {timelineData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="relative mb-3 pl-20 cursor-pointer group"
                >
                  {/* Dot */}
                  <motion.span
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      backgroundColor: isActive ? "rgb(59,130,246)" : "rgb(11,15,25)",
                    }}
                    className={`absolute left-[26px] top-7 w-4 h-4 rounded-full z-10 flex items-center justify-center
                      transition-shadow duration-300 border-2
                      ${isActive ? "border-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.7)]" : "border-slate-700 group-hover:border-slate-500"}`}
                  >
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                      />
                    )}
                  </motion.span>

                  {/* Card */}
                  <motion.div
                    animate={{ borderLeftColor: isActive ? "rgb(59,130,246)" : "transparent" }}
                    className={`rounded-xl p-5 transition-all duration-300 border border-l-2
                      ${isActive
                        ? "bg-[#090e1c] border-blue-900/60 shadow-[0_8px_40px_rgba(59,130,246,0.08)]"
                        : "bg-transparent border-transparent hover:bg-[#090e1c]/50"}`}
                  >
                    <span className="block text-blue-500 text-[11px] tracking-[0.25em] font-mono mb-1.5 uppercase">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-white" : "text-gray-300"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-gray-500 mt-1">{item.subtitle}</p>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 pt-4 border-t border-slate-800/60 text-gray-400 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 pl-4 grid grid-cols-3 gap-4"
            >
              {stats.map(({ val, suffix, label }) => (
                <div key={label} className="text-center py-4 px-2 rounded-xl bg-blue-900/10 border border-blue-900/20">
                  <p className="text-2xl font-black text-blue-400">
                    <Counter target={val} suffix={suffix} />
                  </p>
                  <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              About <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Me</span>
            </h2>

            <p className="text-blue-400 font-semibold text-lg mb-6">Full Stack Developer (MERN & Modern Web)</p>

            <p className="text-gray-400 leading-relaxed mb-5">
              I'm a <span className="text-white font-semibold">Full Stack Developer</span> who builds scalable, secure, and high-performance web applications. I enjoy working across the entire stack — from crafting clean, responsive user interfaces to designing robust backend systems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              My primary focus is on the <span className="text-blue-400 font-semibold">MERN stack</span>, where I build real-world applications using React, Node.js, Express, and MongoDB. I care deeply about clean architecture, performance optimization, and delivering a smooth user experience.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Full Stack Developer", "MERN Stack", "Backend APIs", "React", "Clean Code"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.06, borderColor: "rgba(59,130,246,0.6)" }}
                  className="tag-chip cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* What I do */}
            <div className="space-y-3">
              {[
                { icon: "⚡", text: "Build performant full-stack web apps" },
                { icon: "🛡️", text: "Implement secure auth & REST APIs" },
                { icon: "🎨", text: "Craft responsive, accessible UIs" },
                { icon: "🔧", text: "Write clean, maintainable code" },
              ].map(({ icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 text-gray-400 text-sm"
                >
                  <span className="text-base">{icon}</span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}