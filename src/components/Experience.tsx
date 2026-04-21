const jobs = [
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

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">
        <span className="dot" />
        <span className="num">05 /</span> Experience
      </div>

      <div className="experience-grid">
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
