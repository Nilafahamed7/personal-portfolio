import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDark = () => setDarkMode(!darkMode)

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white dark:bg-gray-800 z-50">
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Nilaf Ahamed
      </div>

      <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
        <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
        <li><a href="#about" className="hover:text-indigo-500">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        {/* Resume Button */}
        <a href="/Nilaf Ahamed FSW resume.pdf"
          download
          className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200">
          Download Resume
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          className="text-xl text-gray-700 dark:text-gray-200"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
