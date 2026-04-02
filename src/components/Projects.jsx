import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiReact,
  SiVercel,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiPhp,
  SiNextdotjs,
  SiStripe,
  SiSupabase
} from "react-icons/si";

const projects = [
  {
    title: "SaaS Platform",
    tag: "SaaS / Subscription Platform",
    num: "01",
    description: "A scalable SaaS-based web application built with TypeScript, featuring authentication, dashboards, and a clean, maintainable architecture using Prisma ORM.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    github: "https://github.com/Janiyash/meterly-saas",
    // accent: "from-red-600/10 to-red-600/5",
    border: "hover:border-red-500/50",
    glow: "rgba(239, 68, 68, 0.25)",
  },
  {
    title: "KARM Services Platform",
    tag: "Service Platform",
    num: "02",
    description: "A service-based platform with booking management, user handling, and automated email integration to streamline service requests and communication.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    github: "https://github.com/Janiyash/karma-services",
    // accent: "from-yellow-600/10 to-orange-600/5",
    border: "hover:border-yellow-600/40",
    glow: "rgba(234,179,8,0.12)",
  },
  {
    title: "Mithai-Ghar",
    tag: "E-commerce",
    num: "03",
    description: "A modern sweets & Namkeens shop web app showcasing traditional Indian mithai with an elegant UI, smooth browsing, product listings, and responsive design.",
    tech: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js / Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    github: "https://github.com/Janiyash/mithai-ghar",
    // accent: "from-teal-600/10 to-green-600/5",
    border: "hover:border-teal-600/40",
    glow: "rgba(20,184,166,0.12)",
  },
  {
    title: "Artify Gallery",
    tag: "Web App",
    num: "04",
    description: "A dynamic art gallery application built using PHP and MySQL, featuring email integration via PHPMailer and a responsive, user-friendly interface.",
    tech: [
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PHPMailer", icon: <MdEmail className="text-blue-400" /> },
    ],
    github: "https://github.com/Janiyash/Art-gallery-Management-System-",
    // accent: "from-purple-600/10 to-pink-600/5",
    border: "hover:border-purple-600/40",
    glow: "rgba(168,85,247,0.12)",
  },
  {
  title: "GolfCharity Platform",
  tag: "SaaS / Subscription Platform",
  num: "05",
  description: "A premium golf-based subscription platform where users track scores, enter monthly prize draws, and contribute to charity. Features Stripe subscription billing, real-time dashboard updates, performance analytics, and automated webhook-driven backend processing.",
  tech: [
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Stripe", icon: <SiStripe className="text-purple-400" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  github: "https://github.com/Janiyash/golf-saas",
  // accent: "from-red-600/10 to-red-600/5",
border: "hover:border-red-500/50",
glow: "rgba(239, 68, 68, 0.25)",
}
];
const tagColors = {
  "Web App": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Service Platform": "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  "E-commerce": "bg-green-500/10 text-green-400 border border-green-500/20",
  "SaaS / Subscription Platform": "bg-red-500/10 text-red-400 border border-red-500/20"
};
/* 3D Tilt Card */
function TiltCard({ children, glow }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

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
      className="rounded-2xl transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-[#0b0f19] overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-24 left-0 w-[450px] h-[450px] bg-blue-700/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />
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
            My <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500">Real-world applications built with modern technologies</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <TiltCard glow={project.glow}>
                <div
                  className={`h-full shine bg-[#090d1a] border border-gray-800/50 rounded-2xl p-7 flex flex-col
                    transition-all duration-400 ${project.border}
                    bg-gradient-to-br ${project.accent}`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="font-mono text-[19px] text-blue-700 tracking-wider">{project.num}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full 
                        ${tagColors[project.tag] || "bg-gray-500/10 text-gray-400 border border-gray-500/20"}`}
                      >
                        {project.tag}
                      </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-gray-500 text-xs">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                      border border-blue-800/50 text-blue-400 text-sm font-semibold
                      hover:bg-blue-600 hover:text-white hover:border-blue-600
                      transition-all duration-250 self-start"
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Janiyash"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="shine inline-flex items-center gap-3 px-10 py-4 rounded-full
              bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-semibold
              shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-shadow duration-300"
          >
            <FaGithub className="text-xl" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}