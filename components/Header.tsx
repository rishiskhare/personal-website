import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Hamburger menu button for small screens */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {['about', 'experience', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`hover:text-gray-500 transition-colors capitalize font-light text-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-black' : 'bg-white'} py-4`}>
          <ul className="flex flex-col items-center space-y-4">
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`hover:text-gray-500 transition-colors capitalize font-light text-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}