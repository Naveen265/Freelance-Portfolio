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

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setPixelRatio(1)
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

    const count = 80
    const positions = new Float32Array(count * 3)
    const velocities: { x: number; y: number }[] = []

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.003,
      })
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({ color: 0xff4d2e, size: 0.05, transparent: true, opacity: 0.35 })
    scene.add(new THREE.Points(geo, mat))

    const linePositions: number[] = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3]     - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        if (Math.sqrt(dx * dx + dy * dy) < 4) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          )
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3))
    scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x7c5cff, transparent: true, opacity: 0.06 })))

    let rafId: number, active = false, last = 0
    const STEP = 1000 / 30

    function loop(now: number) {
      if (!active) return
      rafId = requestAnimationFrame(loop)
      if (now - last < STEP) return
      last = now

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

    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      if (active) loop(performance.now())
    }, { threshold: 0 })
    io.observe(container)

    return () => {
      active = false
      cancelAnimationFrame(rafId)
      ro.disconnect()
      io.disconnect()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
