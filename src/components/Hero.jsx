import heroImg from '../assets/hero-ai.webp'
import { profile, stats } from '../data.js'
import { useParallax } from '../hooks/motion.js'
import CountUp from './CountUp.jsx'

export default function Hero() {
  const imgRef = useParallax(0.18)
  return (
    <section className="hero-bleed" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <img ref={imgRef} src={heroImg} alt="" width="1280" height="717" fetchpriority="high" decoding="async" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero">
        <div className="hero-in">
          <span className="chip"><span className="led" />Research Intern at IIT Jammu</span>
          <h1>Building <em>intelligent</em> systems that see and hear.</h1>
          <p className="lede">
            I'm Aadhya, a computer engineering student working on <strong>graph and hypergraph neural networks</strong> for
            vision and audio, and a full-stack developer who turns models into usable products.
          </p>
          <div className="ctas">
            <a className="pill solid" href="#research">View my research →</a>
            <a className="pill ghost" href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b><CountUp value={s.value} />{s.suffix && <span>{s.suffix}</span>}</b>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
