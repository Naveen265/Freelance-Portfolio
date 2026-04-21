import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function StackScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 7

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
    window.addEventListener('resize', resize)

    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const l = new THREE.DirectionalLight(0xffffff, 1)
    l.position.set(2, 3, 4); scene.add(l)
    const l2 = new THREE.DirectionalLight(0x7c5cff, 1)
    l2.position.set(-3, -2, 3); scene.add(l2)

    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0x0a0a0b, metalness: 0.4, roughness: 0.25,
        clearcoat: 1, clearcoatRoughness: 0.1, reflectivity: 0.8,
      })
    )
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.22, 1),
      new THREE.MeshBasicMaterial({ color: 0x7c5cff, wireframe: true, transparent: true, opacity: 0.35 })
    )

    const labels = ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Claude', 'Claude Design']

    function makeTextSprite(text: string, accent: string) {
      const canvas = document.createElement('canvas')
      canvas.width = 256; canvas.height = 128
      const ctx = canvas.getContext('2d')!
      const r = 24, x = 8, y = 8, w = 240, h = 112
      ctx.fillStyle = '#111113'
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y,     x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x,     y + h, r)
      ctx.arcTo(x,     y + h, x,     y,     r)
      ctx.arcTo(x,     y,     x + w, y,     r)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.stroke()
      ctx.fillStyle = '#f5f5f0'
      ctx.font = '600 44px Geist, sans-serif'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText(text, 128, 64)
      ctx.fillStyle = accent
      ctx.beginPath(); ctx.arc(32, 32, 6, 0, Math.PI * 2); ctx.fill()
      const tex = new THREE.CanvasTexture(canvas)
      tex.anisotropy = 4
      return tex
    }

    const badges: THREE.Sprite[] = []
    labels.forEach((t, i) => {
      const mat = new THREE.SpriteMaterial({
        map: makeTextSprite(t, i % 2 === 0 ? '#ff4d2e' : '#7c5cff'),
        transparent: true,
      })
      const m = new THREE.Sprite(mat)
      m.scale.set(1.3, 0.65, 1)
      const offset = 2 / labels.length
      const y = ((i * offset) - 1) + (offset / 2)
      const rr = Math.sqrt(1 - y * y)
      const phi = i * Math.PI * (3 - Math.sqrt(5))
      m.position.set(Math.cos(phi) * rr * 2.9, y * 2.9, Math.sin(phi) * rr * 2.9)
      m.userData.phase = Math.random() * Math.PI * 2
      badges.push(m)
    })

    const group = new THREE.Group()
    scene.add(group)
    badges.forEach(b => group.add(b))
    group.add(sphere); group.add(wire)

    let isDown = false, lastX = 0, lastY = 0, rotY = 0, rotX = 0
    const onDown = (e: PointerEvent) => { isDown = true; lastX = e.clientX; lastY = e.clientY }
    const onUp   = () => { isDown = false }
    const onMove = (e: PointerEvent) => {
      if (!isDown) return
      rotY += (e.clientX - lastX) * 0.005
      rotX += (e.clientY - lastY) * 0.005
      lastX = e.clientX; lastY = e.clientY
    }
    container.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointermove', onMove)

    let t = 0, rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      t += 0.01
      if (!isDown) rotY += 0.003
      group.rotation.y = rotY
      group.rotation.x = Math.max(-0.7, Math.min(0.7, rotX))
      badges.forEach(b => {
        const f = 1 + Math.sin(t + b.userData.phase) * 0.08
        b.scale.set(1.3 * f, 0.65 * f, 1)
      })
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      container.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointermove', onMove)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />
}
