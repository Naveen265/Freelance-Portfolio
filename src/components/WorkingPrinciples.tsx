const kvs = [
  { k: 'Typical engagement', v: '2–10 weeks' },
  { k: 'Working hours',      v: 'Mon–Fri · IST' },
  { k: 'Response time',      v: '< 24 hours', green: true },
  { k: 'Working globally',   v: 'Yes' },
]

export default function WorkingPrinciples() {
  return (
    <section className="section">
      <div className="callout-grid">
        <div>
          <blockquote className="callout-quote">
            <span className="callout-quote-mark">"</span>
            I build things I'd want to <em>use</em>: fast, clear, and quietly
            considered. No bloat, no trend-chasing, no surprises in the codebase.
          </blockquote>
          <div className="callout-attr">
            <div className="callout-avatar" />
            <div>
              <div>Naveen John Kennedy · Full-stack Developer</div>
              <div style={{ color: 'var(--fg-faint)', marginTop: 2 }}>Freelance, innestolabs · 2026</div>
            </div>
          </div>
        </div>

        <div className="callout-side">
          {kvs.map(item => (
            <div key={item.k} className="callout-kv">
              <span className="k">{item.k}</span>
              <span style={item.green ? { color: '#00ff88' } : undefined}>{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
