import DarkModeToggle from './DarkModeToggle'

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <ul className="flex space-x-8">
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
    </header>
  )
}