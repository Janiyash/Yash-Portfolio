import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0uwm4no",
        "template_mw215dy",
        formRef.current,
        "k2xUBiZ_NwUwzlYrj"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          toast.error("Something went wrong. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0B0F19] overflow-hidden"
    >
      {/* TOAST */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#E5E7EB",
            border: "1px solid rgba(59,130,246,0.4)",
            boxShadow: "0 0 25px rgba(59,130,246,0.25)",
          },
        }}
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Let’s connect and build something great together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <span className="inline-block mb-6 px-6 py-2 rounded-full
              bg-blue-600/20 text-blue-400 border border-blue-500/30
              text-base font-semibold">
              Get in Touch
            </span>

            {/* EMAIL */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-5 transition cursor-pointer"
            >
              <span className="
                p-4 rounded-xl
                bg-blue-600/20
                text-blue-400
                group-hover:bg-blue-600/30
                group-hover:text-blue-300
                transition
              ">
                <MdEmail className="text-3xl" />
              </span>

              <div className="flex flex-col">
                <p className="text-lg text-white/80 group-hover:text-blue-400 transition">
                  Email
                </p>
                <a
                  href="mailto:janiyash0911@gmail.com"
                  className="text-xl text-white font-medium group-hover:text-blue-400 transition"
                >
                  janiyash0911@gmail.com
                </a>
              </div>
            </motion.div>

            {/* LINKEDIN */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-5 transition cursor-pointer"
            >
              <span className="
                p-4 rounded-xl
                bg-blue-600/20
                text-blue-400
                group-hover:bg-blue-600/30
                group-hover:text-blue-300
                transition
              ">
                <FaLinkedin className="text-3xl" />
              </span>

              <div>
                <p className="text-lg text-white/80 group-hover:text-blue-400 transition">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/jani-yash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white font-medium group-hover:text-blue-400 transition"
                >
                  linkedin.com/in/jani-yash/
                </a>
              </div>
            </motion.div>

            {/* GITHUB */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-5 transition cursor-pointer"
            >
              <span className="
                p-4 rounded-xl
                bg-blue-600/20
                text-blue-400
                group-hover:bg-blue-600/30
                group-hover:text-blue-300
                transition
              ">
                <FaGithub className="text-3xl" />
              </span>

              <div>
                <p className="text-lg text-white/80 group-hover:text-blue-400 transition">
                  GitHub
                </p>
                <a
                  href="https://github.com/janiyash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white font-medium group-hover:text-blue-400 transition"
                >
                  github.com/janiyash
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#020617] border border-blue-500/20 rounded-2xl p-10 shadow-xl"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full mb-6 px-4 py-3 rounded-xl bg-[#0B0F19] text-white border border-blue-500/30"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full mb-6 px-4 py-3 rounded-xl bg-[#0B0F19] text-white border border-blue-500/30"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full mb-6 px-4 py-3 rounded-xl bg-[#0B0F19] text-white border border-blue-500/30 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
