"use client"

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Moon, Sun, Menu } from "lucide-react"
import { motion } from "framer-motion"
import DinoGame from './DinoGame'
import Home from './TabContent/Home'
import Education from './TabContent/Education'
import Experience from './TabContent/Experience'
import Projects from './TabContent/Projects'
import Chatbot from './TabContent/Chatbot'

export default function RetroWebsite() {
  const [url, setUrl] = useState("https://rishiskhare.com/home")
  const [darkMode, setDarkMode] = useState(false)
  const [showBrookeDialog, setShowBrookeDialog] = useState(false)
  const [showDinoGame, setShowDinoGame] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [animatedText, setAnimatedText] = useState("")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const texts = ["Search Rishi's projects...", "Explore innovative ideas...", "Discover AI breakthroughs..."]
    let currentTextIndex = 0
    let currentCharIndex = 0
    let isDeleting = false

    const animateText = () => {
      const currentText = texts[currentTextIndex]

      if (!isDeleting && currentCharIndex <= currentText.length) {
        setAnimatedText(currentText.slice(0, currentCharIndex))
        currentCharIndex++
      } else if (isDeleting && currentCharIndex >= 0) {
        setAnimatedText(currentText.slice(0, currentCharIndex))
        currentCharIndex--
      }

      if (currentCharIndex === currentText.length + 1) {
        isDeleting = true
        setTimeout(animateText, 1000)
      } else if (currentCharIndex === -1) {
        isDeleting = false
        currentTextIndex = (currentTextIndex + 1) % texts.length
        currentCharIndex = 0
        setTimeout(animateText, 500)
      } else {
        setTimeout(animateText, isDeleting ? 50 : 100)
      }
    }

    animateText()

    return () => {
      // Clean up if needed
    }
  }, [])

  const handleTabChange = (value: string) => {
    if (value === "game") {
      setShowDinoGame(true)
    } else {
      setUrl(`https://rishiskhare.com/${value}`)
      setActiveTab(value)
    }
    setShowMobileMenu(false)
  }

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} text-black dark:text-white font-mono p-2 sm:p-4 transition-colors duration-200`}>
      {/* URL bar and dark mode toggle */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} p-2 rounded-t-lg flex items-center space-x-2 mb-1`}>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-grow flex items-center">
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className={`flex-grow ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} px-2 py-1 rounded text-sm`}
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2"
        >
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>

      {/* Main content */}
      <Tabs value={activeTab} className="flex-grow flex flex-col" onValueChange={handleTabChange}>
        {/* Tab navigation */}
        <div className="flex justify-between items-center w-full">
          <TabsList className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} justify-start rounded-none hidden sm:flex w-full`}>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
          </TabsList>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="sm:hidden"
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-2 rounded-md mb-2 sm:hidden overflow-hidden`}
          >
            <div className="flex flex-col space-y-2">
              {['home', 'education', 'experience', 'projects', 'chatbot', 'game'].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activeTab === tab ? (darkMode ? 'bg-gray-700' : 'bg-gray-300') : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab content */}
        <TabsContent value="home" className={`flex-grow ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 overflow-auto rounded-b-lg`}>
          <Home darkMode={darkMode} animatedText={animatedText} handleTabChange={handleTabChange} setShowDinoGame={setShowDinoGame} />
        </TabsContent>
        <TabsContent value="education" className={`flex-grow ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 overflow-auto rounded-b-lg`}>
          <Education darkMode={darkMode} />
        </TabsContent>
        <TabsContent value="experience" className={`flex-grow ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 overflow-auto rounded-b-lg`}>
          <Experience darkMode={darkMode} />
        </TabsContent>
        <TabsContent value="projects" className={`flex-grow ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 overflow-auto rounded-b-lg`}>
          <Projects darkMode={darkMode} />
        </TabsContent>
        <TabsContent value="chatbot" className={`flex-grow ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} text-green-400 p-4 overflow-hidden flex flex-col rounded-b-lg`}>
          <Chatbot darkMode={darkMode} setShowBrookeDialog={setShowBrookeDialog} />
        </TabsContent>
      </Tabs>

      {/* Brooke Dialog */}
      <Dialog open={showBrookeDialog} onOpenChange={setShowBrookeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center">💖 For My Beloved Brooke 💖</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p className="text-center text-sm sm:text-base">Brooke, my love, you are the algorithm to my heart, the constant in my equation of life. Your smile illuminates my world brighter than any screen, and your love compiles perfectly in the IDE of my soul.</p>
            <p className="text-center text-sm sm:text-base">Just as we debug our code together, we navigate life&apos;s challenges hand in hand. You&apos;re not just my girlfriend; you&apos;re my pair programmer in this beautiful project called life.</p>
            <p className="text-center text-sm sm:text-base">I love you more than all the bits and bytes in the digital universe!</p>
          </div>
          <div className="flex justify-center">
            <Button onClick={() => setShowBrookeDialog(false)} className="bg-pink-500 hover:bg-pink-600 text-white">
              Close with Love
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dino Game Dialog */}
      <Dialog open={showDinoGame} onOpenChange={(open) => {
        setShowDinoGame(open)
        if (!open) {
          setActiveTab("home")
        }
      }}>
        <DialogContent className="sm:max-w-[650px] p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4">Dino Game</DialogTitle>
          </DialogHeader>
          <DinoGame darkMode={darkMode} />
        </DialogContent>
      </Dialog>
    </div>
  )
}