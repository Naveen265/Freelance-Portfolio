import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const ringEl = ring
    function animateRing() {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      ringEl.style.left = rx + 'px'
      ringEl.style.top  = ry + 'px'
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    const addToEl = (el: Element) => {
      el.addEventListener('mouseenter', () => ringEl.classList.add('cursor-hover'))
      el.addEventListener('mouseleave', () => ringEl.classList.remove('cursor-hover'))
    }

    // observe DOM for new hover targets
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-cursor="hover"], a, button').forEach(addToEl)
    })
    observer.observe(document.body, { childList: true, subtree: true })
    document.querySelectorAll('[data-cursor="hover"], a, button').forEach(addToEl)

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
