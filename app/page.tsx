'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { Item, ItemType } from '../types/types'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [itemType, setItemType] = useState<ItemType | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const openModal = (item: Item, type: ItemType) => {
    setSelectedItem(item)
    setItemType(type)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setItemType(null)
  }

  return (
    <div className={`min-h-screen font-['SF_Pro_Display',_sans-serif] ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About scrollY={scrollY} />
        <Experience scrollY={scrollY} isDarkMode={isDarkMode} openModal={openModal} />
        <Projects scrollY={scrollY} isDarkMode={isDarkMode} openModal={openModal} />
        <Contact scrollY={scrollY} isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
      <Modal selectedItem={selectedItem} itemType={itemType} isDarkMode={isDarkMode} closeModal={closeModal} />
    </div>
  )
}