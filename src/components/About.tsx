const stats = [
  { num: '3+', lbl: 'Years building\nweb products' },
  { num: '5',  lbl: 'Projects shipped\nin production' },
  { num: '∞',  lbl: 'Pixels moved\nby 1px' },
]

import AboutScene from './AboutScene'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <AboutScene />
      <div className="section-label" style={{ position: 'relative', zIndex: 1 }}>
        <span className="dot" />
        <span className="num">01 /</span> About
      </div>

      <div className="about-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-left">
          <div className="about-heading">
            A developer<br />with <em>taste.</em>
          </div>
          <div className="about-body">
            <p>
              I'm Naveen John Kennedy — a full-stack developer who designs and ships modern web apps
              end-to-end. From first wireframe to production deploy, I own the stack:
              interfaces people love to use, APIs that stay out of the way, and codebases
              your next hire will thank you for.
            </p>
            <p>
              I deliver marketing sites, dashboards, internal tools, and MVPs — with clean
              architecture, accessible interactions, and the kind of attention to detail that
              makes a product feel considered. If you want something that looks and performs
              a cut above — let's talk.
            </p>
          </div>
        </div>

        <div className="about-photo-wrap">
          <img src="/my-pic.png" alt="Naveen John Kennedy" />
        </div>

        <div className="about-stats">
          {stats.map(s => (
            <div key={s.num}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
