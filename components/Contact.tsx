import { motion } from 'framer-motion'

interface ContactProps {
  scrollY: number
  isDarkMode: boolean
}

export default function Contact({ scrollY, isDarkMode }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrollY > 1500 ? 1 : 0, y: scrollY > 1500 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-8 font-light">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        <a
          href="mailto:rishi.khare@berkeley.edu"
          className={`px-8 py-3 rounded-full font-semibold transition-colors text-sm ${
            isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}