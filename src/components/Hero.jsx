import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-300 dark:bg-gray-900"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
        Hi, I’m Nilaf Ahamed
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
        Full Stack Developer | React • Node • Express • MongoDB 
      </p>

      <div className="flex space-x-6 mb-6 text-2xl">
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
      </div>

      <a
        href="#projects"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition duration-300"
      >
        View Projects
      </a>
    </section>
  )
}

export default Hero
