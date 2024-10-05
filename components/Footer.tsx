interface FooterProps {
  isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-6 border-t ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto text-center">
        <p className="font-light">&copy; 2024 Rishi Khare. All rights reserved.</p>
      </div>
    </footer>
  )
}