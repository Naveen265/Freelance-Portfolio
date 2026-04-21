import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ServicesScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.set(0, 4, 8)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    function resize() {
      const w = container!.clientWidth, h = container!.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    // perspective grid plane with vertex displacement
    const gridSize = 20
    const divisions = 24
    const geo = new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions)
    geo.rotateX(-Math.PI / 2)

    const positions = geo.attributes.position.array as Float32Array
    const origY = new Float32Array(positions.length)
    for (let i = 0; i < positions.length; i++) origY[i] = positions[i]

    const mat = new THREE.MeshBasicMaterial({
      color: 0x7c5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    })
    const grid = new THREE.Mesh(geo, mat)
    grid.position.y = -2
    scene.add(grid)

    // floating accent spheres above the grid
    const spheres = Array.from({ length: 5 }, (_, i) => {
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.18 + i * 0.06, 1),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xff4d2e : 0x7c5cff, wireframe: true, transparent: true, opacity: 0.18 })
      )
      m.position.set((i - 2) * 3.5, 0.5, (Math.random() - 0.5) * 4)
      scene.add(m)
      return { m, phase: i * 1.2 }
    })

    let t = 0, rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      t += 0.008

      // wave the grid vertices
      const pos = geo.attributes.position.array as Float32Array
      for (let i = 0; i < pos.length; i += 3) {
        const x = origY[i], z = origY[i + 2]
        pos[i + 1] = Math.sin(x * 0.5 + t) * 0.4 + Math.cos(z * 0.5 + t * 0.7) * 0.3
      }
      geo.attributes.position.needsUpdate = true

      spheres.forEach(({ m, phase }) => {
        m.rotation.x += 0.006
        m.rotation.y += 0.008
        m.position.y = 0.5 + Math.sin(t + phase) * 0.4
      })

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
