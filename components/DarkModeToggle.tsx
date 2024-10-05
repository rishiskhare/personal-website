import { Moon, Sun } from 'lucide-react'

interface DarkModeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}