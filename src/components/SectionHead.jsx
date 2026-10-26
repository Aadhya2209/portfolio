/** Kicker + heading with one highlighted word. Pass the highlight as `em`. */
export default function SectionHead({ kicker, before = '', em, after = '', aside }) {
  return (
    <div className="head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{before}<em>{em}</em>{after}</h2>
      </div>
      {aside}
    </div>
  )
}
