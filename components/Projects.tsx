import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { Item, ItemType } from '../types/types'

interface ProjectsProps {
  scrollY: number
  isDarkMode: boolean
  openModal: (item: Item, type: ItemType) => void
}

export default function Projects({ scrollY, isDarkMode, openModal }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrollY > 1000 ? 1 : 0, y: scrollY > 1000 ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg cursor-pointer ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => openModal(project, 'project')}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}