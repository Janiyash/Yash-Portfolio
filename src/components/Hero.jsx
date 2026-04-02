import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";

/* ── PARTICLE CANVAS ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.a += 0.005;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${0.2 + 0.3 * Math.abs(Math.sin(p.a))})`;
        ctx.fill();
      });
      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ── MAGNETIC BUTTON ── */
function MagneticBtn({ children, className, href, download }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      download={download}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center pt-32 md:pt-32 overflow-hidden
        bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#020617]
      "
    >
      <ParticleCanvas />

      {/* Ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-700/15 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/12 blur-3xl"
      />

      {/* Scan line */}
      <div className="scan-line" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-16 items-center w-full">
        {/* ── LEFT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-sm font-mono text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Full Stack Developer · Open to Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="leading-none font-black tracking-tight">
            <span className="block text-[58px] sm:text-[72px] md:text-[90px] lg:text-[100px] text-white">
              Yash
            </span>
            <span className="block text-[58px] sm:text-[72px] md:text-[90px] lg:text-[100px] glow-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-transparent bg-clip-text">
              Jani<span className="text-blue-400">.</span>
            </span>
          </motion.h1>

          {/* Typed role */}
          <motion.div variants={itemVariants} className="mt-5 font-mono text-base text-gray-400 flex items-center gap-2">
            <span className="text-blue-500">›</span>
            <TypeAnimation
              sequence={[
                "React Developer", 1800,
                "Node.js Engineer", 1800,
                "MERN Stack Dev", 1800,
                "Problem Solver", 1800,
              ]}
              speed={55}
              repeat={Infinity}
              className="text-gray-300"
            />
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="mt-6 text-gray-400 max-w-lg leading-relaxed text-[15px] md:text-base">
            I build fast, secure, and maintainable web applications with{" "}
            <span className="text-white font-semibold">React, Node.js</span>, and{" "}
            <span className="text-white font-semibold">modern backend architectures</span>{" "}
            that deliver real business value.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-4">
            <MagneticBtn
              href="#projects"
              className="shine relative px-8 py-3.5 rounded-xl font-semibold tracking-wide text-sm text-white
                bg-gradient-to-r from-blue-700 to-blue-500
                shadow-[0_0_25px_rgba(37,99,235,0.35)]
                hover:shadow-[0_0_40px_rgba(37,99,235,0.55)]
                transition-shadow duration-300 flex items-center gap-2"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticBtn>

            <MagneticBtn
              href="/Resume.pdf"
              download="Yash_Jani_Resume.pdf"
              className="px-8 py-3.5 rounded-xl font-semibold tracking-wide text-sm
                border border-blue-500/40 text-blue-400
                hover:bg-blue-500/8 hover:border-blue-400/60
                transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M3 9l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download CV
            </MagneticBtn>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-12 flex gap-8">
            {[
              { val: "MERN", label: "Stack" },
              { val: "8+", label: "Projects" },
              { val: "B.Tech", label: "IT 2027" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="text-blue-400 text-lg font-bold tracking-wide">{val}</p>
                <p className="text-gray-600 text-xs uppercase tracking-[0.15em] mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex justify-center mt-16 md:mt-0 relative"
        >
          <div className="relative flex justify-center items-center z-10 w-full max-w-[520px]">
            {/* Outer glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[110%] h-[110%] rounded-full bg-blue-500/10 blur-3xl"
            />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-50px] md:inset-[-65px] rounded-full border border-dashed border-blue-500/40"
            />

            {/* Counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-25px] md:inset-[-35px] rounded-full border border-blue-800/50"
            />

            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute inset-[-10px] rounded-full border-2 border-blue-500/30 backdrop-blur-sm"
            />

            {/* Profile image */}
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={Profile}
              alt="Yash Jani"
              className="relative z-10
                w-[280px] h-[280px]
                sm:w-[360px] sm:h-[360px]
                md:w-[440px] md:h-[440px]
                object-cover rounded-full
                border-2 border-blue-800/60
                hover:border-blue-500/80
                shadow-[0_0_80px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_120px_rgba(59,130,246,0.5)]
                transition-all duration-500"
            />

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="absolute -top-4 -left-4 sm:-left-8 md:-left-14
                bg-[#060b18]/90 border border-blue-900/60 backdrop-blur-xl
                p-3.5 rounded-xl shadow-2xl z-20 min-w-[140px]"
            >
              <div className="flex gap-1.5 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                <span className="text-blue-400">~/portfolio</span>
                <br />
                <span className="text-green-400">
                  <TypeAnimation sequence={[1200, "npm run dev"]} speed={55} cursor />
                </span>
              </p>
            </motion.div>

            {/* Code card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-10 -right-2 sm:-right-6 md:-right-12
                bg-[#060b18]/90 border border-blue-900/60 backdrop-blur-xl
                p-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.12)]
                z-20 min-w-[190px]"
            >
              <div className="text-[11px] font-mono leading-relaxed text-gray-400">
                <div><span className="text-purple-400">const</span> <span className="text-blue-300">Yash</span> <span className="text-gray-500">=</span> <span className="text-gray-500">{"{"}</span></div>
                <div>&nbsp;&nbsp;<span className="text-gray-400">name:</span> <span className="text-green-400">"Yash Jani"</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-gray-400">stack:</span> <span className="text-yellow-400">"MERN"</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-gray-400">open:</span> <span className="text-purple-400">true</span></div>
                <div><span className="text-gray-500">{"}"}</span><span className="text-gray-600">;</span></div>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="absolute top-8 -right-2 sm:-right-6
                bg-green-500/10 border border-green-500/30
                text-green-400 text-[10px] font-mono
                px-3 py-1.5 rounded-full z-20 backdrop-blur-sm
                flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}