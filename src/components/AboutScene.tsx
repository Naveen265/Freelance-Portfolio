import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.set(0, 2, 7)
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

    // primary wave mesh — red
    const geo1 = new THREE.PlaneGeometry(28, 18, 48, 32)
    geo1.rotateX(-Math.PI / 2)
    const orig1 = (geo1.attributes.position.array as Float32Array).slice()

    const mesh1 = new THREE.Mesh(
      geo1,
      new THREE.MeshBasicMaterial({ color: 0xff4d2e, wireframe: true, transparent: true, opacity: 0.07 })
    )
    mesh1.position.y = -1
    scene.add(mesh1)

    // secondary wave mesh — purple, offset angle
    const geo2 = new THREE.PlaneGeometry(28, 18, 32, 22)
    geo2.rotateX(-Math.PI / 2)
    const orig2 = (geo2.attributes.position.array as Float32Array).slice()

    const mesh2 = new THREE.Mesh(
      geo2,
      new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.05 })
    )
    mesh2.position.y = -0.5
    mesh2.rotation.y = 0.3
    scene.add(mesh2)

    let t = 0, rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      t += 0.007

      const p1 = geo1.attributes.position.array as Float32Array
      for (let i = 0; i < p1.length; i += 3) {
        const x = orig1[i], z = orig1[i + 2]
        p1[i + 1] = Math.sin(x * 0.4 + t) * 0.9
                  + Math.cos(z * 0.5 + t * 0.7) * 0.5
                  + Math.sin((x + z) * 0.25 + t * 1.2) * 0.35
      }
      geo1.attributes.position.needsUpdate = true

      const p2 = geo2.attributes.position.array as Float32Array
      for (let i = 0; i < p2.length; i += 3) {
        const x = orig2[i], z = orig2[i + 2]
        p2[i + 1] = Math.sin(x * 0.3 - t * 0.8) * 0.7
                  + Math.cos(z * 0.4 + t * 0.6) * 0.45
      }
      geo2.attributes.position.needsUpdate = true

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
