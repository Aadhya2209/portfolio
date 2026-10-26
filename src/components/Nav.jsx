import { nav } from '../data.js'
import { useActiveSection } from '../hooks/motion.js'

const ids = nav.map((n) => n.id)

export default function Nav() {
  const active = useActiveSection(ids)
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top">aadhya<span>.</span></a>
        <nav className="links" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : undefined}>{n.label}</a>
          ))}
        </nav>
        <a className="pill solid" href="#contact">Let's talk</a>
      </div>
    </header>
  )
}
