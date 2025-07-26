import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div className="font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
