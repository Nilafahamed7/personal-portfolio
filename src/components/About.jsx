import React from "react"

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-gray-950 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
        Hi, I'm Nilaf Ahamed — a passionate Full Stack Developer with a strong foundation in Commerce and Computer Applications.
        I specialize in crafting responsive, scalable, and user-friendly web applications using modern technologies such as React, Node.js, Express, and MongoDB.
        Currently, I'm building real-world projects to refine my skills and actively exploring exciting opportunities to grow and contribute in the tech industry.


      </p>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Technologies I Use:</h3>

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
        ].map((tech) => (
          <span
            key={tech}
            className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
