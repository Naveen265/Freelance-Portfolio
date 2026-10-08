import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    function update() {
      const t  = new Date()
      const hh = String(t.getHours()).padStart(2, '0')
      const mm = String(t.getMinutes()).padStart(2, '0')
      setTime(`${hh}:${mm} IST · Available`)
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer">
      <div>© 2026 Naveen John Kennedy · Built with care</div>
      <div className="footer-time">
        <span style={{ width: 6, height: 6, background: '#00ff88', borderRadius: '50%', boxShadow: '0 0 6px #00ff88', display: 'inline-block' }} />
        {time}
      </div>
      <a href="#">↑ Back to top</a>
    </footer>
  )
}
