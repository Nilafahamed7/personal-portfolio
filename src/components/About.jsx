import React from "react"
import { motion } from "framer-motion"

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-950 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8"
      >
        Hey there! I’m Nilaf Ahamed, a Full Stack Developer who loves transforming ideas into powerful digital experiences. From sleek frontends to robust backend systems, I enjoy working across the stack with tools like React, Node.js, Express, and MongoDB. I’m constantly learning through hands-on projects and collaborations, and I’m excited to take on new challenges that help me grow as a developer.
      </motion.p>

      <motion.h3
        variants={fadeUp}
        className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
      >
        Technologies I Use:
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-3">
        {[
          "React",
          "Vite",
          "TailwindCSS",
          "JavaScript",
          "HTML",
          "CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "GitHub",
          "vercel",
          "render"
        ].map((tech, index) => (
          <motion.span
            key={tech}
            variants={fadeUp}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}

export default About
