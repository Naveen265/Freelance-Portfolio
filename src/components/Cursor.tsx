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
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`
    }

    function animateRing() {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    // event delegation instead of per-element listeners + MutationObserver
    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('[data-cursor="hover"], a, button')) ring.classList.add('cursor-hover')
    }
    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('[data-cursor="hover"], a, button')) ring.classList.remove('cursor-hover')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ transform: 'translate3d(-100px,-100px,0)' }} />
      <div ref={ringRef} className="cursor-ring" style={{ transform: 'translate3d(-100px,-100px,0)' }} />
    </>
  )
}
