import type { Metadata } from 'next'
import Stats from '@/components/Stats'
import Reveal from '@/components/Reveal'
import PhotoStrip from '@/components/PhotoStrip'

export const metadata: Metadata = { title: 'Case Studies' }

const MTN = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'

const TESTIMONIALS = [
  { photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'Since beginning my partnership with Javer in 2020, the impact on my business has been transformative. I am inundated with more leads than I can handle — a great problem to have.', name:'Danielle Goodman', co:'DTT Services, Edmonton' },
  { photo:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'My accounting firm had been relying on referrals and I was skeptical of digital marketing. Their team introduced me to the power of data-driven strategy. The results exceeded every expectation.', name:'Nnenna Ibeakanma', co:'Diamond Accounting, Alberta' },
  { photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'Javer is a perfect example of a professional, result-oriented digital marketing agency. Their knowledge and skills are exceptional. They genuinely care about outcomes, not just deliverables.', name:'Minas H.', co:'Client, Calgary' },
]

const RESULTS = [
  { stat:'25×',  label:'increase in ROI',           sub:'Single campaign, e-commerce client' },
  { stat:'175%', label:'increase in online orders',  sub:'E-commerce — paid media + CRO' },
  { stat:'+60%', label:'increase in new leads',       sub:'3-month paid ads campaign' },
  { stat:'10×',  label:'average client ROI',          sub:'Across 100+ client engagements' },
  { stat:'+40%', label:'increase in buyer leads',     sub:'Real estate client, local SEO' },
  { stat:'100+', label:'clients served',              sub:'Across diverse industries since 2019' },
]

const S = `
  .results-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(240,235,225,.04); }
  .result-card { padding:44px 36px; background:var(--ink2); transition:background .3s; position:relative; overflow:hidden; }
  .result-card:hover { background:var(--ink3); }
  .result-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),transparent); opacity:0; transition:opacity .4s; }
  .result-card:hover::before { opacity:1; }
  .result-stat { font-family:var(--serif); font-size:clamp(52px,6vw,84px); font-weight:600; font-style:italic; color:var(--gold); line-height:1; }
  .result-lbl { font-family:var(--sans); font-size:14px; font-weight:600; color:var(--parchment); margin:8px 0 4px; }
  .result-sub { font-family:var(--serif); font-size:13px; font-style:italic; color:rgba(240,235,225,.35); }
  .testi-grid2 { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; max-width:1280px; margin:0 auto; }
  .tc { background:rgba(240,235,225,.025); border:1px solid rgba(240,235,225,.05); overflow:hidden; transition:transform .4s,border-color .4s; }
  .tc:hover { transform:translateY(-5px); border-color:rgba(201,169,110,.2); }
  .tc::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),var(--forest2),transparent); opacity:0; transition:opacity .4s; }
  .tc:hover::before { opacity:1; }
  .tc-photo { height:240px; overflow:hidden; position:relative; }
  .tc-photo img { width:100%; height:100%; object-fit:cover; object-position:top; filter:grayscale(20%); transition:transform .6s,filter .6s; }
  .tc:hover .tc-photo img { transform:scale(1.04); filter:grayscale(0%); }
  .tc-photo-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.5) 0%,transparent 60%); }
  .tc-body { padding:28px; }
  .tc-mark { font-family:var(--serif); font-size:52px; font-weight:700; color:var(--gold); opacity:.2; line-height:.7; display:block; margin-bottom:8px; }
  .tc-q { font-size:14px; font-weight:300; color:rgba(240,235,225,.6); line-height:1.7; margin-bottom:18px; }
  .tc-name { font-size:11px; font-weight:600; color:var(--forest2); letter-spacing:.05em; font-family:var(--sans); }
  .tc-co { font-size:10px; color:rgba(240,235,225,.25); margin-top:2px; font-family:var(--sans); }
  @media(max-width:900px) { .results-grid { grid-template-columns:1fr 1fr; } .testi-grid2 { grid-template-columns:1fr; } }
  @media(max-width:600px) { .results-grid { grid-template-columns:1fr; } }
`

export default function CaseStudies() {
  return (
    <>
      <style>{S}</style>

      <section style={{position:'relative',minHeight:'65vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><img src={MTN} alt="" style={{width:'100%',height:'100%',objectFit:'cover',animation:'kenBurns 22s ease-in-out infinite alternate'}}/><div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.55) 40%,rgba(10,9,8,.15) 100%)'}}/></div>
        <div style={{position:'relative',zIndex:2,padding:'0 52px 72px',maxWidth:1280,margin:'0 auto',width:'100%'}}>
          <div className="rise-1 eyebrow-light">Proven Results</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(60px,10vw,150px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.88,letterSpacing:'-.05em'}}>
            The Numbers<br/>That Matter.
          </h1>
        </div>
      </section>

      <section style={{background:'var(--ink)',padding:0}}>
        <div className="results-grid">
          {RESULTS.map(r => (
            <Reveal key={r.stat}>
              <div className="result-card">
                <div className="result-stat">{r.stat}</div>
                <div className="result-lbl">{r.label}</div>
                <div className="result-sub">{r.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
      <PhotoStrip />

      <section style={{background:'var(--ink2)',padding:'100px 52px',position:'relative',overflow:'hidden'}}>
        <style>{'.tc{position:relative}'}</style>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:60}}>
            <Reveal dir="up">
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(40px,6vw,84px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em'}}>
                What our clients <em style={{color:'var(--gold)',fontStyle:'inherit'}}>say.</em>
              </h2>
            </Reveal>
          </div>
          <div className="testi-grid2">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="tc">
                <div className="tc-photo"><img src={t.photo} alt={t.name} loading="lazy" /><div className="tc-photo-ov"/></div>
                <div className="tc-body">
                  <span className="tc-mark">&ldquo;</span>
                  <p className="tc-q">{t.quote}</p>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-co">{t.co}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}