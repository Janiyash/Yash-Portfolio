import { motion } from "framer-motion";
import Profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden
        bg-gradient-to-br from-[#0B0F19] via-[#0F172A] to-[#020617]
      "
    >
      {/* ELECTRIC BLUE GLOWS (RESPONSIVE) */}
      <div className="
        absolute -top-32 -left-32
        w-[300px] h-[300px]
        md:w-[600px] md:h-[600px]
        bg-blue-600/20 rounded-full blur-3xl
      "></div>

      <div className="
        absolute bottom-0 right-0
        w-[260px] h-[260px]
        md:w-[500px] md:h-[500px]
        bg-blue-500/20 rounded-full blur-3xl
      "></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="
            inline-block mb-6 px-6 py-2 rounded-full
            bg-blue-600/20 text-blue-400 border border-blue-500/30
            text-sm md:text-base font-semibold
          ">
            Full Stack Developer
          </span>

          <h1 className="
            text-4xl sm:text-5xl md:text-6xl font-extrabold
            leading-tight text-white
          ">
            Hi, I’m <span className="text-blue-500">Yash</span>
            <br />
            I design and build{" "}
            <span className="
              text-blue-500
              text-5xl sm:text-6xl md:text-6xl
              block
            ">
              scalable web applications
            </span>
          </h1>

          <p className="
            mt-6 md:mt-8
            text-lg sm:text-xl md:text-2xl
            text-gray-400 max-w-2xl leading-relaxed
          ">
            I’m a Full Stack Developer focused on creating fast, secure, and
            maintainable web applications using
            <span className="text-blue-400 font-semibold"> React</span>,
            <span className="text-blue-400 font-semibold"> Node.js</span>, and
            modern backend architectures that deliver real business value.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="
                bg-blue-600 text-white px-7 py-3 md:px-8 md:py-4
                rounded-2xl text-base md:text-lg
                font-semibold shadow-xl
                hover:bg-blue-700 transition
              "
            >
              View Projects
            </a>

            <a
              href="/Resume.pdf"
              download="Yash_Jani_Resume.pdf"
              className="
                border border-blue-500 text-blue-400
                px-7 py-3 md:px-8 md:py-4
                rounded-2xl text-base md:text-lg
                font-semibold
                hover:bg-blue-600 hover:text-white transition
              "
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center  md:mt-0"
        >
          <div className="relative group">
            {/* GLOW RING */}
            <div className="
              absolute -inset-4 rounded-full
              bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400
              opacity-60 group-hover:opacity-100
              blur transition duration-500
            "></div>

            <img
              src={Profile}
              alt="Profile"
              className="
                relative
                w-64 h-64
                sm:w-72 sm:h-72
                md:w-96 md:h-96
                object-cover rounded-full shadow-2xl
                transform transition-all duration-500
                group-hover:scale-105
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
