import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Image from 'next/image';

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
  
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Set up the scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(isDarkMode ? 0x000000 : 0xffffff)

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 10)
    camera.lookAt(0, 0, 0)

    // Adjust the renderer to have a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0) // Set clear color to transparent
    mountRef.current.appendChild(renderer.domElement)

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.enableZoom = false

    // Create a group to hold all objects
    const group = new THREE.Group()
    scene.add(group)

    // Create pyramid geometry with reduced height
    const pyramidGeometry = new THREE.BufferGeometry()
    const originalHeight = 0.5
    const reducedHeight = originalHeight * 0.97 * 0.97
    const vertices = new Float32Array([
      -0.5, -0.5, 0.5,
      0.5, -0.5, 0.5,
      0, reducedHeight, 0,
      0.5, -0.5, 0.5,
      0.5, -0.5, -0.5,
      0, reducedHeight, 0,
      0.5, -0.5, -0.5,
      -0.5, -0.5, -0.5,
      0, reducedHeight, 0,
      -0.5, -0.5, -0.5,
      -0.5, -0.5, 0.5,
      0, reducedHeight, 0,
      -0.5, -0.5, 0.5,
      0.5, -0.5, 0.5,
      0.5, -0.5, -0.5,
      -0.5, -0.5, -0.5,
    ])
    const indices = new Uint16Array([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
      9, 10, 11,
      12, 13, 14, 12, 14, 15
    ])
    pyramidGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    pyramidGeometry.setIndex(new THREE.BufferAttribute(indices, 1))
    pyramidGeometry.computeVertexNormals()

    // Create material for the pyramid
    const faceMaterial = new THREE.MeshBasicMaterial({ 
      color: isDarkMode ? 0x000000 : 0xffffff,
      side: THREE.DoubleSide,
    })

    // Create pyramid
    const pyramid = new THREE.Mesh(pyramidGeometry, faceMaterial)
    group.add(pyramid)

    // Create edges for the pyramid
    const pyramidEdges = new THREE.EdgesGeometry(pyramidGeometry)
    const pyramidLineMaterial = new THREE.LineBasicMaterial({ color: isDarkMode ? 0xffffff : 0x000000 })
    const pyramidWireframe = new THREE.LineSegments(pyramidEdges, pyramidLineMaterial)
    pyramid.add(pyramidWireframe)

    // Create black cubes with white outlines
    const cubes: THREE.Mesh[] = []
    const cubeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: isDarkMode ? 0x000000 : 0xffffff })
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry)
    const cubeLineMaterial = new THREE.LineBasicMaterial({ color: isDarkMode ? 0xffffff : 0x000000 })

    for (let i = 0; i < 20; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeLineMaterial)
      
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 1 + Math.random() * 2
      
      cube.position.x = radius * Math.sin(phi) * Math.cos(theta)
      cube.position.y = radius * Math.sin(phi) * Math.sin(theta)
      cube.position.z = radius * Math.cos(phi)
      
      cube.rotation.x = Math.random() * Math.PI
      cube.rotation.y = Math.random() * Math.PI
      cube.rotation.z = Math.random() * Math.PI
      
      cube.add(cubeWireframe)
      group.add(cube)
      cubes.push(cube)
    }

    // Animation variables
    let currentZoom = 10
    const targetZoom = 2.7
    const zoomDuration = 2000
    const startTime = Date.now()

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      // Rotate the entire group
      group.rotation.y += 0.002

      // Animate zoom
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < zoomDuration) {
        const progress = elapsedTime / zoomDuration
        currentZoom = 10 - (10 - targetZoom) * easeOutCubic(progress)
        camera.position.z = currentZoom
      }

      controls.update()
      renderer.render(scene, camera)
    }

    // Easing function for smooth animation
    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3)
    }

    // Start the animation loop
    animate()

    // Handle window resizing
    const handleResize = () => {
      if (!mountRef.current) return
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    // Handle cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [isDarkMode])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 text-center">
        <Image
          src="/images/rishi-khare-resized.png"
          alt="Rishi Khare"
          width={200}
          height={200}
          className={`rounded-full mx-auto mb-8 border-4 ${isDarkMode ? 'border-white' : 'border-black'}`}
        />
        <h1 className="text-6xl font-bold mb-4">
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
      </div>
    </section>
  )
}