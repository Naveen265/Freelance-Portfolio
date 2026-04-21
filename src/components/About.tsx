const stats = [
  { num: '3+', lbl: 'Years building\nweb products' },
  { num: '5',  lbl: 'Projects shipped\nin production' },
  { num: '∞',  lbl: 'Pixels moved\nby 1px' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-label">
        <span className="dot" />
        <span className="num">01 /</span> About
      </div>

      <div className="about-grid">
        <div className="about-heading">
          A developer<br />with <em>taste.</em>
        </div>

        <div className="about-body">
          <p>
            I'm Naveen — a full-stack developer who designs and ships modern web apps
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

          <div className="about-stats">
            {stats.map(s => (
              <div key={s.num}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
