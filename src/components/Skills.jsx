import { certifications, education, stack } from '../data.js'
import { spotlight, useRevealChildren } from '../hooks/motion.js'
import CountUp from './CountUp.jsx'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  const split = useRevealChildren()
  const edu = useRevealChildren()
  return (
    <section id="skills">
      <SectionHead kicker="Skills & credentials" before="The " em="toolkit" />
      <div className="split" ref={split}>
        <div className="box" onPointerMove={spotlight}>
          <h3>Tech stack</h3>
          <dl className="kit">
            {stack.map((g) => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd>{g.items.map((i) => <span key={i}>{i}</span>)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="box" onPointerMove={spotlight}>
          <h3>Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}<span className="iss">{c.issuer}</span></span>
                <time>{c.date}</time>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="edu" ref={edu}>
        {education.map((e) => (
          <div key={e.label}><b><CountUp value={e.score} /></b><small>{e.label}</small></div>
        ))}
      </div>
    </section>
  )
}
