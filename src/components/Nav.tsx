export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo" data-cursor="hover" aria-label="Naveen John Kennedy">
        <svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="32" height="32" rx="5" fill="#0a0a0b"/>
          <g stroke="#ff4d2e" strokeWidth="3" strokeLinecap="square">
            <line x1="5" y1="7" x2="5" y2="25"/>
            <line x1="5" y1="7" x2="14" y2="25"/>
            <line x1="14" y1="7" x2="14" y2="25"/>
          </g>
          <g stroke="#f5f5f0" strokeWidth="3" strokeLinecap="square">
            <line x1="18" y1="7" x2="18" y2="25"/>
            <line x1="18" y1="16" x2="27" y2="7"/>
            <line x1="18" y1="16" x2="27" y2="25"/>
          </g>
        </svg>
        <span>NAVEEN JOHN KENNEDY ◦ 2026</span>
      </a>

      <ul className="nav-links">
        {['work', 'services', 'experience', 'about', 'contact'].map(item => (
          <li key={item}>
            <a href={`#${item}`} data-cursor="hover">
              <span className="paren">( </span>{item}<span className="paren"> )</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="nav-status-dot" />
        <span>Available — Mon–Fri</span>
      </div>
    </nav>
  )
}
