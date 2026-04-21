import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ContactScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 5

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
    window.addEventListener('resize', resize)

    const count = 800
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: 0xff4d2e, size: 0.02, transparent: true, opacity: 0.7 })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.5
      my = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      points.rotation.y += 0.0008
      points.rotation.x = my * 0.2
      camera.position.x += (mx - camera.position.x) * 0.03
      camera.lookAt(0, 0, 0)
      const css = getComputedStyle(document.documentElement)
      mat.color.set(css.getPropertyValue('--accent').trim() as unknown as THREE.ColorRepresentation)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={containerRef} style={{
      position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5,
    }} />
  )
}
