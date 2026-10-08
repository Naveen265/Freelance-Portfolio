import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section className="hero">
      <HeroScene />

      <div className="hero-text">
        <div className="hero-meta">
          <span><span className="dash">· </span>Full-stack Developer</span>
          <span><span className="dash">· </span>Freelance, innestolabs</span>
          <span><span className="dash">· </span>Remote · India</span>
          <span><span className="dash">· </span>V1.26 · 001</span>
        </div>

        <h1 className="hero-title">
          <div className="line"><span>Building the</span></div>
          <div className="line">
            <span>
              <span className="gradient-text">quiet</span> web
              <span className="arrow">↗</span>
            </span>
          </div>
          <div className="line"><span>one craft at a time.</span></div>
        </h1>

        <div className="hero-bottom">
          <p>
            Full-stack developer freelancing through innestolabs, building fast,
            modern websites for founders. Open to full-time engineering roles.
          </p>
          <div>
            <div className="hero-bottom-label">Current Focus</div>
            <div className="hero-bottom-value">React · TypeScript · Node</div>
          </div>
          <div>
            <div className="hero-bottom-label">Availability</div>
            <div className="hero-bottom-value accent">Mon–Fri · Remote</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">scroll</div>
    </section>
  )
}
