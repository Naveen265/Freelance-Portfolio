const projects = [
  {
    size: 'feat',
    thumb: 'aurora',
    metaLeft: '01 · Current client',
    status: '● In Progress · 2026',
    statusColor: '#ffb800',
    statusBorder: 'rgba(255,184,0,0.4)',
    title: 'EmpireConstruction',
    sub: 'Website + construction estimator tool · React · Node · Postgres',
    svg: (
      <svg viewBox="0 0 220 140" fill="none">
        <rect x="10" y="10" width="200" height="120" rx="6" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
        <rect x="20" y="22" width="70"  height="10" rx="2" fill="white" fillOpacity="0.85"/>
        <rect x="20" y="38" width="110" height="4"  rx="2" fill="white" fillOpacity="0.35"/>
        <rect x="20" y="48" width="80"  height="4"  rx="2" fill="white" fillOpacity="0.35"/>
        <rect x="20" y="68" width="180" height="1"       fill="white" fillOpacity="0.3"/>
        <rect x="20" y="78" width="44"  height="14" rx="2" fill="white" fillOpacity="0.15"/>
        <rect x="66" y="78" width="44"  height="14" rx="2" fill="white" fillOpacity="0.15"/>
        <rect x="112" y="78" width="44" height="14" rx="2" fill="#ff4d2e"/>
        <text x="134" y="89" fill="white" fontFamily="monospace" fontSize="7" textAnchor="middle" fontWeight="600">ESTIMATE</text>
        <rect x="20" y="100" width="180" height="22" rx="3" fill="white" fillOpacity="0.08"/>
        <text x="28"  y="114" fill="white" fontFamily="monospace" fontSize="7" fillOpacity="0.7">PROJECT TOTAL</text>
        <text x="192" y="114" fill="white" fontFamily="monospace" fontSize="9" textAnchor="end" fontWeight="700">$248,500</text>
      </svg>
    ),
  },
  {
    size: 'small',
    thumb: 'warm',
    metaLeft: '02 · Zeb',
    status: '2025–26',
    title: 'Lynxis',
    sub: 'Shipping & Rail Terminal · 10K users',
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="18" y="24" width="64" height="52" rx="3" stroke="white" strokeOpacity="0.7" strokeWidth="1"/>
        <rect x="24" y="30" width="52" height="12" rx="1" fill="white" fillOpacity="0.15"/>
        <rect x="28" y="34" width="20" height="3"  rx="1.5" fill="white" fillOpacity="0.7"/>
        <rect x="24" y="46" width="24" height="26" rx="1" fill="white" fillOpacity="0.1"/>
        <rect x="52" y="46" width="24" height="12" rx="1" fill="white" fillOpacity="0.1"/>
        <rect x="52" y="60" width="24" height="12" rx="1" fill="white"/>
      </svg>
    ),
  },
  {
    size: 'wide',
    thumb: 'cool',
    metaLeft: '03 · AVASOFT',
    status: '2024',
    title: 'Pulse',
    sub: 'Application assessment tool · React · PDF export',
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="60" height="60" rx="4" stroke="white" strokeOpacity="0.6" strokeWidth="1"/>
        <rect x="26" y="26" width="30" height="4"  rx="2" fill="white" fillOpacity="0.8"/>
        <rect x="26" y="34" width="48" height="22" rx="2" fill="#7c5cff" fillOpacity="0.25" stroke="#7c5cff" strokeWidth="0.8"/>
        <path d="M30 48 L38 42 L46 50 L54 40 L62 46 L70 38" stroke="#7c5cff" strokeWidth="1.2" fill="none"/>
        <rect x="26" y="62" width="14" height="12" rx="1" fill="white" fillOpacity="0.15"/>
        <rect x="43" y="62" width="14" height="12" rx="1" fill="white" fillOpacity="0.15"/>
        <rect x="60" y="62" width="14" height="12" rx="1" fill="white" fillOpacity="0.15"/>
      </svg>
    ),
  },
  {
    size: 'wide',
    thumb: 'iso',
    metaLeft: '04 · AVASOFT',
    status: '2024',
    title: 'RACPAD',
    sub: 'Rent-A-Center · React refactor · 200K→50K LOC',
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <text x="50" y="42" fill="white" fillOpacity="0.9" fontFamily="monospace" fontSize="11" textAnchor="middle" fontWeight="700">1M USERS</text>
        <text x="50" y="56" fill="#ff4d2e" fontFamily="monospace" fontSize="7" textAnchor="middle">2,000 STORES</text>
        <rect x="20" y="64" width="60" height="2" rx="1" fill="white" fillOpacity="0.2"/>
        <rect x="20" y="64" width="45" height="2" rx="1" fill="#ff4d2e"/>
        <text x="50" y="76" fill="white" fillOpacity="0.5" fontFamily="monospace" fontSize="6" textAnchor="middle">200K → 50K LOC</text>
      </svg>
    ),
  },
  {
    size: 'small',
    thumb: 'mono',
    metaLeft: '05 · AVASOFT',
    status: '2023',
    title: 'Hive',
    sub: 'Employee assessment · React + Node + Lambda',
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="40" r="12" stroke="white" strokeOpacity="0.7" strokeWidth="1.2"/>
        <circle cx="50" cy="40" r="4"  fill="white" fillOpacity="0.9"/>
        <rect x="30" y="62" width="40" height="2" rx="1" fill="white" fillOpacity="0.4"/>
        <rect x="30" y="68" width="28" height="2" rx="1" fill="white" fillOpacity="0.4"/>
        <rect x="30" y="74" width="34" height="2" rx="1" fill="white" fillOpacity="0.4"/>
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-label">
        <span className="dot" />
        <span className="num">04 /</span> Selected work
      </div>

      <div className="projects-head">
        <h2>Things<br />I've <em>shipped.</em></h2>
        <div className="projects-count">5 projects · 2023 — 2026</div>
      </div>

      <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--fg-dim)', maxWidth: 640, marginBottom: 48, lineHeight: 1.6 }}>
        A mix of current freelance work and select projects from my time at Zeb and AVASOFT.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project ${p.size}`}
            data-cursor="hover"
            onMouseLeave={e => { e.currentTarget.style.transform = '' }}
            onMouseMove={e => {
              const el = e.currentTarget
              const r = el.getBoundingClientRect()
              const x = (e.clientX - r.left) / r.width  - 0.5
              const y = (e.clientY - r.top)  / r.height - 0.5
              el.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`
            }}
          >
            <div className={`project-thumb thumb-${p.thumb}`}>
              <div className="project-thumb-icon">{p.svg}</div>
            </div>

            <div className="project-overlay">
              <div className="project-meta-top">
                <span>{p.metaLeft}</span>
                <span
                  className="status-pill"
                  style={p.statusColor ? { color: p.statusColor, borderColor: p.statusBorder } : undefined}
                >
                  {p.status}
                </span>
              </div>
              <div className="project-title-block">
                <h3>{p.title}</h3>
                <div className="project-sub">{p.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
