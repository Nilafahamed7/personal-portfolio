import React from "react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-slate-950 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        variants={fadeIn}
        className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto"
      >
        Have a question or want to work together? Fill out the form and I'll get back to you soon!
      </motion.p>

      <motion.form
        variants={fadeIn}
        action="https://formspree.io/f/manboagg"
        method="POST"
        className="max-w-2xl mx-auto space-y-6"
      >
        <motion.input
          variants={fadeIn}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <motion.input
          variants={fadeIn}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <motion.input
          variants={fadeIn}
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          pattern="[0-9]{10,15}"
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <motion.textarea
          variants={fadeIn}
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        ></motion.textarea>

        <motion.button
          variants={fadeIn}
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  )
}

export default Contact
