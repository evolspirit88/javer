import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

const TEL   = 'tel:+15874040050'
const PHONE = '+1-587-404-0050'
const EMAIL = 'hello@javer.ca'

const SERVICES = [
  ['Web Design',       '/services/web-design'],
  ['Digital Strategy', '/services/digital-strategy'],
  ['Google Ads',       '/services/google-ads'],
  ['Meta Advertising', '/services/meta'],
  ['SEO',              '/services/seo'],
  ['Analytics',        '/services/advanced-analytics'],
]
const COMPANY = [
  ['About',        '/about'],
  ['Process',      '/process'],
  ['Case Studies', '/case-studies'],
  ['Blog',         '/blog'],
]

const S = `
  .f-root { background:#080706; border-top:1px solid rgba(240,235,225,.03); }
  .f-cta { background:var(--forest); padding:32px 52px; position:relative; overflow:hidden; }
  .f-cta::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(201,169,110,.08) 0%,transparent 60%); }
  .f-cta-in { max-width:1280px; margin:0 auto; position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
  .f-cta-h { font-family:var(--serif); font-size:clamp(22px,2.5vw,38px); font-weight:600; font-style:italic; color:var(--chalk); line-height:1.05; letter-spacing:-.02em; }
  .f-cta-sub { font-size:13px; font-weight:300; color:rgba(250,248,244,.4); margin-top:5px; }
  .f-ph-btn { display:flex; align-items:center; gap:7px; text-decoration:none; font-size:12px; font-weight:500; color:rgba(250,248,244,.5); border:1px solid rgba(250,248,244,.15); padding:12px 18px; border-radius:1px; transition:all .2s; }
  .f-ph-btn:hover { color:var(--chalk); border-color:rgba(250,248,244,.4); }
  .f-grid { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:2.2fr 1fr 1fr 1.3fr; gap:56px; padding:56px 52px 48px; border-bottom:1px solid rgba(240,235,225,.04); }
  .f-logo { font-family:var(--serif); font-size:24px; font-weight:600; font-style:italic; color:var(--parchment); display:block; margin-bottom:14px; text-decoration:none; }
  .f-logo em { color:var(--gold); font-style:inherit; }
  .f-tag { font-size:13px; font-weight:300; color:rgba(240,235,225,.25); line-height:1.75; margin-bottom:22px; }
  .f-contact { display:flex; flex-direction:column; gap:9px; margin-bottom:22px; }
  .f-cl { font-size:12px; color:rgba(240,235,225,.25); text-decoration:none; display:flex; align-items:center; gap:7px; transition:color .2s; }
  .f-cl:hover { color:rgba(240,235,225,.6); }
  .f-socs { display:flex; gap:6px; }
  .fsoc { width:33px; height:33px; border:1px solid rgba(240,235,225,.07); border-radius:1px; display:flex; align-items:center; justify-content:center; color:rgba(240,235,225,.25); font-size:10px; font-weight:600; text-decoration:none; transition:all .2s; font-family:var(--sans); }
  .fsoc:hover { border-color:var(--forest2); color:var(--forest2); }
  .f-col h5 { font-size:9px; font-weight:700; letter-spacing:.3em; text-transform:uppercase; color:rgba(140,114,82,.5); margin-bottom:16px; font-family:var(--sans); }
  .f-col ul { list-style:none; display:flex; flex-direction:column; gap:8px; }
  .f-col a { font-size:12px; font-weight:300; color:rgba(240,235,225,.25); text-decoration:none; transition:color .2s; }
  .f-col a:hover { color:rgba(240,235,225,.65); }
  .f-bk { display:block; margin-top:14px; text-align:center; font-size:9px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:rgba(240,235,225,.25); border:1px solid rgba(240,235,225,.06); padding:11px; border-radius:1px; text-decoration:none; transition:all .2s; font-family:var(--sans); }
  .f-bk:hover { border-color:rgba(240,235,225,.18); color:rgba(240,235,225,.55); }
  .f-bottom { max-width:1280px; margin:0 auto; padding:24px 52px 28px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:10px; font-weight:300; color:rgba(240,235,225,.15); letter-spacing:.04em; }
  .f-bottom strong { color:var(--forest2); font-weight:600; letter-spacing:.2em; }
  @media(max-width:900px) { .f-grid { grid-template-columns:1fr 1fr; gap:36px; padding:48px 24px 40px; } .f-cta { padding:24px 20px; } .f-bottom { padding:24px 20px; } }
  @media(max-width:560px) { .f-grid { grid-template-columns:1fr; } }
`

export default function Footer() {
  return (
    <footer className="f-root">
      <style>{S}</style>
      <div className="f-cta">
        <div className="f-cta-in">
          <div>
            <p className="f-cta-h">Ready to grow? Let&apos;s talk.</p>
            <p className="f-cta-sub">Free proposal — no obligation, no templates.</p>
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'center', flexWrap:'wrap' }}>
            <a href={TEL} className="f-ph-btn">
              <Phone size={12} />{PHONE}
            </a>
            <Link href="/get-a-proposal" className="btn btn-chalk btn-sm">Get a Proposal →</Link>
          </div>
        </div>
      </div>

      <div className="f-grid">
        <div>
          <Link href="/" className="f-logo"><em>J</em>aver</Link>
          <p className="f-tag">Performance digital marketing.<br />Edmonton &amp; Calgary, Alberta.<br />Data-driven. ROI-obsessed.</p>
          <div className="f-contact">
            <a href={TEL} className="f-cl"><Phone size={11} />{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="f-cl"><Mail size={11} />{EMAIL}</a>
          </div>
          <div className="f-socs">
            {['f','in','ig','tk'].map(s => <a key={s} href="#" className="fsoc">{s}</a>)}
          </div>
        </div>
        <div className="f-col">
          <h5>Services</h5>
          <ul>{SERVICES.map(([l,h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
        </div>
        <div className="f-col">
          <h5>Company</h5>
          <ul>{COMPANY.map(([l,h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
        </div>
        <div className="f-col">
          <h5>Contact</h5>
          <ul>
            <li><Link href="/get-a-proposal">Get a Proposal</Link></li>
            <li><a href={TEL}>{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><span style={{ color:'rgba(240,235,225,.25)', fontSize:12 }}>Edmonton, AB</span></li>
            <li><span style={{ color:'rgba(240,235,225,.25)', fontSize:12 }}>Calgary, AB</span></li>
          </ul>
          <a href="https://calendly.com/javer" target="_blank" rel="noopener noreferrer" className="f-bk">📅 Book a Discovery Call</a>
        </div>
      </div>

      <div className="f-bottom">
        <span>© 2025 Javer Digital Marketing Inc. All rights reserved.</span>
        <strong>JAVER.CA</strong>
      </div>
    </footer>
  )
}