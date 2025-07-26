import React from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-slate-950 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Contact Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
        Have a question or want to work together? Fill out the form and I'll get back to you soon!
      </p>

      <form
        action="https://formspree.io/f/manboagg"
        method="POST"
        className="max-w-2xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          pattern="[0-9]{10,15}"
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
