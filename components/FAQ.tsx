'use client'
import { useState } from 'react'

interface Item { q: string; a: string }

const S = `
  .faq-item { border-bottom:1px solid var(--line2); }
  .faq-q { width:100%; text-align:left; background:none; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:22px 0; gap:20px; font-family:var(--serif); font-style:italic; font-size:18px; font-weight:600; color:var(--text2); transition:color .25s; }
  .faq-q:hover { color:var(--text); }
  .faq-icon { flex-shrink:0; width:28px; height:28px; border:1.5px solid var(--line); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:300; line-height:1; transition:all .3s; color:var(--text3); }
  .faq-icon.open { background:var(--forest); border-color:var(--forest); color:var(--chalk); transform:rotate(45deg); }
  .faq-a { overflow:hidden; transition:max-height .45s ease, padding .3s; font-family:var(--sans); font-size:15px; font-weight:400; color:var(--text3); line-height:1.8; }
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
            <span className={`faq-icon${open === i ? ' open' : ''}`}>+</span>
          </button>
          <div
            className="faq-a"
            style={{ maxHeight: open === i ? '400px' : '0', paddingBottom: open === i ? '22px' : '0' }}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}
