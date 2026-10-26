import { useEffect, useState } from 'react'
import { useInView, prefersReducedMotion } from '../hooks/motion.js'

/** Counts a number like "7.5" or "88.8%" up from zero when it comes into view. */
export default function CountUp({ value, duration = 1100 }) {
  const end = parseFloat(value)
  const suffix = value.endsWith('%') ? '%' : ''
  const decimals = (value.replace('%', '').split('.')[1] || '').length
  const [ref, inView] = useInView()
  const [shown, setShown] = useState(value)

  useEffect(() => {
    if (!inView || Number.isNaN(end) || prefersReducedMotion()) return
    let start = null
    let frame
    const step = (t) => {
      start ??= t
      const k = Math.min(1, (t - start) / duration)
      setShown((end * (1 - Math.pow(1 - k, 3))).toFixed(decimals) + suffix)
      if (k < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView])

  return <span ref={ref}>{shown}</span>
}
