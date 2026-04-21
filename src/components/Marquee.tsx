const items = ['Design', 'Develop', 'Ship', 'Iterate', 'Design', 'Develop', 'Ship', 'Iterate']

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i}>
            <span className={`item${i % 2 === 1 ? ' alt' : ''}`}>{text}</span>
            <span className="item star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
