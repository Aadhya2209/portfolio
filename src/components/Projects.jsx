import { profile, projects } from '../data.js'
import { prefersReducedMotion, useRevealChildren } from '../hooks/motion.js'
import ProjectArt from './ProjectArt.jsx'
import SectionHead from './SectionHead.jsx'

/** Tilt the card toward the cursor and move the spotlight with it. */
function tilt(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left, y = e.clientY - r.top
  el.style.setProperty('--mx', `${x}px`)
  el.style.setProperty('--my', `${y}px`)
  if (prefersReducedMotion()) return
  el.style.setProperty('--ry', `${((x / r.width) - 0.5) * 7}deg`)
  el.style.setProperty('--rx', `${(0.5 - (y / r.height)) * 7}deg`)
}
function untilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

function ProjectCard({ p, index }) {
  const main = p.live || p.repo
  return (
    <article className={`pj pj-${p.size}${p.featured ? ' is-featured' : ''}`} onPointerMove={tilt} onPointerLeave={untilt}>
      <div className="pj-card">
      <div className="pj-art">
        <ProjectArt kind={p.art} />
        <span className="pj-num">{String(index + 1).padStart(2, '0')}</span>
        {p.live && <span className="pj-live"><span className="led" />Live</span>}
      </div>
      <div className="pj-body">
        <div className="pj-top">
          <span className="pj-tag">{p.tag}</span>
          <a className="arrow" href={p.repo} target="_blank" rel="noopener" aria-label={`${p.title} repo on GitHub`}>↗</a>
        </div>
        <h3><a href={main} target="_blank" rel="noopener">{p.title}</a></h3>
        <p>{p.text}</p>
        {(p.tech || p.live) && (
          <span className="tech">
            {p.tech}
            {p.live && <>{p.tech && ' · '}<a className="live" href={p.live} target="_blank" rel="noopener">view live ↗</a></>}
          </span>
        )}
      </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const grid = useRevealChildren()
  return (
    <section id="projects">
      <SectionHead
        kicker="Projects" before="Things I've " em="built"
        aside={<a className="pill ghost" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener">All repos ↗</a>}
      />
      <div className="bento" ref={grid}>
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
      </div>
    </section>
  )
}
