'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface Item { q: string; a: string }
const S = `
  .faq-item { border-bottom:1px solid rgba(240,235,225,.06); }
  .faq-q { width:100%; text-align:left; background:none; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:22px 0; gap:20px; font-style:italic; color:rgba(240,235,225,.6); transition:color .25s; font-size:17px; font-family:var(--serif); }
  .faq-q:hover { color:var(--parchment); }
  .faq-icon { flex-shrink:0; width:27px; height:27px; border:1px solid rgba(240,235,225,.15); border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all .3s; color:rgba(240,235,225,.35); }
  .faq-icon.open { background:var(--forest); border-color:var(--forest); color:var(--chalk); }
  .faq-a { overflow:hidden; transition:max-height .45s ease,padding .3s; font-size:14px; font-style:italic; color:rgba(240,235,225,.4); line-height:1.8; font-family:var(--serif); }
`
export default function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div>
      <style>{S}</style>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <span className={`faq-icon${open === i ? ' open' : ''}`}>
              {open === i ? <Minus size={13} /> : <Plus size={13} />}
            </span>
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? '400px' : '0', paddingBottom: open === i ? '20px' : '0' }}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}