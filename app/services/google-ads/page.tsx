import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceHero from '@/components/ServiceHero'
import Stats from '@/components/Stats'
import Reveal from '@/components/Reveal'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = { title: 'Google Ads' }

const CAPS = [
  { t:"Account Setup", d:"Full account architecture, campaign structure, and conversion tracking from day one." },
  { t:"Keyword Research", d:"Deep research to identify high-intent queries that drive qualified traffic at the lowest cost." },
  { t:"Performance Max", d:"Leverage Google's newest AI-driven campaign type across all inventory." },
  { t:"Bid Optimization", d:"Data-driven bid management and budget reallocation to maximize efficiency." },
  { t:"Ad Copy & Creative", d:"Compelling, data-informed ad copy that earns clicks from the right audience." },
  { t:"Reporting", d:"Monthly reports with clear analysis, insights, and concrete recommendations." }
]
const WHY  = [
  { t:"10+ Years Experience", d:"We have managed Google campaigns for over 10 years across search, display, video, and shopping." },
  { t:"Early Access", d:"Our Google partnership gives us early access to alpha and beta products." },
  { t:"No Set and Forget", d:"You cannot just set up an ad and wait. We optimize relentlessly, week after week." },
  { t:"Bilingual", d:"Work with bilingual specialists experienced in local, national, and international growth." }
]

const FAQS = [
  { q:'What makes Javer different?', a:'Three main factors: Diverse Experience across B2B and B2C. Knowledge — long-standing Google, Meta, and Microsoft partnerships give us exclusive access to betas. Adaptability — boutique agility means we improve ROI fast.' },
  { q:'How quickly will I see results?', a:'Paid media can drive results within weeks. SEO and brand-building are longer-term investments. We set clear expectations during onboarding and keep you updated every step.' },
  { q:'How much does this service cost?', a:'Every project is unique. Fill out our proposal form to get a customized quote — free, takes 2 minutes.' },
  { q:'What does working with Javer look like?', a:'Monthly performance reviews, live dashboards, and open communication. You always know what we are working on, why, and what results it is driving.' },
]

const GRID_S = `
  .cap-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:rgba(240,235,225,.04); border:1px solid rgba(240,235,225,.06); border-radius:1px; overflow:hidden; }
  .cap-cell { background:var(--ink2); padding:28px 24px; border-right:1px solid rgba(240,235,225,.05); transition:background .3s; }
  .cap-cell:hover { background:var(--ink3); }
  .cap-t { font-family:var(--sans); font-size:13px; font-weight:600; color:var(--parchment); margin-bottom:6px; }
  .cap-d { font-family:var(--serif); font-size:13px; font-style:italic; color:rgba(240,235,225,.4); line-height:1.65; }
  .why-list { display:flex; flex-direction:column; }
  .why-row { display:grid; grid-template-columns:44px 1fr; gap:20px; padding:24px 0; border-bottom:1px solid rgba(240,235,225,.05); transition:background .2s; }
  .why-row:first-child { border-top:1px solid rgba(240,235,225,.05); }
  .why-n { font-family:var(--serif); font-size:13px; font-weight:600; font-style:italic; color:rgba(201,169,110,.5); padding-top:2px; }
  .why-t { font-family:var(--sans); font-size:14px; font-weight:600; color:var(--parchment); margin-bottom:5px; }
  .why-d { font-family:var(--serif); font-size:13px; font-style:italic; color:rgba(240,235,225,.4); line-height:1.7; }
`

export default function ServicePage() {
  return (
    <>
      <style>{GRID_S}</style>
      <ServiceHero eyebrow="Service — Paid Search" title="Google Ads" subtitle="Work with a performance-based Google advertising agency. Every dollar tracked, every campaign built for maximum ROI." photo="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop" ctaLabel="Get a Free Google Ads Audit" />

      <section className="section" style={{background:'var(--ink2)'}}>
        <div className="wrap" style={{display:'grid',gridTemplateColumns:'5fr 6fr',gap:80,alignItems:'start'}}>
          <div>
            <Reveal><div className="eyebrow">Capabilities</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(38px,5vw,68px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em',marginBottom:24}}>
                What We Deliver
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.4)',lineHeight:1.8,marginBottom:36}}>
                Work with a performance-based Google advertising agency. Every dollar tracked, every campaign built for maximum ROI.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Link href="/get-a-proposal" className="btn btn-g">Get a Free Google Ads Audit</Link>
            </Reveal>
          </div>
          <Reveal dir="right">
            <div className="cap-grid">
              {CAPS.map((c, i) => (
                <div key={i} className="cap-cell">
                  <div className="cap-t">{c.t}</div>
                  <p className="cap-d">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="section" style={{background:'var(--ink)'}}>
        <div className="wrap" style={{display:'grid',gridTemplateColumns:'5fr 6fr',gap:80,alignItems:'start'}}>
          <div>
            <Reveal><div className="eyebrow">Why Javer</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(38px,5vw,68px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em'}}>
                Why Choose Us
              </h2>
            </Reveal>
          </div>
          <Reveal dir="right">
            <div className="why-list">
              {WHY.map((w, i) => (
                <div key={i} className="why-row">
                  <span className="why-n">{['I.','II.','III.','IV.'][i]}</span>
                  <div><div className="why-t">{w.t}</div><p className="why-d">{w.d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{background:'var(--ink2)'}}>
        <div className="wrap" style={{display:'grid',gridTemplateColumns:'5fr 6fr',gap:80,alignItems:'start'}}>
          <div>
            <Reveal><div className="eyebrow">FAQ</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(38px,5vw,68px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em'}}>
                Questions
              </h2>
            </Reveal>
          </div>
          <Reveal dir="right"><FAQ items={FAQS} /></Reveal>
        </div>
      </section>

      <section style={{position:'relative',minHeight:'55vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',padding:'80px 52px'}}>
        <div style={{position:'absolute',inset:0}}>
          <img src="https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover',opacity:.35,filter:'brightness(.5)' }} />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,rgba(10,9,8,.97) 40%,rgba(10,9,8,.5) 100%)'}} />
        </div>
        <div style={{position:'relative',zIndex:2,textAlign:'center',maxWidth:640}}>
          <Reveal dir="up">
            <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em',marginBottom:20}}>
              Ready to accelerate your growth?
            </h2>
          </Reveal>
          <Reveal dir="up" delay={80}>
            <Link href="/get-a-proposal" className="btn btn-g" style={{fontSize:12,padding:'17px 48px'}}>
              Get a Free Google Ads Audit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}