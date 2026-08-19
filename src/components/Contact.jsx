import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const socials = [
  {
    icon: <MdEmail className="text-2xl" />,
    label: "Email",
    value: "janiyash0911@gmail.com",
    href: "mailto:janiyash0911@gmail.com",
    color: "blue",
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
    value: "linkedin.com/in/jani-yash/",
    href: "https://www.linkedin.com/in/jani-yash/",
    color: "blue",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    value: "github.com/janiyash",
    href: "https://github.com/janiyash",
    color: "gray",
  },
];

function InputField({ type = "text", name, placeholder, required, rows, label }) {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? "textarea" : "input";
  return (
    <div className="relative mb-5">
      <AnimatePresence>
        {focused && (
          <motion.label
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-5 left-0 text-[10px] text-blue-500 font-mono tracking-wider uppercase"
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>
      <Tag
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`input-glow w-full px-4 py-3.5 rounded-xl
          bg-[#06090f] text-white text-sm placeholder-gray-600
          border transition-all duration-250
          ${focused ? "border-blue-600/60 bg-[#07101d]" : "border-gray-800/60"}
          ${rows ? "resize-none" : ""}`}
      />
      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0 }}
        className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-blue-600 to-blue-400 origin-left"
      />
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_0uwm4no", "template_mw215dy", formRef.current, "k2xUBiZ_NwUwzlYrj")
      .then(
        () => { toast.success("Message sent! 🚀"); setLoading(false); formRef.current.reset(); },
        () => { toast.error("Something went wrong. Try again!"); setLoading(false); }
      );
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080c15] overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#06090f",
            color: "#E5E7EB",
            border: "1px solid rgba(59,130,246,0.3)",
            boxShadow: "0 0 30px rgba(59,130,246,0.15)",
            fontSize: "14px",
          },
        }}
      />

      {/* Glows */}
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-blue-700/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-800/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white">
            Get in <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="mt-4 text-gray-500">Let's connect and build something great together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Let's work together</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
              Whether you have a project in mind or just want to say hi — my inbox is always open. I'll get back to you as soon as I can.
            </p>

            <div className="space-y-6">
              {socials.map(({ icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 transition-all duration-200"
                >
                  <span className="p-3.5 rounded-xl bg-blue-900/20 border border-blue-900/40 text-blue-400
                    group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600
                    transition-all duration-250 flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">{value}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto text-gray-700 group-hover:text-blue-500 transition-colors">
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-5 rounded-xl border border-green-800/30 bg-green-900/8"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 text-sm font-semibold">Available for Internship</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currently seeking internship opportunities. Ready to contribute to exciting projects and grow professionally.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-[#06090f] border border-gray-800/50 rounded-2xl p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-blue-600" />
                Send a Message
              </h4>

              <InputField name="from_name" placeholder="Your Name" required label="Name" />
              <InputField type="email" name="from_email" placeholder="Your Email" required label="Email" />
              <InputField name="message" placeholder="Write your message..." required rows={5} label="Message" />

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                type="submit"
                className="shine w-full py-4 rounded-xl
                  bg-gradient-to-r from-blue-700 to-blue-500 text-white
                  text-sm font-semibold tracking-wide
                  shadow-[0_0_20px_rgba(37,99,235,0.25)]
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-shadow duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}