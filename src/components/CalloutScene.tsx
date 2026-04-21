import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function CalloutScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 7

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

    // sine wave ribbon of particles
    const count = 80
    const positions = new Float32Array(count * 3)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({ color: 0xff4d2e, size: 0.06, transparent: true, opacity: 0.4 })
    scene.add(new THREE.Points(geo, mat))

    // second wave, offset
    const positions2 = new Float32Array(count * 3)
    const geo2 = new THREE.BufferGeometry()
    geo2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))
    const mat2 = new THREE.PointsMaterial({ color: 0x7c5cff, size: 0.05, transparent: true, opacity: 0.3 })
    scene.add(new THREE.Points(geo2, mat2))

    // large background torus
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(5, 0.4, 12, 100),
      new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.05 })
    )
    torus.rotation.x = 0.3
    scene.add(torus)

    let t = 0, rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      t += 0.012

      const pos  = geo.attributes.position.array as Float32Array
      const pos2 = geo2.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const x = (i / count - 0.5) * 16
        pos[i * 3]     = x
        pos[i * 3 + 1] = Math.sin(x * 0.6 + t) * 1.2 + Math.sin(x * 0.3 - t * 0.7) * 0.5
        pos[i * 3 + 2] = Math.cos(x * 0.4 + t * 0.5) * 0.8

        pos2[i * 3]     = x
        pos2[i * 3 + 1] = Math.sin(x * 0.6 + t + 1.5) * 1.0
        pos2[i * 3 + 2] = Math.cos(x * 0.5 - t * 0.4) * 0.6
      }
      geo.attributes.position.needsUpdate  = true
      geo2.attributes.position.needsUpdate = true

      torus.rotation.z += 0.002
      torus.rotation.y += 0.001

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
