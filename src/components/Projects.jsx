import React from "react"
import { motion } from "framer-motion"
import projects from "../components/data"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 px-4 bg-gray-300 dark:bg-gray-900 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white bg-gray-700 px-3 py-1 rounded hover:bg-gray-900"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-800"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects
