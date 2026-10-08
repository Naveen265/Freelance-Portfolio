const stats = [
  { num: '~4', lbl: 'Years building\nweb products' },
  { num: '6',  lbl: 'Projects shipped\nin production' },
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
              I'm Naveen John Kennedy, a full-stack developer with almost 4 years of
              experience. I design and build responsive, modern websites and practical
              digital solutions that help businesses present themselves professionally
              and generate enquiries.
            </p>
            <p>
              I deliver marketing sites, landing pages, redesigns, and lead-generation
              websites, with clean architecture, accessible interactions, and the kind of
              attention to detail that makes a site feel considered. If you want something
              that looks and performs a cut above, let's talk.
            </p>
            <p>
              Since March 2026, I've been freelancing through innestolabs, delivering
              client projects end to end as the sole engineer on every build. I'm also
              open to full-time engineering roles where I can commit fully to one product
              team.
            </p>
            <a
              className="about-link"
              href="https://innestolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore innestolabs<span className="project-link-arrow">↗</span>
            </a>
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
