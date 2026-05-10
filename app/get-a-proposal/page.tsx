'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Shield, Clock, CheckCircle } from 'lucide-react'

const PHONE = '+1-587-404-0050'
const TEL   = 'tel:+15874040050'
const SERVICES = ['Web Design','Google Ads','Meta Advertising','SEO','Advanced Analytics','Digital Strategy','Campaign Tracking','Not sure yet']
const BUDGETS  = ['Under $10,000','$10,001 — $50,000','$50,001 — $500,000','$500,001 — $1,000,000','$1,000,000+','Prefer not to say']

const S = `
  .prop-hero { position:relative; padding:140px 52px 72px; background:var(--forest); overflow:hidden; }
  .prop-hero::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(201,169,110,.08) 0%,transparent 60%); }
  .prop-hero-in { max-width:1280px; margin:0 auto; position:relative; z-index:1; }
  .prop-grid { display:grid; grid-template-columns:1fr 2fr; gap:80px; max-width:1280px; margin:0 auto; padding:72px 52px; align-items:start; }
  .prop-sidebar { position:sticky; top:96px; display:flex; flex-direction:column; gap:24px; }
  .trust-item { display:flex; align-items:flex-start; gap:12px; }
  .trust-item-txt { font-family:var(--serif); font-size:14px; font-style:italic; color:rgba(240,235,225,.4); line-height:1.6; }
  .testi-mini { padding:24px; background:rgba(240,235,225,.03); border:1px solid rgba(240,235,225,.06); border-top:2px solid var(--gold); }
  .testi-mini-mark { font-family:var(--serif); font-size:44px; font-weight:700; color:var(--gold); opacity:.2; line-height:.7; display:block; margin-bottom:8px; }
  .testi-mini-q { font-size:13px; font-weight:300; color:rgba(240,235,225,.55); line-height:1.7; margin-bottom:14px; }
  .testi-mini-n { font-size:10px; font-weight:600; color:var(--forest2); font-family:var(--sans); }
  .badges { display:flex; flex-wrap:wrap; gap:6px; }
  .badge { font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; padding:6px 12px; border-radius:1px; background:var(--forest); color:var(--chalk); font-family:var(--sans); }
  .phone-alt { padding:16px; border:1px solid rgba(240,235,225,.08); border-radius:1px; }
  .phone-alt-lbl { font-size:10px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:rgba(240,235,225,.3); margin-bottom:8px; font-family:var(--sans); }
  .phone-alt-link { display:flex; align-items:center; gap:7px; font-size:14px; font-weight:600; color:var(--forest2); text-decoration:none; font-family:var(--sans); }
  .cal-link { display:block; margin-top:10px; font-size:10px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:rgba(240,235,225,.3); text-decoration:underline; font-family:var(--sans); }
  .prog-steps { display:flex; gap:3px; margin-bottom:6px; }
  .prog-step { flex:1; height:2px; border-radius:1px; transition:background .3s; }
  .prog-lbl { font-size:11px; color:rgba(240,235,225,.35); margin-bottom:40px; font-family:var(--sans); }
  input, button.svc-btn { font-family:var(--sans); }
  .f-input { font-size:14px; color:var(--parchment); background:rgba(240,235,225,.05); border:1px solid rgba(240,235,225,.1); border-radius:1px; padding:15px 18px; width:100%; outline:none; transition:border-color .2s; }
  .f-input:focus { border-color:rgba(201,169,110,.4); }
  .f-input::placeholder { color:rgba(240,235,225,.25); }
  .svc-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px; }
  .svc-chip { font-size:10px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; padding:11px 18px; border-radius:1px; border:1px solid rgba(240,235,225,.12); background:transparent; color:rgba(240,235,225,.5); cursor:pointer; transition:all .2s; font-family:var(--sans); }
  .svc-chip.active { background:var(--forest); color:var(--chalk); border-color:var(--forest); }
  .budget-list { display:flex; flex-direction:column; gap:6px; margin-bottom:28px; }
  .budget-opt { font-size:13px; padding:14px 18px; border-radius:1px; border:1px solid rgba(240,235,225,.08); background:rgba(240,235,225,.03); color:rgba(240,235,225,.5); cursor:pointer; text-align:left; transition:all .2s; font-family:var(--sans); }
  .budget-opt.active { background:var(--forest); color:var(--chalk); border-color:var(--forest); }
  .privacy-note { font-size:10px; color:rgba(240,235,225,.2); margin-top:12px; font-family:var(--sans); }
  .thanks { padding:60px 0; text-align:center; }
  @media(max-width:900px) { .prop-grid { grid-template-columns:1fr; gap:48px; padding:48px 20px; } .prop-sidebar { position:static; } .prop-hero { padding:120px 20px 60px; } }
`

