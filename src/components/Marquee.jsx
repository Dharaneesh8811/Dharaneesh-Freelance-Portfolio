export default function Marquee({ items }) {
  // Duplicate the list once so the track can loop seamlessly at -50%.
  const loop = [...items, ...items]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
