import { tickerSkills } from '../data.js'

function Sequence({ hidden }) {
  return (
    <div className="seq" aria-hidden={hidden || undefined}>
      {tickerSkills.map((s) => (
        <span key={s} style={{ display: 'contents' }}>
          <span>{s}</span><i aria-hidden="true">✦</i>
        </span>
      ))}
    </div>
  )
}

/** Endless skills strip. Two identical sequences slide left by 50% for a seamless loop. */
export default function Ticker() {
  return (
    <div className="ticker" aria-label="Skills">
      <div className="track">
        <Sequence />
        <Sequence hidden />
      </div>
    </div>
  )
}