export default function Proposal() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name:'', company:'', website:'', email:'', phone:'', services:[] as string[], budget:'' })
  const [done, setDone] = useState(false)

  const update = (k:string, v:unknown) => setForm(f=>({...f,[k]:v}))
  const toggle = (s:string) => setForm(f=>({...f,services:f.services.includes(s)?f.services.filter(x=>x!==s):[...f.services,s]}))

  return (
    <>
      <style>{S}</style>

      <div className="prop-hero">
        <div className="prop-hero-in">
          <div className="rise-1 eyebrow-light">Free · No Obligation · 2 Minutes</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(52px,8vw,110px)',fontWeight:600,fontStyle:'italic',color:'var(--chalk)',lineHeight:.9,letterSpacing:'-.04em'}}>
            Get a Proposal.
          </h1>
          <p className="rise-3" style={{fontFamily:'var(--serif)',fontSize:18,fontStyle:'italic',color:'rgba(250,248,244,.5)',lineHeight:1.6,marginTop:16}}>
            Currently accepting new clients for Q3 2025 — spots are limited.
          </p>
        </div>
      </div>

      <div style={{background:'var(--ink)'}}>
        <div className="prop-grid">
          {/* SIDEBAR */}
          <div className="prop-sidebar">
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {Icon:Clock,    t:'We respond within 1 business day — usually faster.'},
                {Icon:Shield,   t:'Your information is never shared or sold. Ever.'},
                {Icon:CheckCircle,t:'No obligation, no pushy sales call — just a real conversation.'},
              ].map((item,i) => (
                <div key={i} className="trust-item">
                  <item.Icon size={15} style={{color:'var(--forest2)',flexShrink:0,marginTop:3}} />
                  <p className="trust-item-txt">{item.t}</p>
                </div>
              ))}
            </div>
            <div className="testi-mini">
              <span className="testi-mini-mark">&ldquo;</span>
              <p className="testi-mini-q">Since beginning my partnership with Javer in 2020, the impact on my business has been transformative. More leads than I can handle.</p>
              <div className="testi-mini-n">Danielle Goodman · DTT Services, Edmonton</div>
            </div>
            <div className="badges">
              {['Google Partner','Meta Partner','Microsoft Ads'].map(b => <span key={b} className="badge">{b}</span>)}
            </div>
            <div className="phone-alt">
              <div className="phone-alt-lbl">Prefer to talk first?</div>
              <a href={TEL} className="phone-alt-link"><Phone size={14}/>{PHONE}</a>
              <a href="https://calendly.com/javer" target="_blank" rel="noopener noreferrer" className="cal-link">📅 Book a free 20-min discovery call</a>
            </div>
          </div>

          {/* FORM */}
          <div>
            {done ? (
              <div className="thanks">
                <div style={{fontFamily:'var(--serif)',fontSize:72,fontWeight:600,fontStyle:'italic',color:'var(--gold)',lineHeight:1,marginBottom:16}}>Thank you.</div>
                <p style={{fontFamily:'var(--serif)',fontSize:18,fontStyle:'italic',color:'rgba(240,235,225,.4)',lineHeight:1.7,maxWidth:480,margin:'0 auto 32px'}}>We have received your request and will be in touch within one business day.</p>
                <Link href="/" className="btn btn-g">Back to Home</Link>
              </div>
            ) : (
              <>
                <div className="prog-steps">
                  {[1,2,3,4].map(s => <div key={s} className="prog-step" style={{background:step>=s?'var(--gold)':'rgba(240,235,225,.1)'}} />)}
                </div>
                <p className="prog-lbl">Step {step} of 4 — about 2 minutes total</p>

                {step === 1 && (
                  <div>
                    <h2 style={{fontFamily:'var(--serif)',fontSize:44,fontWeight:600,fontStyle:'italic',color:'var(--parchment)',marginBottom:8}}>Tell us about yourself.</h2>
                    <p style={{fontFamily:'var(--serif)',fontSize:16,fontStyle:'italic',color:'rgba(240,235,225,.35)',marginBottom:32}}>We will use this to personalize your proposal.</p>
                    <div style={{display:'flex',flexDirection:'column',gap:12}}>
                      <input className="f-input" placeholder="Full Name *" value={form.name} onChange={e=>update('name',e.target.value)} />
                      <input className="f-input" placeholder="Company Name *" value={form.company} onChange={e=>update('company',e.target.value)} />
                      <input className="f-input" placeholder="Website URL (optional)" value={form.website} onChange={e=>update('website',e.target.value)} />
                      <button className="btn btn-g" onClick={()=>setStep(2)} disabled={!form.name||!form.company} style={{opacity:(!form.name||!form.company)?.5:1,marginTop:8}}>Continue →</button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h2 style={{fontFamily:'var(--serif)',fontSize:44,fontWeight:600,fontStyle:'italic',color:'var(--parchment)',marginBottom:8}}>How do we reach you?</h2>
                    <p style={{fontFamily:'var(--serif)',fontSize:16,fontStyle:'italic',color:'rgba(240,235,225,.35)',marginBottom:32}}>We will be in touch within one business day.</p>
                    <div style={{display:'flex',flexDirection:'column',gap:12}}>
                      <input className="f-input" placeholder="Work Email *" type="email" value={form.email} onChange={e=>update('email',e.target.value)} />
                      <input className="f-input" placeholder="Phone Number (optional)" type="tel" value={form.phone} onChange={e=>update('phone',e.target.value)} />
                      <div style={{display:'flex',gap:10,marginTop:8}}>
                        <button className="btn btn-o" onClick={()=>setStep(1)}>← Back</button>
                        <button className="btn btn-g" onClick={()=>setStep(3)} disabled={!form.email} style={{opacity:!form.email?.5:1}}>Continue →</button>
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <h2 style={{fontFamily:'var(--serif)',fontSize:44,fontWeight:600,fontStyle:'italic',color:'var(--parchment)',marginBottom:8}}>What are you interested in?</h2>
                    <p style={{fontFamily:'var(--serif)',fontSize:16,fontStyle:'italic',color:'rgba(240,235,225,.35)',marginBottom:32}}>Select all that apply.</p>
                    <div className="svc-chips">
                      {SERVICES.map(s => <button key={s} className={`svc-chip${form.services.includes(s)?' active':''}`} onClick={()=>toggle(s)}>{s}</button>)}
                    </div>
                    <div style={{display:'flex',gap:10}}>
                      <button className="btn btn-o" onClick={()=>setStep(2)}>← Back</button>
                      <button className="btn btn-g" onClick={()=>setStep(4)}>Continue →</button>
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div>
                    <h2 style={{fontFamily:'var(--serif)',fontSize:44,fontWeight:600,fontStyle:'italic',color:'var(--parchment)',marginBottom:8}}>What is your marketing budget?</h2>
                    <p style={{fontFamily:'var(--serif)',fontSize:16,fontStyle:'italic',color:'rgba(240,235,225,.35)',marginBottom:32}}>This helps us tailor the right solution. No pressure.</p>
                    <div className="budget-list">
                      {BUDGETS.map(b => <button key={b} className={`budget-opt${form.budget===b?' active':''}`} onClick={()=>update('budget',b)}>{b}</button>)}
                    </div>
                    <div style={{display:'flex',gap:10}}>
                      <button className="btn btn-o" onClick={()=>setStep(3)}>← Back</button>
                      <button className="btn btn-g" onClick={()=>setDone(true)}>Submit — Get My Proposal</button>
                    </div>
                    <p className="privacy-note">🔒 Your information is never shared or sold.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}