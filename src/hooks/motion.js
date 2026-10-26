import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Reveals the direct children of a container as they scroll into view.
 * Children already on screen at load stay visible, so the first frame is never empty.
 */
export function useRevealChildren(selector = ':scope > *') {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const vh = window.innerHeight
    const items = [...root.querySelectorAll(selector)].filter((el) => el.getBoundingClientRect().top >= vh)
    items.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--d', `${(i % 3) * 0.08}s`)
    })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    )
    items.forEach((el) => io.observe(el))
    const safety = setTimeout(() => items.forEach((el) => el.classList.add('in')), 6000)
    return () => { io.disconnect(); clearTimeout(safety) }
  }, [selector])
  return ref
}

/** True once the element has entered the viewport. */
export function useInView(options = { threshold: 0.4 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

/** Which section id is currently under the reading line. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      const y = window.scrollY + window.innerHeight * 0.35
      let current = null
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActive(current)
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

/** 0 to 1 progress of an element passing a line at 70% of the viewport. */
export function useScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let ticking = false
    const update = () => {
      ticking = false
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.7 - r.top) / r.height
      el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3))
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return ref
}

/** Slow vertical drift of an element while the page scrolls. */
export function useParallax(factor = 0.18) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const mobile = window.matchMedia('(max-width:720px)')
    let ticking = false
    const update = () => {
      ticking = false
      const y = Math.min(window.scrollY, 900) * factor
      el.style.transform = `${mobile.matches ? 'translateX(-58%) ' : ''}translateY(${y}px)`
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    mobile.addEventListener?.('change', update)
    return () => { window.removeEventListener('scroll', onScroll); mobile.removeEventListener?.('change', update) }
  }, [factor])
  return ref
}

/** Pointer handler that feeds the cursor spotlight on cards. */
export function spotlight(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
