import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#0B0F19]"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE – EDUCATION TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-500/30"></div>

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mb-16 pl-16"
          >
            <span className="absolute left-[18px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></span>

            <div className="bg-[#020617] border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-bold text-white">High School</h3>
              <p className="text-blue-400 font-medium mt-1">
                Shreyas Vidhyalaya (2021 – 2022)
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Completed secondary education in the Science stream with a strong
                academic foundation and active involvement in extracurricular activities.

              </p>
            </div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative mb-16 pl-16"
          >
            <span className="absolute left-[18px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></span>

            <div className="bg-[#020617] border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-bold text-white">University</h3>
              <p className="text-blue-400 font-medium mt-1">
                ITM (SLS) Baroda University (2023 – 2027)
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Pursuing B.Tech in Computer Science & Engineering with a focus on
                full-stack development, problem-solving, and modern web
                technologies.
              </p>
            </div>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-16"
          >
            <span className="absolute left-[18px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></span>

            <div className="bg-[#020617] border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-bold text-white">Internship</h3>
              <p className="text-blue-400 font-medium mt-1">
                Actively Seeking Opportunities
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Looking for internship opportunities to apply my MERN stack
                skills in real-world projects and gain hands-on industry
                experience.
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT CONTENT (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
            Full Stack Developer (MERN & Modern Web)
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-5">
            I’m a <span className="text-white font-semibold">Full Stack Developer</span> who builds
            scalable, secure, and high-performance web applications. I enjoy
            working across the entire stack — from crafting clean, responsive
            user interfaces to designing robust backend systems.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
            My primary focus is on the <span className="text-blue-400 font-semibold">MERN stack</span>,
            where I build real-world applications using React, Node.js,
            Express, and MongoDB. I care deeply about clean architecture,
            performance optimization, and delivering a smooth user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              "Full Stack Developer",
              "MERN Stack",
              "Backend APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-5 py-2 rounded-full
                  border border-blue-500/40
                  text-blue-400 text-sm md:text-base
                  font-medium
                  hover:bg-blue-600/10 transition
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
