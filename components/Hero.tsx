import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  isDarkMode: boolean
}

export default function Hero({ isDarkMode }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <Image
          src="/images/rishi-khare-resized.png"
          alt="Rishi Khare"
          width={200}
          height={200}
          className={`rounded-full mx-auto mb-8 border-4 ${isDarkMode ? 'border-white' : 'border-black'}`}
        />
        <h1 className="text-6xl font-bold mb-4 relative">
          <span className="relative z-10">Rishi Khare</span>
        </h1>
        <p className="text-xl mb-8 font-light">Computer Science & Data Science @ UC Berkeley</p>
        <button
          onClick={() => scrollTo('about')}
          className={`px-8 py-3 rounded-full font-semibold transition-colors text-sm ${
            isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Learn More
        </button>
      </motion.div>
      <div className="absolute bottom-10 transform animate-bounce">
        <ChevronDown size={32} />
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: isDarkMode ? 'rgb(59,130,246)' : 'rgb(147,197,253)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: isDarkMode ? 'rgb(147,51,234)' : 'rgb(196,181,253)', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <g className="wireframe-animation">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={`path-${i}`}
                d={`M${i * 25} 100 Q${i * 25 + 12.5} 0 ${i * 25 + 25} 100`}
                stroke={isDarkMode ? 'white' : 'black'}
                strokeWidth="0.5"
                strokeOpacity="0.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3 + i, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={`circle-${i}`}
                cx={`${33 * (i + 1)}%`}
                cy={`${25 * (i + 1)}%`}
                r={`${5 + i * 2}%`}
                stroke={isDarkMode ? 'white' : 'black'}
                strokeWidth="0.5"
                strokeOpacity="0.2"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 + i, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            ))}
            {[...Array(2)].map((_, i) => (
              <motion.rect
                key={`rect-${i}`}
                x={`${20 + i * 40}%`}
                y={`${40 + i * 20}%`}
                width="20%"
                height="10%"
                stroke={isDarkMode ? 'white' : 'black'}
                strokeWidth="0.5"
                strokeOpacity="0.2"
                fill="none"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{ duration: 4 + i * 2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
              />
            ))}
          </g>
        </svg>
      </div>
    </section>
  )
}