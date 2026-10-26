import { services } from '../data.js'
import { spotlight, useRevealChildren } from '../hooks/motion.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Services() {
  const grid = useRevealChildren()
  return (
    <section id="about">
      <SectionHead
        kicker="What I do" before="Research depth, " em="builder" after=" instincts."
        aside={<p>Three things I spend my time on, and how they connect.</p>}
      />
      <div className="svc" ref={grid}>
        {services.map((s) => (
          <article className="card" key={s.title} onPointerMove={spotlight}>
            <div className="ico"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
