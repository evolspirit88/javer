import type { Metadata } from 'next'
import Link from 'next/link'
import Stats from '@/components/Stats'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = { title: 'About' }

const MTN = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'
const TEAM_PHOTO = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop'
const OFFICE_PHOTO = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop'

const S = `
  .ab-hero { position:relative; min-height:80vh; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; }
  .ab-hero-img { position:absolute; inset:0; }
  .ab-hero-img img { width:100%; height:100%; object-fit:cover; animation:kenBurns 22s ease-in-out infinite alternate; filter:brightness(.5) contrast(1.1); }
  .ab-hero-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.6) 40%,rgba(10,9,8,.15) 100%); }
  .ab-hero-c { position:relative; z-index:2; padding:0 52px 72px; max-width:1280px; margin:0 auto; width:100%; }
  .split { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
  .split-img { position:relative; overflow:hidden; border-radius:1px; }
  .split-img img { width:100%; aspect-ratio:4/5; object-fit:cover; filter:grayscale(15%) contrast(1.05); transition:transform .6s; }
  .split-img:hover img { transform:scale(1.03); }
  .ab-row { display:grid; grid-template-columns:96px 1fr; gap:20px; padding:22px 0; border-bottom:1px solid rgba(240,235,225,.05); align-items:baseline; }
  .ab-row:first-child { border-top:1px solid rgba(240,235,225,.05); }
  .ab-k { font-size:9px; font-weight:600; letter-spacing:.25em; text-transform:uppercase; color:rgba(201,169,110,.55); font-family:var(--sans); }
  .ab-v { font-family:var(--serif); font-size:14px; font-style:italic; color:rgba(240,235,225,.45); line-height:1.65; }
  @media(max-width:900px) { .ab-hero-c { padding:0 20px 60px; } .split { grid-template-columns:1fr; gap:48px; } }
`

export default function About() {
  return (
    <>
      <style>{S}</style>

      <section className="ab-hero">
        <div className="ab-hero-img"><img src={MTN} alt="Javer About" /></div>
        <div className="ab-hero-ov" />
        <div className="ab-hero-c">
          <div className="rise-1 eyebrow-light">Our Story</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(64px,10vw,150px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.88,letterSpacing:'-.05em'}}>
            We Are<br/>Javer.
          </h1>
          <p className="rise-3" style={{fontFamily:'var(--sans)',fontSize:16,fontWeight:300,color:'rgba(240,235,225,.5)',maxWidth:480,lineHeight:1.65,marginTop:18}}>
            A small crew of results-oriented digital marketers. We deliver what we promise.
          </p>
        </div>
      </section>

      <section className="section" style={{background:'var(--ink2)'}}>
        <div className="wrap split">
          <div>
            <Reveal><div className="eyebrow">Our Origin</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(40px,5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em',marginBottom:24}}>
                Built on Numbers.<br/>Driven by Results.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.4)',lineHeight:1.8,marginBottom:20}}>
                It happened by accident — where an engineer met an economist who are both obsessed with numbers. The difference is just how we look at them.
              </p>
            </Reveal>
            <Reveal delay={130}>
              <p style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.4)',lineHeight:1.8,marginBottom:32}}>
                We are a team of specialized talents working out of Alberta, Canada. Our digital marketing strategy looks simple on the surface, but behind the scenes it consists of hundreds of hours of highly complex work.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Link href="/case-studies" className="btn btn-g">Read Our Case Studies</Link>
            </Reveal>
          </div>
          <Reveal dir="right">
            <div className="split-img">
              <img src={TEAM_PHOTO} alt="Javer team" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="section" style={{background:'var(--ink)'}}>
        <div className="wrap split">
          <Reveal dir="left">
            <div className="split-img">
              <img src={OFFICE_PHOTO} alt="Javer office" loading="lazy" />
            </div>
          </Reveal>
          <Reveal dir="right">
            <div>
              <div className="eyebrow" style={{marginBottom:20}}>Who We Are</div>
              <div>
                {[
                  ['Focus',      'Return on Investment — every dollar invested needs to work harder.'],
                  ['Approach',   'Backed by data, powered by AI, driven by genuine creativity.'],
                  ['Location',   'Edmonton, Alberta — serving clients across Canada and internationally.'],
                  ['Founded',    '2019, as a boutique paid search agency. Grown into a full-service team.'],
                  ['Experience', '100+ clients across 4+ years — from local independents to large enterprises.'],
                  ['Industries', 'Dental, construction, law, trades, manufacturing, real estate, education, and more.'],
                  ['Partners',   'Google Partner · Meta Business Partner · Microsoft Advertising.'],
                ].map(([k,v]) => (
                  <div key={k} className="ab-row">
                    <span className="ab-k">{k}</span>
                    <span className="ab-v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{position:'relative',minHeight:'50vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'80px 52px',textAlign:'center'}}>
        <div style={{position:'absolute',inset:0}}><img src={MTN} alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:.3,filter:'brightness(.4)'}} /><div style={{position:'absolute',inset:0,background:'rgba(10,9,8,.75)'}} /></div>
        <div style={{position:'relative',zIndex:2,maxWidth:580}}>
          <Reveal dir="up"><h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em',marginBottom:20}}>Work with an agency obsessed about your growth.</h2></Reveal>
          <Reveal dir="up" delay={80}><Link href="/get-a-proposal" className="btn btn-g" style={{fontSize:12,padding:'17px 48px'}}>Get a Proposal</Link></Reveal>
        </div>
      </section>
    </>
  )
}