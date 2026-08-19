import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import { SiMongodb, SiFastapi, SiScikitlearn } from "react-icons/si";

/* 3D Tilt Card — same component pattern used in Projects */
function TiltCard({ children, glow }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const lightX = useSpring(useTransform(mx, [-0.5, 0.5], [10, 90]), { stiffness: 200, damping: 26 });
  const lightY = useSpring(useTransform(my, [-0.5, 0.5], [10, 90]), { stiffness: 200, damping: 26 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      whileHover={{ boxShadow: `0 20px 60px ${glow}, 0 0 0 1px rgba(59,130,246,0.2)` }}
      className="relative rounded-2xl transition-shadow duration-300"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [lightX, lightY],
            ([x, y]) => `radial-gradient(280px circle at ${x}% ${y}%, rgba(59,130,246,0.10), transparent 70%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

const threatLensTech = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
];

const capabilities = [
  "Behavioral anomaly detection",
  "Multi-step attack-chain detection",
  "Privileged-user monitoring",
  "Off-hours / VPN anomaly flags",
  "SHAP explainability for SOC analysts",
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-[#080c15] overflow-hidden">
      {/* Glows — same family as other sections */}
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-blue-700/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold text-white">
            Achieve<span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">ments</span>
          </h2>
          <p className="mt-4 text-gray-500">Competing and building beyond the classroom</p>
        </motion.div>

        {/* Achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <TiltCard glow="rgba(59,130,246,0.22)">
            <div className="shine h-full bg-[#090d1a] border border-blue-900/40 rounded-2xl p-8 md:p-10">
              {/* Top row: badge + team */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <motion.span
                  initial={{ scale: 0.92, opacity: 0.7 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(59,130,246,0.7)" }}
                  className="achievement-sheen inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-blue-500/8 border border-blue-500/25 text-blue-400 text-sm font-mono"
                >
                  🏆 Top 32 — iDEA 2.0
                </motion.span>
                <span className="font-mono text-xs text-gray-500 tracking-wide">
                  Team Dhurandhars · 2026
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-1">
                Selected among the Top 32 teams from 1,500+ submissions in the national-level
                iDEA 2.0 Hackathon, presented by Union Bank of India in association with
                K. J. Somaiya College of Engineering.
              </p>

              <div className="h-px bg-blue-900/30 my-6" />

              {/* Project */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">ThreatLens</h3>
                  <p className="text-blue-400 text-sm font-semibold mt-1">
                    AI-Driven Early Warning System for Internal &amp; Privileged-User Fraud
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Built during the 24-hour iDEA 2.0 Grand Finale, ThreatLens detects suspicious
                insider activity in banking environments — flagging anomalous behavior,
                privileged-access misuse, and multi-step attack chains, then surfaces
                explainable results for SOC analysts to act on quickly.
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-6">
                {capabilities.map((cap) => (
                  <span key={cap} className="tag-chip cursor-default">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    {cap}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-4 mb-8">
                {threatLensTech.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-gray-500 text-xs">{tech.name}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/Janiyash"
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  border border-blue-800/50 text-blue-400 text-sm font-semibold
                  hover:bg-blue-600 hover:text-white hover:border-blue-600
                  transition-all duration-250"
              >
                <FaGithub className="text-base" />
                View Code
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}