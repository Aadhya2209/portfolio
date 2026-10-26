import { research } from '../data.js'
import { spotlight, useRevealChildren } from '../hooks/motion.js'
import ResearchViz from './ResearchViz.jsx'
import SectionHead from './SectionHead.jsx'

export default function Research() {
  const grid = useRevealChildren()
  return (
    <div className="band">
      <section id="research" className="wrap">
        <SectionHead
          kicker="Research" before="Work at " em="IIT Jammu"
          aside={<p>Two research internships, both on learning from structure: how parts of an image or a signal relate to each other.</p>}
        />
        <div className="papers" ref={grid}>
          {research.map((r) => (
            <article className="paper" key={r.title} onPointerMove={spotlight}>
              <div className="viz">
                <span className={`status${r.done ? ' done' : ''}`}>{r.status}</span>
                <ResearchViz mode={r.viz} />
              </div>
              <div className="body">
                <span className="date">{r.date}</span>
                <h3>{r.title}</h3>
                <p className="q">{r.question}</p>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
