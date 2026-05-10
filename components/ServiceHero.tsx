import Link from 'next/link'

interface Props { eyebrow:string; title:string; subtitle:string; photo:string; ctaLabel?:string }

const S = `
  .sh { position:relative; min-height:75vh; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; }
  .sh-bg { position:absolute; inset:0; }
  .sh-bg img { width:100%; height:100%; object-fit:cover; filter:brightness(.6) contrast(1.05); }
  .sh-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.65) 40%,rgba(10,9,8,.2) 100%),linear-gradient(100deg,rgba(10,9,8,.55) 0%,transparent 55%); }
  .sh-content { position:relative; z-index:2; padding:0 52px 64px; max-width:1280px; margin:0 auto; width:100%; }
  .sh-bc { display:flex; align-items:center; gap:8px; font-size:11px; font-weight:500; color:rgba(240,235,225,.25); margin-bottom:20px; font-family:var(--sans); }
  .sh-bc a { color:inherit; text-decoration:none; transition:color .2s; }
  .sh-bc a:hover { color:rgba(240,235,225,.6); }
  .sh-title { font-family:var(--serif); font-size:clamp(52px,8vw,110px); font-weight:600; font-style:italic; color:var(--parchment); line-height:.88; letter-spacing:-.04em; margin-bottom:24px; }
  .sh-div { width:100%; height:1px; background:linear-gradient(90deg,rgba(201,169,110,.4),rgba(201,169,110,.1) 40%,transparent); margin-bottom:28px; }
  .sh-sub { font-family:var(--serif); font-size:clamp(17px,2vw,24px); font-style:italic; color:rgba(240,235,225,.5); line-height:1.5; max-width:580px; margin-bottom:32px; }
  .sh-acts { display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
  @media(max-width:768px) { .sh-content { padding:0 20px 48px; } }
`

export default function ServiceHero({ eyebrow, title, subtitle, photo, ctaLabel = 'Get a Free Audit' }: Props) {
  return (
    <section className="sh">
      <style>{S}</style>
      <div className="sh-bg">
        <img src={photo} alt={title} />
      </div>
      <div className="sh-ov" />
      <div className="sh-content">
        <div className="sh-bc">
          <Link href="/">Home</Link><span style={{opacity:.3}}>/</span>
          <Link href="/services">Services</Link><span style={{opacity:.3}}>/</span>
          <span style={{color:'rgba(201,169,110,.7)'}}>{title}</span>
        </div>
        <div className="eyebrow-light">{eyebrow}</div>
        <h1 className="sh-title">{title}</h1>
        <div className="sh-div" />
        <p className="sh-sub">{subtitle}</p>
        <div className="sh-acts">
          <Link href="/get-a-proposal" className="btn btn-g">{ctaLabel}</Link>
          <Link href="/services" className="btn btn-o" style={{fontSize:10}}>← All Services</Link>
        </div>
      </div>
    </section>
  )
}