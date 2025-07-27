import React from "react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-300 dark:bg-gray-900 py-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeInUp}
    >
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Nilaf Ahamed. All rights reserved.
      </p>

      <a
        href="#home"
        className="text-indigo-600 dark:text-indigo-400 hover:underline mt-2 block"
      >
        Back to Top ↑
      </a>
    </motion.footer>
  )
}

export default Footer
