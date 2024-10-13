import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChevronUp, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ExperienceItem } from '../types'

interface ExperienceCardProps {
  item: ExperienceItem
  darkMode: boolean
}

export function ExperienceCard({ item, darkMode }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card 
      className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} transition-colors duration-200 cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        <CardTitle className="text-base sm:text-lg leading-tight mb-2 flex justify-between items-center">
          {item.company}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm leading-snug">{item.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs mb-2">{item.period}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="list-disc list-inside text-xs sm:text-sm space-y-2 mt-2"
            >
              {item.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {detail}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
