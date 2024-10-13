import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EducationProps {
  darkMode: boolean
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <ScrollArea className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`space-y-4 ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <motion.h2 className="text-xl sm:text-2xl font-bold mb-4"
          initial={{ opacity: 0,y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Education
        </motion.h2>
        <motion.h3 className="text-lg sm:text-xl font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          University of California, Berkeley (EECS Department Honors)
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base"
        >
          B.A. in Computer Science, B.A. in Data Science (GPA: 3.87/4.00)
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base"
        >
          August 2021–May 2025
        </motion.p>
        <motion.h4 className="font-semibold mt-2 text-base sm:text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Coursework:
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm sm:text-base"
        >
          Efficient Algorithms & Intractable Problems, Data Structures, Machine Learning, Computer Security, Database Systems, Operating Systems, Computer Architecture, Discrete Math & Probability, Principles of Data Science, Computer Graphics, Deep Neural Networks
        </motion.p>
      </motion.div>
    </ScrollArea>
  )
}
