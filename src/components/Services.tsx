const services = [
  {
    idx: '(s-01)',
    title: 'Marketing sites\nthat convert.',
    desc: 'High-intent landing pages and full marketing sites for early-stage startups. Designed to load in under a second and actually move the needle.',
    tags: ['React', 'TypeScript', 'Tailwind', 'SEO-ready'],
  },
  {
    idx: '(s-02)',
    title: 'Web apps\n& dashboards.',
    desc: 'Full-stack SaaS products, admin panels, internal tools. Auth, roles, realtime — the whole thing. From design to a shipped product on your domain.',
    tags: ['React', 'Node', 'Postgres', 'MongoDB'],
  },
  {
    idx: '(s-03)',
    title: 'Interactive\nexperiences.',
    desc: 'Where most devs stop, I start. 3D elements, scroll-driven stories, custom cursors, micro-interactions — the details that make your site feel alive.',
    tags: ['React', 'WebGL', 'Motion', 'Shaders'],
  },
  {
    idx: '(s-04)',
    title: 'MVPs, APIs\n& backends.',
    desc: 'Need to ship an MVP fast, or build a solid backend under an existing product? I design the data model, build the API, and wire it all the way through.',
    tags: ['Express', 'REST', 'PostgreSQL', 'MongoDB'],
  },
]

import ServicesScene from './ServicesScene'

export default function Services() {
  return (
    <section id="services" className="section" style={{ overflow: 'hidden' }}>
      <ServicesScene />
      <div className="section-label" style={{ position: 'relative', zIndex: 1 }}>
        <span className="dot" />
        <span className="num">02 /</span> What I do
      </div>

      <div className="services-grid" style={{ position: 'relative', zIndex: 1 }}>
        {services.map(s => (
          <div key={s.idx} className="service" data-cursor="hover">
            <div className="service-idx">{s.idx}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">
              {s.tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <svg className="arrow-corner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
