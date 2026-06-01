'use client'
import { useEffect, useRef, useState } from 'react'

const S = `
  .stats-s { background:var(--ink3); padding:0; position:relative; overflow:hidden; }
  .stats-s::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 20% 50%,rgba(43,66,55,.15) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,169,110,.06) 0%,transparent 60%); pointer-events:none; }
  .stats-g { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); position:relative; z-index:1; }
  .stat-i { padding:96px 52px; border-right:1px solid rgba(240,235,225,.05); position:relative; overflow:hidden; transition:background .4s; }
  .stat-i:last-child { border-right:none; }
  .stat-i:hover { background:rgba(240,235,225,.02); }
  .stat-line { position:absolute; top:0; left:0; height:3px; width:0; background:linear-gradient(90deg,var(--gold),var(--forest2)); transition:width .8s .1s cubic-bezier(.22,1,.36,1); }
  .stat-i.counted .stat-line { width:100%; }
  .stat-n { font-family:var(--serif); font-weight:700; font-style:italic; font-size:clamp(80px,10vw,130px); color:var(--chalk); line-height:1; display:flex; align-items:flex-start; text-shadow:0 2px 30px rgba(0,0,0,.5); }
  .stat-sfx { font-family:var(--serif); font-size:.4em; color:var(--gold); line-height:1.5; margin-top:8px; }
  .stat-lbl { font-size:16px; font-weight:500; color:rgba(240,235,225,.6); margin-top:14px; line-height:1.55; letter-spacing:.01em; }
  .stat-src { font-size:10px; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(140,114,82,.55); margin-top:8px; font-family:var(--sans); }
  @media(max-width:768px) { .stats-g { grid-template-columns:1fr; } .stat-i { border-right:none; border-bottom:1px solid rgba(240,235,225,.05); padding:64px 24px; } }
`

interface StatProps { value: number; suffix: string; label: string; source: string; delay?: number }

function StatItem({ value, suffix, label, source, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0)
  const [vis, setVis] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: .2 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!vis) return
    const t = setTimeout(() => {
      const dur=1800, t0=performance.now()
      const tick = (now:number) => {
        const p = Math.min((now-t0)/dur, 1), e = 1-(1-p)**3
        setCount(Math.round(e*value))
        if (p<1) requestAnimationFrame(tick)
        else setCount(value)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(t)
  }, [vis, value, delay])
  return (
    <div ref={ref} className={`stat-i${vis?' counted':''}`}>
      <div className="stat-line" />
      <div className="stat-n"><span>{count}</span><span className="stat-sfx">{suffix}</span></div>
      <div className="stat-lbl">{label}</div>
      <div className="stat-src">{source}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-s">
      <style>{S}</style>
      <div className="stats-g">
        <StatItem value={25}  suffix="×" label="ROI increase — single paid media campaign"         source="E-commerce client, Edmonton · 2023"  delay={0}   />
        <StatItem value={175} suffix="%" label="increase in online store orders within 90 days"     source="Home goods retailer, Alberta · 2024"  delay={120} />
        <StatItem value={100} suffix="+" label="clients across dental, construction, legal & more"  source="Since founding in 2019"               delay={240} />
      </div>
    </section>
  )
}