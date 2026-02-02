import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 w-full z-50
        bg-[#0B0F19]/80 backdrop-blur
        border-b border-blue-400
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-wide text-white cursor-pointer"
        >
          <span className="text-blue-500">Yash Jani</span>
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                relative text-gray-300 font-medium
                hover:text-blue-400 transition
                group
              "
            >
              {item}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-blue-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="
            md:hidden
            bg-[#020617]
            border-t border-blue-500/30
          "
        >
          <div className="flex flex-col px-6 py-6 space-y-6">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  relative text-gray-300 text-lg font-medium
                  hover:text-blue-400 transition
                  group
                "
              >
                {item}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-blue-500
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
