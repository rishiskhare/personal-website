import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExperienceCard } from '../ExperienceCard'
import { experienceData } from '../../data/experience'

interface ExperienceProps {
  darkMode: boolean
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <ScrollArea className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 className="text-xl sm:text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-1 gap-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ExperienceCard item={item} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ScrollArea>
  )
}
