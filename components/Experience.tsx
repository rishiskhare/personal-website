import { motion } from 'framer-motion'
import { experiences } from '../data/experiences'
import { Item, ItemType } from '../types/types'

interface ExperienceProps {
  scrollY: number
  isDarkMode: boolean
  openModal: (item: Item, type: ItemType) => void
}

export default function Experience({ scrollY, isDarkMode, openModal }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrollY > 500 ? 1 : 0, y: scrollY > 500 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => openModal(job, 'experience')}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className={`mb-2 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.company}</p>
              <p className={`text-sm font-light ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{job.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}