import React, { useRef, useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const GAME_HEIGHT = 150
const GAME_WIDTH = 600
const DINO_WIDTH = 40
const DINO_HEIGHT = 43
const CACTUS_WIDTH = 30
const CACTUS_HEIGHT = 50
const JUMP_FORCE = 10
const GRAVITY = 0.6

interface GameObject {
  x: number
  y: number
  width: number
  height: number
}

interface DinoGameProps {
  darkMode: boolean
}

export default function DinoGame({ darkMode }: DinoGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const savedHighScore = localStorage.getItem('dinoHighScore')
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10))
    }
  }, [])

  useEffect(() => {
    if (!gameStarted) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const dino: GameObject = { x: 50, y: GAME_HEIGHT - DINO_HEIGHT, width: DINO_WIDTH, height: DINO_HEIGHT }
    let cacti: GameObject[] = []
    let jumpVelocity = 0
    let frameCount = 0
    let currentScore = 0

    const jump = () => {
      if (dino.y === GAME_HEIGHT - DINO_HEIGHT) {
        jumpVelocity = -JUMP_FORCE
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    const gameLoop = () => {
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

      // Set background color based on dark mode
      ctx.fillStyle = darkMode ? '#1f2937' : '#f3f4f6'
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

      // Update dino position
      dino.y += jumpVelocity
      jumpVelocity += GRAVITY
      if (dino.y > GAME_HEIGHT - DINO_HEIGHT) {
        dino.y = GAME_HEIGHT - DINO_HEIGHT
        jumpVelocity = 0
      }

      // Generate new cactus
      if (frameCount % 100 === 0) {
        cacti.push({
          x: GAME_WIDTH,
          y: GAME_HEIGHT - CACTUS_HEIGHT,
          width: CACTUS_WIDTH,
          height: CACTUS_HEIGHT
        })
      }

      // Update and draw cacti
      cacti = cacti.filter(cactus => {
        cactus.x -= 5
        
        // Draw cactus
        ctx.fillStyle = darkMode ? '#9ca3af' : '#4b5563'
        ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height)

        // Check collision
        if (
          dino.x < cactus.x + cactus.width &&
          dino.x + dino.width > cactus.x &&
          dino.y < cactus.y + cactus.height &&
          dino.y + dino.height > cactus.y
        ) {
          setGameStarted(false)
          if (currentScore > highScore) {
            setHighScore(currentScore)
            localStorage.setItem('dinoHighScore', currentScore.toString())
          }
          return false
        }

        return cactus.x > -CACTUS_WIDTH
      })

      // Draw dino
      ctx.fillStyle = darkMode ? '#34d399' : '#10b981'
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height)

      // Draw ground
      ctx.strokeStyle = darkMode ? '#4b5563' : '#9ca3af'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, GAME_HEIGHT - 1)
      ctx.lineTo(GAME_WIDTH, GAME_HEIGHT - 1)
      ctx.stroke()

      currentScore++
      setScore(currentScore)

      frameCount++
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      cancelAnimationFrame(animationFrameId)
    }
  }, [gameStarted, highScore, darkMode])

  const handleStartGame = () => {
    setGameStarted(true)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md mb-4 w-full max-w-[600px]`}
      />
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <p className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Score: {score}</p>
          <p className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>High Score: {highScore}</p>
        </div>
        <Button onClick={handleStartGame} disabled={gameStarted}>
          {gameStarted ? 'Game in Progress' : 'Start Game'}
        </Button>
      </div>
      <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Press the spacebar to jump!</p>
    </div>
  )
}
