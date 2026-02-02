import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiPhp,
} from "react-icons/si";

const projects = [
  {
    title: "SaaS Platform",
    description:
      "A scalable SaaS-based web application built with TypeScript, featuring authentication, dashboards, and a clean, maintainable architecture using Prisma ORM.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    github: "https://github.com/Janiyash/meterly-saas",
  },
  {
    title: "KARM Services Platform",
    description:
      "A service-based platform with booking management, user handling, and automated email integration to streamline service requests and communication.",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    github: "https://github.com/Janiyash/karma-services",
  },
  {
    title: "Artify Gallery",
    description:
      "A dynamic art gallery application built using PHP and MySQL, featuring email integration using PHPMailer and a responsive, user-friendly interface.",
    tech: [
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "PHPMailer", icon: <MdEmail className="text-blue-400" /> },
    ],
    github: "https://github.com/Janiyash/Art-gallery-Management-System-",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#0B0F19] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-24 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold text-white">
             My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Real-world applications I’ve built using modern technologies
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
                bg-[#020617]
                border border-blue-500/20
                rounded-2xl
                p-8
                shadow-xl
                hover:shadow-blue-500/20
                transition
              "
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.tech.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 text-gray-300 text-lg"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  px-6 py-3
                  rounded-xl
                  border border-blue-500
                  text-blue-400
                  font-semibold
                  hover:bg-blue-600
                  hover:text-white
                  transition
                "
              >
                <FaGithub className="text-xl" />
                View Code
              </a>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL PROJECTS */}
        <div className="text-center">
          <a
            href="https://github.com/Janiyash"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              px-10 py-4
              rounded-full
              bg-blue-600
              text-white
              text-lg
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            <FaGithub className="text-2xl" />
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
