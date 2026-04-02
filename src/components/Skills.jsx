import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaGithub, FaPython, FaJava, FaPhp,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiPostgresql, SiVite, SiPostman,
  SiDjango, SiFlask, SiFastapi, SiPandas, SiNumpy, SiTypescript,
} from "react-icons/si";

const allSkillRows = [
  {
    title: "Frontend",
    num: "01",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400", bg: "rgba(34,211,238,0.08)" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", bg: "rgba(250,204,21,0.08)" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", bg: "rgba(59,130,246,0.08)" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400", bg: "rgba(56,189,248,0.08)" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", bg: "rgba(249,115,22,0.08)" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", bg: "rgba(59,130,246,0.08)" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400", bg: "rgba(192,132,252,0.08)" },
    ],
  },
  {
    title: "Backend",
    num: "02",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", bg: "rgba(34,197,94,0.08)" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300", bg: "rgba(156,163,175,0.08)" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", bg: "rgba(74,222,128,0.08)" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400", bg: "rgba(96,165,250,0.08)" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500", bg: "rgba(59,130,246,0.08)" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400", bg: "rgba(129,140,248,0.08)" },
    ],
  },
  {
    title: "Languages",
    num: "03",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-yellow-400", bg: "rgba(250,204,21,0.08)" },
      { name: "Java", icon: <FaJava />, color: "text-red-500", bg: "rgba(239,68,68,0.08)" },
      { name: "C", icon: <span className="font-black text-blue-400 text-sm">C</span>, color: "text-blue-400", bg: "rgba(96,165,250,0.08)" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", bg: "rgba(250,204,21,0.08)" },
    ],
  },
  {
    title: "Python Frameworks",
    num: "04",
    skills: [
      { name: "Django", icon: <SiDjango />, color: "text-green-400", bg: "rgba(74,222,128,0.08)" },
      { name: "Flask", icon: <SiFlask />, color: "text-gray-300", bg: "rgba(156,163,175,0.08)" },
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-400", bg: "rgba(45,212,191,0.08)" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-400", bg: "rgba(96,165,250,0.08)" },
      { name: "Pandas", icon: <SiPandas />, color: "text-indigo-400", bg: "rgba(129,140,248,0.08)" },
    ],
  },
  {
    title: "Tools",
    num: "05",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", bg: "rgba(249,115,22,0.08)" },
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-300", bg: "rgba(156,163,175,0.08)" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400", bg: "rgba(251,146,60,0.08)" },
      { name: "MVC", icon: <span className="font-black text-blue-400 text-xs">MVC</span>, color: "text-blue-400", bg: "rgba(96,165,250,0.08)" },
    ],
  },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="card-glow group flex items-center gap-3 px-5 py-3.5
        bg-[#0c1220] border border-gray-800/60 rounded-2xl
        hover:border-blue-800/60 cursor-default
        transition-colors duration-300"
    >
      <span
        className={`text-2xl ${skill.color} transition-transform duration-200 group-hover:scale-110`}
        style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
      >
        {skill.icon}
      </span>
      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* Marquee of all skill icons */
function SkillMarquee() {
  const all = allSkillRows.flatMap((r) => r.skills);
  const doubled = [...all, ...all];
  return (
    <div className="relative overflow-hidden py-6 mb-16 border-y border-blue-900/20">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0f19] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0f19] to-transparent z-10" />
      <div className="marquee-track flex gap-8 w-max">
        {doubled.map((s, i) => (
          <div key={i} className={`flex items-center gap-2 text-xl ${s.color} opacity-40 hover:opacity-80 transition-opacity`}
            style={{ flexShrink: 0 }}>
            {s.icon}
            <span className="text-gray-500 text-xs font-mono">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#080c15] overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-20 right-0 w-[450px] h-[450px] bg-blue-700/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-800/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >

          <h2 className="text-5xl font-extrabold text-white mt-2">
            Tech <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Stack</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base">Technologies and tools I work with professionally</p>
        </motion.div>

        {/* Marquee */}
        <SkillMarquee />

        {/* Skill rows */}
        <div className="space-y-12">
          {allSkillRows.map((row, ri) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, x: ri % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-blue-700">{row.num}</span>
                <h3 className="text-blue-400 font-bold text-lg">{row.title}</h3>
                <div className="flex-1 h-px bg-blue-900/30" />
              </div>
              <div className="flex flex-wrap gap-3">
                {row.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}