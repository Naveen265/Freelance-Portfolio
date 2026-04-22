import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ProjectsScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.z = 9

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

    const geos = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.BoxGeometry(1.4, 1.4, 1.4),
    ]

    const objects = Array.from({ length: 10 }, (_, i) => {
      const size = 0.15 + Math.random() * 0.3
      const geo = geos[i % geos.length].clone()
      geo.scale(size, size, size)
      const mat = new THREE.MeshBasicMaterial({
        color: i % 3 !== 0 ? 0x7c5cff : 0xff4d2e,
        wireframe: true,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.1,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 4,
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      scene.add(mesh)
      return { mesh, rx: (Math.random() - 0.5) * 0.008, ry: (Math.random() - 0.5) * 0.01, phase: Math.random() * Math.PI * 2, baseY: mesh.position.y }
    })

    let t = 0, rafId: number, active = false, last = 0
    const STEP = 1000 / 30

    function loop(now: number) {
      if (!active) return
      rafId = requestAnimationFrame(loop)
      if (now - last < STEP) return
      last = now
      t += 0.012
      objects.forEach(o => {
        o.mesh.rotation.x += o.rx * 2
        o.mesh.rotation.y += o.ry * 2
        o.mesh.position.y = o.baseY + Math.sin(t + o.phase) * 0.25
      })
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
