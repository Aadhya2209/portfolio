import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
      <nav>
        <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        <a href="#top">Back to top ↑</a>
      </nav>
    </footer>
  )
}
