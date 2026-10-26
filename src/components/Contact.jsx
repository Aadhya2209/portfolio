import { useRef, useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const mailRef = useRef(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard blocked: select the address so it can be copied by hand
      const range = document.createRange()
      range.selectNodeContents(mailRef.current)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  return (
    <section id="contact">
      <div className="cta">
        <div className="cta-text">
          <div className="kicker">Open to 2027 internships</div>
          <h2>Ready to build something <em>together?</em></h2>
          <p>
            I'm looking for research and software roles in ML, computer vision or full-stack. Also seen at DevFest 2026
            New Delhi and McKinsey.org's Forward Program.
          </p>
          <div className="ctas">
            <span className="pill"><span className="mail" ref={mailRef}>{profile.email}</span></span>
            <button className="copy" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy email'}</button>
            <a className="pill ghost" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
