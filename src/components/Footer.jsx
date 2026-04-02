import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer=()=>(
<footer className="relative border-t border-blue-900/30 py-8 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

    {/* LEFT TEXT */}
    <p className="text-gray-500 text-sm font-mono tracking-widest text-center md:text-left">
      © 2026 <span className="text-blue-500 font-semibold">Yash Jani</span> · Built with{" "}
      <span className="text-white">React</span> &{" "}
      <span className="text-blue-400">Tailwind</span>
    </p>

    {/* RIGHT SOCIAL ICONS */}
    <div className="flex items-center gap-5">

      {/* GitHub */}
      <a
        href="https://github.com/janiyash"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaGithub className="text-gray-400 text-xl transition-all duration-300 group-hover:text-white group-hover:scale-110" />
        <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 bg-blue-500 transition duration-300"></span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jani-yash/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <FaLinkedin className="text-gray-400 text-xl transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" />
        <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 bg-blue-500 transition duration-300"></span>
      </a>

      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="group relative"
      >
        <MdEmail className="text-gray-400 text-xl transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" />
        <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 bg-green-500 transition duration-300"></span>
      </a>

    </div>
  </div>
</footer>

);
export default Footer;