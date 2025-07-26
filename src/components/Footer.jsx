import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 py-6 text-center">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Nilaf Ahamed. All rights reserved.
      </p>

      <a
        href="#home"
        className="text-indigo-600 dark:text-indigo-400 hover:underline mt-2 block"
      >
        Back to Top ↑
      </a>
    </footer>
  )
}

export default Footer
