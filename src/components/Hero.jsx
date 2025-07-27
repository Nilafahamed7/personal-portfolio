import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-300 dark:bg-gray-900"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
      >
        Hi, I’m Nilaf Ahamed
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
      >
        Full Stack Developer | React • Node • Express • MongoDB 
      </motion.p>

      <motion.div
        className="flex space-x-6 mb-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href="https://github.com/Nilafahamed7"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
        >
          <FaGithub />
        </a>
        <a
          href="http://linkedin.com/in/nilaf-ahamed-fullstackdeveloper"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:nilafiphone@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition duration-300"
      >
        View Projects
      </motion.a>
    </motion.section>
  )
}

export default Hero
