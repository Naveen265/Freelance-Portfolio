export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span className="nav-logo-dot" />
        <span>NAVEEN ◦ 2026</span>
      </div>

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
