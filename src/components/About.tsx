const stats = [
  { num: '3+', lbl: 'Years building\nweb products' },
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
              I'm Naveen John Kennedy — a full-stack developer with 3+ years of experience
              and the founder of Innestolabs. I design and build responsive, modern websites
              and practical digital solutions that help businesses present themselves
              professionally and generate enquiries.
            </p>
            <p>
              I deliver marketing sites, landing pages, redesigns, and lead-generation
              websites — with clean architecture, accessible interactions, and the kind of
              attention to detail that makes a site feel considered. If you want something
              that looks and performs a cut above — let's talk.
            </p>
            <p>
              Freelance work is mine alone, start to finish. For larger builds, I bring in
              Innestolabs — my web and software studio — to help businesses ship websites,
              lead-generation systems, and custom digital solutions.
            </p>
            <a
              className="about-link"
              href="https://innestolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Innestolabs<span className="project-link-arrow">↗</span>
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
