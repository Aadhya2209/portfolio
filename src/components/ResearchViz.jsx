import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks/motion.js'

const GREEN = '#8be65a'

/** Small canvas visuals: a drifting hypergraph, or a cry waveform turning into graph nodes. */
export default function ResearchViz({ mode }) {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const reduce = prefersReducedMotion()
    let W = 0, H = 0, pts = [], t = 0, frame

    const size = () => {
      const r = c.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width; H = r.height
      c.width = W * dpr; c.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      pts = Array.from({ length: 14 }, () => ({
        x: W * (0.2 + 0.75 * Math.random()), y: H * (0.18 + 0.7 * Math.random()), a: Math.random() * 6.28,
      }))
    }
    const P = (i) => {
      const p = pts[i]
      return { x: p.x + Math.cos(t * 0.6 + p.a) * 4, y: p.y + Math.sin(t * 0.8 + p.a) * 4 }
    }
    const hyper = () => {
      const groups = [[0, 1, 2], [2, 3, 4, 5], [6, 7, 8], [8, 9, 10, 11], [11, 12, 13]]
      groups.forEach((g, k) => {
        const ps = g.map(P)
        const cx = ps.reduce((s, p) => s + p.x, 0) / ps.length
        const cy = ps.reduce((s, p) => s + p.y, 0) / ps.length
        ps.sort((a, b) => Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx))
        ctx.beginPath()
        ps.forEach((p, j) => (j ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)))
        ctx.closePath()
        ctx.fillStyle = k % 2 ? 'rgba(139,230,90,.10)' : 'rgba(139,230,90,.18)'
        ctx.fill()
        ctx.strokeStyle = 'rgba(139,230,90,.5)'
        ctx.lineWidth = 1
        ctx.stroke()
      })
      pts.forEach((_, i) => {
        const p = P(i)
        ctx.beginPath(); ctx.arc(p.x, p.y, 3.2, 0, 7)
        ctx.fillStyle = i % 4 ? GREEN : '#f1f5f0'; ctx.fill()
      })
    }
    const wave = () => {
      const mid = H * 0.58, n = 90, nodes = []
      ctx.beginPath()
      for (let i = 0; i <= n; i++) {
        const x = W * 0.06 + i * ((W * 0.88) / n)
        const env = Math.sin((Math.PI * i) / n) * Math.pow(Math.sin(i * 0.21), 2)
        const y = mid + Math.sin(i * 1.3 + t * 2) * env * H * 0.28
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)
        if (i % 9 === 4) nodes.push({ x, y })
      }
      ctx.strokeStyle = 'rgba(162,178,168,.55)'; ctx.lineWidth = 1.4; ctx.stroke()
      ctx.strokeStyle = 'rgba(139,230,90,.45)'; ctx.lineWidth = 1
      for (let a = 0; a < nodes.length; a++)
        for (let b = a + 1; b < Math.min(a + 3, nodes.length); b++) {
          ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke()
        }
      nodes.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 3.4, 0, 7); ctx.fillStyle = GREEN; ctx.fill() })
    }
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      mode === 'hyper' ? hyper() : wave()
      t += 0.016
      if (!reduce) frame = requestAnimationFrame(draw)
    }
    const onResize = () => { size(); if (reduce) draw() }

    size(); draw()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', onResize) }
  }, [mode])

  return <canvas ref={ref} aria-hidden="true" />
}
