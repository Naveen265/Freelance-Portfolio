const jobs = [
  {
    period: 'Mar 2026 —\nPresent',
    years: '7 mos',
    role: 'Founder & Full-Stack Developer',
    company: 'Innestolabs',
    type: 'MSME-registered studio',
    location: 'Chennai, India',
    desc: 'Founded and Udyam-registered Innestolabs, an independent web development studio. I personally own client scoping, technical architecture, implementation, delivery, pricing, and contracts — from lead-generation websites to Site Ledger (siteledger.innestolabs.com), a construction management SaaS covering labour attendance, payroll, site-level inventory, and equipment tracking.',
    achievements: [
      'Designed and shipped a production website with an interactive cost estimator for a construction and interiors firm, built to qualify and capture inbound leads.',
      'Scoping and building a multi-role progressive web app (customer ordering, shop manager, business owner, and delivery rider) for a multi-location retail business.',
      'Building Site Ledger — labour attendance, payroll, inventory, and equipment tracking for small builders underserved by existing tools.',
    ],
  },
  {
    period: 'Sep 2025 —\nFeb 2026',
    years: '6 mos',
    role: 'Senior Software Engineer',
    company: 'Zeb',
    type: 'Full-time',
    location: 'Chennai, India · On-site',
    desc: 'Led a frontend team of 5, focused on a client-facing logistics platform. Owned the frontend architecture and coding standards across React, JavaScript, and TypeScript applications — significantly improving maintainability and scalability.',
    achievements: [
      'Ran regular code reviews and mentored developers on best practices, lifting overall engineering standards.',
      'Led advanced UI features including dashboards and live-update modules, improving UX and operational efficiency.',
      'Coordinated full-stack development efforts, ensuring seamless integration with backend services and REST APIs.',
    ],
  },
  {
    period: 'Feb 2023 —\nAug 2025',
    years: '2 yrs 7 mos',
    role: 'Software Engineer',
    company: 'AVASOFT',
    type: 'Full-time',
    location: 'Chennai, India',
    desc: 'Built and maintained complex web applications with React, TypeScript, HTML, and CSS. Developed REST APIs using Node.js and Express.js for business workflows and reporting, wrote Jest unit tests for reliability, and drove Agile/Scrum delivery with CI/CD.',
    achievements: [
      'Shipped multiple enterprise applications, improving functionality and user experience across product lines.',
      'Drove performance work via code refactoring and lazy loading — measurably faster, more maintainable apps.',
      'Resolved stubborn UI/API issues, collaborating with DevOps for smooth production releases.',
    ],
  },
]

import ExperienceScene from './ExperienceScene'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ overflow: 'hidden' }}>
      <ExperienceScene />
      <div className="section-label" style={{ position: 'relative', zIndex: 1 }}>
        <span className="dot" />
        <span className="num">05 /</span> Experience
      </div>

      <div className="experience-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="experience-heading">
          Where I've<br /><em>built.</em>
        </div>

        <div className="exp-list">
          {jobs.map((job, i) => (
            <div key={i} className="exp-item">
              <div className="exp-period">
                {job.period}
                <span className="exp-period-years">{job.years}</span>
              </div>
              <div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">
                  <span>{job.company}</span>
                  <span className="sep">·</span>
                  <span>{job.type}</span>
                  <span className="sep">·</span>
                  <span className="loc">{job.location}</span>
                </div>
                <p className="exp-desc">{job.desc}</p>
                <ul className="exp-achievements">
                  {job.achievements.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
