import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProjectCard } from '../ProjectCard'
import { projectsData } from '../../data/projects'
import { Github } from "lucide-react"

interface ProjectsProps {
  darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
  return (
    <ScrollArea className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold">Projects</h2>
          <a
            href="https://github.com/rishiskhare"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <Github className="h-5 w-5 mr-2" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard item={item} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ScrollArea>
  )
}
