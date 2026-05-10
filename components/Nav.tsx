'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const PHONE = '+1-587-404-0050'
const TEL   = 'tel:+15874040050'

const links = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process',  href: '/process' },
  { label: 'Results',  href: '/case-studies' },
  { label: 'Blog',     href: '/blog' },
]

const NAV_STYLES = `
  .jav-nav { position:fixed;top:0;left:0;right:0;z-index:800;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;border-bottom:1px solid transparent;transition:all .4s; }
  .jav-nav.scrolled { background:rgba(10,9,8,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom-color:rgba(201,169,110,.08); }
  .jav-nav-link { font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:rgba(240,235,225,.35);text-decoration:none;padding:10px 14px;transition:color .2s; }
  .jav-nav-link:hover { color:var(--parchment); }
  .jav-phone { font-size:11px;font-weight:500;color:rgba(240,235,225,.38);text-decoration:none;display:flex;align-items:center;gap:6px;letter-spacing:.03em;transition:color .2s; }
  .jav-phone:hover { color:var(--gold); }
  .mob-menu { position:fixed;inset:0;background:var(--ink);z-index:700;display:flex;flex-direction:column;padding-top:72px; }
  .mob-link { font-family:var(--serif);font-size:32px;font-weight:600;font-style:italic;color:var(--parchment);text-decoration:none;padding:20px 24px;border-bottom:1px solid rgba(240,235,225,.06);display:block; }
  #mob-cta { display:none;position:fixed;bottom:0;left:0;right:0;z-index:600;background:var(--forest);padding:12px 16px;transform:translateY(100%);transition:transform .35s cubic-bezier(.22,1,.36,1); }
  #mob-cta.show { transform:translateY(0); }
  #mob-cta a { display:block;text-align:center;font-family:var(--sans);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--chalk);text-decoration:none;background:rgba(255,255,255,.1);padding:15px;border-radius:1px; }
  @media(max-width:900px) { .jav-nav { padding:0 20px; } .nav-desktop { display:none; } #mob-cta { display:block; } }
`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  useEffect(() => { if (open) setOpen(false) }, [path, open])

  return (
    <>
      <style>{NAV_STYLES}</style>
      <nav className="jav-nav" id="jav-nav">
        <Link href="/" style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:600, fontStyle:'italic', color:'var(--parchment)', textDecoration:'none' }}>
          <em style={{ color:'var(--gold)', fontStyle:'inherit' }}>J</em>aver
        </Link>

        <ul className="nav-desktop" style={{ display:'flex', alignItems:'center', gap:0, listStyle:'none' }}>
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="jav-nav-link">{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-desktop" style={{ display:'flex', alignItems:'center', gap:18 }}>
          <a href={TEL} className="jav-phone">
            <Phone size={12} style={{ color:'var(--forest2)' }} />
            {PHONE}
          </a>
          <Link href="/get-a-proposal" className="btn btn-g btn-sm">Get a Proposal</Link>
        </div>

        <button
          style={{ display:'none', background:'none', border:'none', color:'var(--parchment)', cursor:'pointer' }}
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mob-menu">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="mob-link">{l.label}</Link>
          ))}
          <div style={{ padding:'24px 24px 12px' }}>
            <a href={TEL} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'var(--sans)', fontSize:13, fontWeight:600, color:'rgba(240,235,225,.5)', textDecoration:'none', border:'1px solid rgba(240,235,225,.12)', padding:'13px 20px', borderRadius:1, marginBottom:12 }}>
              <Phone size={14} />{PHONE}
            </a>
            <Link href="/get-a-proposal" className="btn btn-g" style={{ display:'block', textAlign:'center', width:'100%' }}>
              Get a Free Proposal
            </Link>
          </div>
        </div>
      )}

      <div id="mob-cta">
        <Link href="/get-a-proposal">Get a Free Proposal — 2 Minutes</Link>
      </div>

      <style>{`
        @media(max-width:900px) {
          .nav-mobile-toggle { display:flex !important; }
          .nav-desktop { display:none !important; }
        }
      `}</style>
    </>
  )
}