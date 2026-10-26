import { useCallback } from 'react'
import { experience } from '../data.js'
import { useRevealChildren, useScrollProgress } from '../hooks/motion.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  const progressRef = useScrollProgress()
  const revealRef = useRevealChildren('.row')
  // one DOM node feeds both hooks
  const setRefs = useCallback((el) => { progressRef.current = el; revealRef.current = el }, [])

  return (
    <section id="experience">
      <SectionHead kicker="Experience" before="Where I've " em="worked" />
      <div className="xp" ref={setRefs}>
        {experience.map((x) => (
          <div className="row" key={x.when}>
            <span className="when">{x.when}</span>
            <div>
              <h3>{x.role}</h3>
              <span className="org">{x.org}</span>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <span className="type">{x.type}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
