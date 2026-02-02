import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiVite,
  SiPostman,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#0B0F19] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold text-blue-500">
            Skills
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* FRONTEND */}
        <SkillRow
          title="Frontend"
          skills={[
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Vite", icon: <SiVite className="text-purple-400" /> },
          ]}
        />

        {/* BACKEND */}
        <SkillRow
          title="Backend"
          skills={[
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
            { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
          ]}
        />

        {/* LANGUAGES */}
        <SkillRow
          title="Languages"
          skills={[
            { name: "Python", icon: <FaPython className="text-yellow-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "C", icon: <span className="text-blue-400 font-bold">C</span> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          ]}
        />

        {/* PYTHON */}
        <SkillRow
          title="Python Libraries & Frameworks"
          skills={[
            { name: "Django", icon: <SiDjango className="text-green-400" /> },
            { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
            { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
            { name: "Pandas", icon: <SiPandas className="text-indigo-400" /> },
          ]}
        />

        {/* TOOLS */}
        <SkillRow
          title="Tools & Practices"
          skills={[
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
            { name: "MVC Architecture", icon: <span className="text-blue-400 font-bold">MVC</span> },
          ]}
        />

      </div>
    </section>
  );
}

/* REUSABLE ROW */
function SkillRow({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <h3 className="text-2xl font-bold text-blue-400 mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              flex items-center gap-3
              text-gray-300 text-xl
              hover:text-blue-400
              transition
              cursor-default
            "
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
