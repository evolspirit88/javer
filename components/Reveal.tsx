'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props { children: ReactNode; className?: string; delay?: number; dir?: 'up'|'left'|'right'|'scale' }

export default function Reveal({ children, className = '', delay = 0, dir = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const cls = { up:'reveal', left:'reveal-l', right:'reveal-r', scale:'reveal-s' }[dir]
    el.classList.add(cls)
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('on'), delay); obs.disconnect() }
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, dir])
  return <div ref={ref} className={className}>{children}</div>
}