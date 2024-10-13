import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ChatbotProps {
  darkMode: boolean
  setShowBrookeDialog: (show: boolean) => void
}

const WELCOME_MESSAGE = ["Welcome to Rishi Khare's AI Chatbot.", "Type 'help' for a list of commands."]

export default function Chatbot({ darkMode, setShowBrookeDialog }: ChatbotProps) {
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalOutput, setTerminalOutput] = useState<string[]>(WELCOME_MESSAGE)
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [terminalOutput])

  const handleTerminalCommand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const command = terminalInput.toLowerCase().trim()
    setTerminalOutput(prev => [...prev, `> ${terminalInput}`, ''])
    setTerminalInput("")
    setIsTyping(true)

    let response: string[] = []
    switch (command) {
      case "help":
        response = ["Available commands:", "- about: Learn about Rishi Khare", "- education: View educational background", "- inventions: List current inventions", "- contact: Show contact information", "- clear: Clear the chat"]
        break
      case "about":
        response = ["Rishi Khare: Inventor, AI Researcher, and Computer Scientist", "Currently pushing the boundaries of AI and machine learning at UC Berkeley."]
        break
      case "education":
        response = ["Education:", "University of California, Berkeley", "B.A. in Computer Science, B.A. in Data Science (GPA: 3.87/4.00)", "August 2021–May 2025"]
        break
      case "inventions":
        response = ["Current Inventions:", 
          "- Methods and Systems of Tag Location Detection in an Inventory Environment based on Visual Attributes of Tags using Computer Vision (Patent Pending)",
          "- Methods and Systems of Tag Location Detection in an Inventory Environment based on Audio Attributes of Audio Signals from Tags using Audio Machine Learning (Patent Pending)",
        ]
        break
      case "contact":
        response = ["Contact Information:", "Email: rishi.khare@berkeley.edu", "LinkedIn: linkedin.com/in/rishiskhare", "GitHub: github.com/rishiskhare"]
        break
      case "brooke":
        response = ["💖 A special message for Brooke has appeared! 💖"]
        setShowBrookeDialog(true)
        break
      case "clear":
        setTerminalOutput(WELCOME_MESSAGE)
        setIsTyping(false)
        return
      default:
        response = [`Command not recognized: ${command}. Type 'help' for a list of commands.`]
    }

    for (const line of response) {
      await typeWriter(line)
    }
    setIsTyping(false)
  }

  const typeWriter = async (text: string) => {
    const words = text.split(' ')
    setTerminalOutput(prev => [...prev, ''])
    for (let i = 0; i < words.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100))
      setTerminalOutput(prev => [...prev.slice(0, -1), prev[prev.length - 1] + (i === 0 ? '' : ' ') + words[i]])
    }
  }

  return (
    <Card className={`flex-grow ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden flex flex-col`}>
      <CardContent className="flex-grow p-0 flex flex-col">
        <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
          <AnimatePresence>
            {terminalOutput.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-2 text-sm sm:text-base"
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-2 h-4 bg-green-400"
            />
          )}
        </ScrollArea>
        <form onSubmit={handleTerminalCommand} className="p-4 border-t border-gray-300 dark:border-gray-700 flex flex-wrap items-center">
          <span className="mr-2">{">"}</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            className="flex-grow bg-transparent focus:outline-none text-sm sm:text-base mb-2 sm:mb-0"
            placeholder="Type a command..."
            aria-label="Enter command"
          />
          <div className="flex w-full sm:w-auto justify-between sm:justify-start">
            <Button type="submit" variant="outline" size="sm" className="text-xs sm:text-sm mr-2">
              Send
            </Button>
            <Button type="button" variant="outline" size="sm" className="text-xs sm:text-sm" onClick={() => setTerminalOutput(WELCOME_MESSAGE)}>
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
