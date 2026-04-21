import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ExperienceScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    function resize() {
      const w = container!.clientWidth
      const h = container!.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const count = 120
    const positions = new Float32Array(count * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.003,
        z: 0,
      })
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const mat = new THREE.PointsMaterial({
      color: 0xff4d2e,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // subtle connection lines between nearby particles
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c5cff,
      transparent: true,
      opacity: 0.06,
    })

    const lineGeo = new THREE.BufferGeometry()
    const linePositions: number[] = []
    const threshold = 4

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3]     - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        if (Math.sqrt(dx * dx + dy * dy) < threshold) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          )
        }
      }
    }

    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    let rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      const pos = geo.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        pos[i * 3]     += velocities[i].x
        pos[i * 3 + 1] += velocities[i].y
        if (pos[i * 3]     >  10) pos[i * 3]     = -10
        if (pos[i * 3]     < -10) pos[i * 3]     =  10
        if (pos[i * 3 + 1] >   6) pos[i * 3 + 1] = -6
        if (pos[i * 3 + 1] <  -6) pos[i * 3 + 1] =  6
      }
      geo.attributes.position.needsUpdate = true
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

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
