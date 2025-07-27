import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDark = () => setDarkMode(!darkMode)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white dark:bg-gray-800 z-50"
    >
      <motion.div
        className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Nilaf Ahamed
      </motion.div>

      <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
        {["home", "about", "projects", "contact"].map((item, index) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={`#${item}`} className="hover:text-indigo-500 capitalize">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        {/* Resume Button */}
        <motion.a
          href="/Nilaf Ahamed FSW resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
        >
          Download Resume
        </motion.a>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDark}
          className="text-xl text-gray-700 dark:text-gray-200"
          whileTap={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
