import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = { title: 'The CLEAR Methodology' }

const MTN = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'
const STEPS = [
  { l:'C', t:'Conceptualize',  d:'Develop a clear understanding of brand identity and market positioning. Set precise goals aligned with the business aims.' },
  { l:'L', t:'Lead-Driven',    d:'Target and connect with the intended audience effectively. Every tactic tied back to acquisition and pipeline — no vanity metrics.' },
  { l:'E', t:'Evidence-Based', d:'Data-first decisions from research, A/B testing, and real-time analytics. Engage customers with insight-led messaging.' },
  { l:'A', t:'Adaptive',       d:'Boutique agility — we pivot fast when the market shifts because we own our decisions. Acknowledge established channels while remaining open to emerging ones.' },
  { l:'R', t:'Results',        d:'Continuously measure outcomes, optimize strategies, and expand reach. Transparent reporting and honest conversations.' },
]

const S = `
  .clear-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:2px; background:rgba(240,235,225,.04); border:1px solid rgba(240,235,225,.06); border-radius:1px; overflow:hidden; }
  .clear-cell { background:var(--forest); padding:48px 28px; transition:background .3s; position:relative; overflow:hidden; }
  .clear-cell::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),transparent); transform:scaleX(0); transform-origin:left; transition:transform .4s ease; }
  .clear-cell:hover { background:var(--forest2); }
  .clear-cell:hover::before { transform:scaleX(1); }
  .clear-ltr { font-family:var(--serif); font-size:96px; font-weight:600; font-style:italic; color:rgba(250,248,244,.06); line-height:1; display:block; margin-bottom:20px; transition:color .3s; }
  .clear-cell:hover .clear-ltr { color:rgba(250,248,244,.1); }
  .clear-t { font-family:var(--sans); font-size:12px; font-weight:600; color:rgba(250,248,244,.75); margin-bottom:8px; }
  .clear-d { font-family:var(--serif); font-size:13px; font-style:italic; color:rgba(250,248,244,.38); line-height:1.7; }
  @media(max-width:900px) { .clear-grid { grid-template-columns:1fr 1fr; } }
  @media(max-width:560px) { .clear-grid { grid-template-columns:1fr; } }
`

export default function Process() {
  return (
    <>
      <style>{S}</style>

      <section style={{position:'relative',minHeight:'75vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><img src={MTN} alt="" style={{width:'100%',height:'100%',objectFit:'cover',animation:'kenBurns 22s ease-in-out infinite alternate'}}/><div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.55) 40%,rgba(10,9,8,.15) 100%)'}}/></div>
        <div style={{position:'relative',zIndex:2,padding:'0 52px 72px',maxWidth:1280,margin:'0 auto',width:'100%'}}>
          <div className="rise-1 eyebrow-light">Our Framework</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(60px,10vw,150px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.88,letterSpacing:'-.05em'}}>
            The CLEAR<br/>Methodology.
          </h1>
        </div>
      </section>

      <section className="section" style={{background:'var(--ink2)'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'end',marginBottom:64}}>
            <div>
              <Reveal><div className="eyebrow">The Solution</div></Reveal>
              <Reveal delay={60}><h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(40px,5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em'}}>Introducing CLEAR.</h2></Reveal>
            </div>
            <Reveal dir="right"><p style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.4)',lineHeight:1.8}}>Through our brand and performance hybrid approach, we leave a lasting impression without losing sight of ROI.</p></Reveal>
          </div>
          <div className="clear-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="clear-cell">
                  <span className="clear-ltr">{s.l}</span>
                  <div className="clear-t">{s.t}</div>
                  <p className="clear-d">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{position:'relative',minHeight:'50vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'80px 52px',textAlign:'center'}}>
        <div style={{position:'absolute',inset:0}}><img src={MTN} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:.3,filter:'brightness(.4)'}} /><div style={{position:'absolute',inset:0,background:'rgba(10,9,8,.75)'}} /></div>
        <div style={{position:'relative',zIndex:2,maxWidth:580}}>
          <Reveal dir="up"><h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em',marginBottom:20}}>Work with an agency ahead of the curve.</h2></Reveal>
          <Reveal dir="up" delay={80}><Link href="/get-a-proposal" className="btn btn-g" style={{fontSize:12,padding:'17px 48px'}}>Get a Proposal</Link></Reveal>
        </div>
      </section>
    </>
  )
}