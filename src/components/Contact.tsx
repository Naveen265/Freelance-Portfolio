import { useState } from 'react'
import ContactScene from './ContactScene'

const budgets      = ['< $2K', '$2K — $5K', '$5K — $10K', '$10K+', 'Not sure yet']
const projectTypes = [
  'Marketing site / landing page',
  'Web app / dashboard',
  'E-commerce',
  'Interactive / 3D experience',
  'MVP for a startup',
  'Backend / API',
  'Maintenance & support',
  'Something else',
]

export default function Contact() {
  const [budget, setBudget]         = useState('')
  const [status, setStatus]         = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form    = e.currentTarget
    const data    = new FormData(form)
    const name    = (data.get('name')    as string || '').trim()
    const email   = (data.get('email')   as string || '').trim()
    const message = (data.get('message') as string || '').trim()

    if (!name || !email || !message) {
      setStatusType('error')
      setStatus('Please fill in name, email and a message.')
      return
    }

    setStatus('Sending…')
    setStatusType('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:   'efbd9bd5-b618-46c9-a54f-bce3e807670e',
          subject:      `New project inquiry — ${name}`,
          from_name:    name,
          name,
          email,
          company:      data.get('company') || '—',
          project_type: data.get('project_type') || '—',
          budget:       budget || '—',
          message,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatusType('success')
        setStatus("Message sent! I'll be in touch within 24 hours.")
        form.reset()
        setBudget('')
      } else {
        throw new Error(json.message)
      }
    } catch {
      setStatusType('error')
      setStatus('Something went wrong. Email naveenjohnken@gmail.com directly.')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <ContactScene />

      <div className="contact-inner">
        <div className="section-label">
          <span className="dot" />
          <span className="num">06 /</span> Let's build
        </div>

        <h2 className="contact-heading">
          Got an <em>idea?</em><br />Let's ship it.
        </h2>

        <div className="contact-layout">
          {/* ── Form ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label>Your name <span className="req">*</span></label>
              <input type="text" name="name" placeholder="Jane Doe" required data-cursor="hover" />
            </div>
            <div className="field">
              <label>Email <span className="req">*</span></label>
              <input type="email" name="email" placeholder="you@company.com" required data-cursor="hover" />
            </div>
            <div className="field">
              <label>Company / Project</label>
              <input type="text" name="company" placeholder="Optional" data-cursor="hover" />
            </div>
            <div className="field">
              <label>Project type</label>
              <select name="project_type" data-cursor="hover">
                {projectTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Estimated budget (USD)</label>
              <div className="budget-pills">
                {budgets.map(b => (
                  <button
                    key={b}
                    type="button"
                    data-cursor="hover"
                    className={`budget-pill${budget === b ? ' active' : ''}`}
                    onClick={() => setBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Tell me about your project <span className="req">*</span></label>
              <textarea
                name="message"
                placeholder="What are you building, what's the timeline, what does success look like?"
                required
                data-cursor="hover"
              />
            </div>

            <button type="submit" className="submit-btn" data-cursor="hover">
              <span style={{ width: 8, height: 8, background: 'var(--bg)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
              Send message
              <span>→</span>
            </button>

            {status && <div className={`form-status ${statusType}`}>{status}</div>}
          </form>

          {/* ── Info panel ── */}
          <div>
            <div className="contact-info-grid">
              <div className="contact-info-col">
                <div className="label">Email</div>
                <a href="mailto:naveenjohnken@gmail.com" data-cursor="hover">naveenjohnken@gmail.com</a>
              </div>
              <div className="contact-info-col">
                <div className="label">Socials</div>
                <a href="https://www.linkedin.com/in/naveen-j-322b86210/" target="_blank" rel="noopener" data-cursor="hover">LinkedIn ↗</a>
              </div>
              <div className="contact-info-col">
                <div className="label">Based in</div>
                <p>India · Remote-first</p>
                <p style={{ color: 'var(--fg-dim)' }}>Working globally</p>
              </div>
              <div className="contact-info-col">
                <div className="label">Availability</div>
                <p style={{ color: 'var(--accent)' }}>Mon–Fri · IST</p>
                <p style={{ color: 'var(--fg-dim)' }}>Taking new work</p>
              </div>
            </div>

            <div className="contact-next">
              <div className="next-label">What happens next</div>
              <p>— I reply within 24 hours (weekdays).</p>
              <p>— We jump on a 20-minute intro call to scope the project.</p>
              <p>— I send a quote + timeline within 3 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
