import StackScene from './StackScene'

const stackList = [
  { name: 'React',        cat: 'UI' },
  { name: 'TypeScript',   cat: 'language' },
  { name: 'Tailwind',     cat: 'styles' },
  { name: 'Node.js',      cat: 'runtime' },
  { name: 'Express',      cat: 'backend' },
  { name: 'PostgreSQL',   cat: 'database' },
  { name: 'MongoDB',      cat: 'database' },
  { name: 'REST APIs',    cat: 'integration' },
  { name: 'AWS',          cat: 'cloud' },
  { name: 'Claude',       cat: 'AI pair' },
  { name: 'Claude Design',cat: 'AI design' },
  { name: 'Git',          cat: 'version' },
  { name: 'WebSockets',   cat: 'realtime' },
]

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-label">
        <span className="dot" />
        <span className="num">03 /</span> Tech stack
      </div>

      <div className="stack-grid">
        <div className="stack-canvas-wrap">
          <StackScene />
        </div>

        <div className="stack-copy">
          <h2>Modern tools,<br />handpicked.<em>*</em></h2>
          <p>
            I stay picky about what I use so you don't have to. Every tool here has
            earned its place through a dozen shipped projects. Drag the sphere.
          </p>
          <div className="stack-list">
            {stackList.map((item, i) => (
              <div key={item.name} className={`stack-list-row ${i % 2 === 0 ? 'odd' : 'even'}`}>
                <span>{item.name}</span>
                <span className="cat">{item.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
