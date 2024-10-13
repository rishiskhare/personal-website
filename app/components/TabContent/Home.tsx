import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, HelpCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface HomeProps {
  darkMode: boolean
  animatedText: string
  handleTabChange: (value: string) => void
  setShowDinoGame: (show: boolean) => void
}

export default function Home({ darkMode, animatedText, handleTabChange, setShowDinoGame }: HomeProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
        <motion.h1 
          className="text-3xl sm:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-500">R</span>
          <span className="text-red-500">i</span>
          <span className="text-yellow-500">s</span>
          <span className="text-blue-500">h</span>
          <span className="text-green-500">i</span>
          <span className="ml-2 sm:ml-4 text-red-500">K</span>
          <span className="text-yellow-500">h</span>
          <span className="text-blue-500">a</span>
          <span className="text-green-500">r</span>
          <span className="text-red-500">e</span>
        </motion.h1>
        <motion.div 
          className="w-full max-w-md mb-8 relative z-50 px-4 sm:px-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Select onValueChange={handleTabChange}>
            <SelectTrigger className={`w-full ${darkMode ? 'bg-gray-800 text-white border-white' : 'bg-white text-black'}`}>
              <div className="flex items-center">
                <SelectValue placeholder={animatedText} />
              </div>
            </SelectTrigger>
            <SelectContent className={darkMode ? 'bg-black text-white border border-white' : 'bg-white text-black'}>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="experience">Experience</SelectItem>
              <SelectItem value="projects">Projects</SelectItem>
              <SelectItem value="chatbot">AI Chatbot</SelectItem>
              <SelectItem value="game">Dino Game</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        <motion.div
          className="mt-8 sm:mt-12 flex flex-col items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-center max-w-2xl mb-6 text-sm sm:text-base">
            I&apos;m Rishi Khare, an AI researcher and computer scientist passionate about pushing the boundaries of technology. 
            Currently, I&apos;m studying Computer Science and Data Science at UC Berkeley, where I&apos;m involved in cutting-edge AI research. 
            My goal is to develop innovative solutions that can positively impact the world.
          </p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <a href="https://github.com/rishiskhare" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com/in/rishi-khare" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://twitter.com/rishiskhare" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="mailto:rishi.khare@berkeley.edu">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
            <Button variant="outline" size="icon" onClick={() => setShowDinoGame(true)}>
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Dino Game</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </ScrollArea>
  )
}
