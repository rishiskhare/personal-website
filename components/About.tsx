import { motion } from 'framer-motion'

interface AboutProps {
  scrollY: number
}

export default function About({ scrollY }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0, y: scrollY > 100 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-6 font-light">
          I&apos;m a passionate Computer Science and Data Science student at UC Berkeley, with a keen interest in machine
          learning and AI security. My journey in tech has led me to exciting opportunities in
          research, internships, and project development.
        </p>
        <p className="text-lg font-light">
          When I&apos;m not coding, you can find me volunteering, solving Rubik&apos;s cubes and algorithmic problems, or tinkering on innovative
          projects that excite me to create.
        </p>
      </motion.div>
    </section>
  )
}