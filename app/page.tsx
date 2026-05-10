import Link from 'next/link'
import Stats from '@/components/Stats'
import Reveal from '@/components/Reveal'
import TrustBar from '@/components/TrustBar'
import PhotoStrip from '@/components/PhotoStrip'
import FAQ from '@/components/FAQ'
import { Phone } from 'lucide-react'

const PHONE = '+1-587-404-0050'
const TEL   = 'tel:+15874040050'
const MTN   = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'

const SERVICES = [
  { n:'01', name:'Website Design',    photo:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85&auto=format&fit=crop', href:'/services/web-design',       cta:'See Our Work' },
  { n:'02', name:'Digital Strategy',  photo:'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85&auto=format&fit=crop',  href:'/services/digital-strategy', cta:'Learn More' },
  { n:'03', name:'Google Ads',        photo:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',  href:'/services/google-ads',       cta:'Free Audit' },
  { n:'04', name:'Facebook & Instagram',photo:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop',href:'/services/meta',           cta:'Free Audit' },
  { n:'05', name:'SEO',               photo:'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&q=85&auto=format&fit=crop',  href:'/services/seo',             cta:'Free Audit' },
  { n:'06', name:'Advanced Analytics',photo:'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=85&auto=format&fit=crop',href:'/services/advanced-analytics',cta:'Learn More' },
]

const TESTIMONIALS = [
  { photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'Since beginning my partnership with Javer in 2020, the impact on my business has been transformative. More leads than I can handle.', name:'Danielle Goodman', co:'DTT Services, Edmonton' },
  { photo:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'My accounting firm had been relying on referrals. Javer introduced me to data-driven strategy — results exceeded every expectation.', name:'Nnenna Ibeakanma', co:'Diamond Accounting, Alberta' },
  { photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces', quote:'A perfect example of a professional, result-oriented digital marketing agency. They genuinely care about outcomes, not just deliverables.', name:'Minas H.', co:'Client, Calgary' },
]

const FAQS = [
  { q:'What makes Javer different from other marketing agencies?', a:'Three main factors: Diverse Experience across B2B and B2C industries. Knowledge — long-standing Google, Meta, and Microsoft partnerships give us exclusive access to betas and priority support. Adaptability — as a boutique agency we move fast and improve ROI quickly.' },
  { q:'What type of clients does Javer work with?', a:'We have worked with over 100 clients from diverse industries — dental, beauty, construction, law, trades, manufacturing, real estate, education, and more in both B2B and B2C contexts.' },
  { q:'How much do your services cost?', a:'Because every project is unique, our quotes are tailored to your requirements. Fill out our proposal form to get a customized quote — free, takes 2 minutes.' },
  { q:'How can I get in touch?', a:'Fill out the proposal form, call +1-587-404-0050, or email hello@javer.ca. A team member will reach out within one business day.' },
]

const S = `
  #hero { height:100vh; min-height:700px; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; }
  .hero-bg { position:absolute; inset:0; }
  .hero-bg img { width:100%; height:100%; object-fit:cover; animation:kenBurns 22s ease-in-out infinite alternate; }
  .hero-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.75) 30%,rgba(10,9,8,.3) 65%,rgba(10,9,8,.15) 100%),linear-gradient(100deg,rgba(10,9,8,.5) 0%,transparent 55%); }
  .hero-vign { position:absolute; inset:0; background:radial-gradient(ellipse 130% 130% at 50% 50%,transparent 25%,rgba(10,9,8,.65) 100%); }
  .hero-hor { position:absolute; top:52%; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent 0%,rgba(201,169,110,.5) 35%,rgba(201,169,110,.7) 50%,rgba(201,169,110,.5) 65%,transparent 100%); pointer-events:none; }
  .hero-c { position:relative; z-index:2; padding:0 52px 72px; max-width:1280px; margin:0 auto; width:100%; }
  .hero-h { font-family:var(--serif); font-weight:600; font-style:italic; font-size:clamp(80px,13vw,200px); line-height:.84; letter-spacing:-.05em; color:var(--parchment); }
  .hero-sub { font-size:clamp(13px,1.3vw,16px); font-weight:300; color:rgba(240,235,225,.55); letter-spacing:.04em; margin:18px 0 28px; }
  .hero-div { width:100%; height:1px; background:linear-gradient(90deg,rgba(201,169,110,.4),rgba(201,169,110,.1) 40%,transparent); margin-bottom:26px; }
  .hero-btm { display:grid; grid-template-columns:1fr auto; gap:32px; align-items:center; }
  .scroll-cue { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); z-index:2; display:flex; flex-direction:column; align-items:center; gap:8px; opacity:0; animation:fadeIn 1s 1.2s ease forwards; }
  .scroll-cue span { font-size:9px; font-weight:600; letter-spacing:.3em; text-transform:uppercase; color:rgba(240,235,225,.25); font-family:var(--sans); }
  .scroll-line { width:1px; height:44px; background:linear-gradient(to bottom,rgba(201,169,110,.5),transparent); animation:scrollPulse 2.2s 1.5s ease-in-out infinite; }
  @keyframes scrollPulse { 0%,100% { opacity:.35; } 50% { opacity:1; } }
  .svc-grid { display:grid; grid-template-columns:2fr 1fr 1fr; grid-template-rows:auto auto; gap:3px; background:var(--ink); }
  .svc-card { position:relative; overflow:hidden; cursor:pointer; aspect-ratio:unset; }
  .svc-card:nth-child(1) { grid-column:1; grid-row:1/3; min-height:640px; }
  .svc-card:nth-child(2) { grid-column:2; grid-row:1; min-height:318px; }
  .svc-card:nth-child(3) { grid-column:3; grid-row:1; min-height:318px; }
  .svc-card:nth-child(4) { grid-column:2; grid-row:2; min-height:318px; }
  .svc-card:nth-child(5) { grid-column:3; grid-row:2; min-height:318px; }
  .svc-card:nth-child(6) { display:none; }
  .svc-img { position:absolute; inset:0; transition:transform .8s cubic-bezier(.22,1,.36,1); }
  .svc-img img { width:100%; height:100%; object-fit:cover; }
  .svc-card:hover .svc-img { transform:scale(1.06); }
  .svc-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.92) 0%,rgba(10,9,8,.3) 50%,rgba(10,9,8,.05) 100%); transition:background .5s; }
  .svc-card:hover .svc-ov { background:linear-gradient(to top,rgba(10,9,8,.97) 0%,rgba(10,9,8,.5) 50%,rgba(10,9,8,.1) 100%); }
  .svc-txt { position:absolute; bottom:0; left:0; right:0; padding:clamp(20px,2.5vw,36px); z-index:2; }
  .svc-num { font-size:9px; font-weight:600; letter-spacing:.3em; text-transform:uppercase; color:rgba(201,169,110,.6); margin-bottom:6px; font-family:var(--sans); }
  .svc-name { font-family:var(--serif); font-size:clamp(20px,2.2vw,34px); font-weight:600; font-style:italic; color:var(--parchment); line-height:1; letter-spacing:-.02em; }
  .svc-cta { display:inline-flex; align-items:center; gap:6px; margin-top:12px; font-size:9px; font-weight:600; letter-spacing:.15em; text-transform:uppercase; color:var(--gold); text-decoration:none; opacity:0; transform:translateY(8px); transition:opacity .4s,transform .4s; font-family:var(--sans); }
  .svc-card:hover .svc-cta { opacity:1; transform:translateY(0); }
  .svc-line { position:absolute; top:0; left:0; right:100%; height:2px; background:linear-gradient(90deg,var(--gold),var(--forest2)); transition:right .5s cubic-bezier(.22,1,.36,1); z-index:3; }
  .svc-card:hover .svc-line { right:0; }
  .vid-s { position:relative; height:65vh; min-height:480px; overflow:hidden; display:flex; align-items:center; justify-content:center; }
  .vid-frame { position:absolute; inset:-10%; overflow:hidden; }
  .vid-frame iframe { position:absolute; top:50%; left:50%; width:120%; height:120%; transform:translate(-50%,-50%); border:none; pointer-events:none; }
  .vid-frame .vid-fallback { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80&auto=format&fit=crop') center/cover no-repeat; animation:kenBurns 18s ease-in-out infinite alternate; }
  .vid-ov { position:absolute; inset:0; z-index:2; background:linear-gradient(to bottom,rgba(10,9,8,.4),rgba(10,9,8,.55)),radial-gradient(ellipse 100% 100% at 50% 50%,transparent 30%,rgba(10,9,8,.7) 100%); }
  .vid-txt { position:relative; z-index:3; text-align:center; padding:0 24px; display:flex; flex-direction:column; align-items:center; gap:20px; }
  .vid-lbl { font-size:10px; font-weight:600; letter-spacing:.3em; text-transform:uppercase; color:rgba(201,169,110,.8); font-family:var(--sans); }
  .vid-h { font-family:var(--serif); font-size:clamp(44px,7vw,100px); font-weight:600; font-style:italic; color:var(--parchment); line-height:.88; letter-spacing:-.04em; }
  .vid-h em { color:var(--gold); font-style:inherit; }
  .testi-s { background:var(--ink2); padding:100px 52px; position:relative; overflow:hidden; }
  .testi-s::before { content:''; position:absolute; inset:0; background:url('https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg') center 40%/cover no-repeat; opacity:.04; pointer-events:none; }
  .testi-head { text-align:center; position:relative; z-index:1; margin-bottom:60px; }
  .testi-hl { font-family:var(--serif); font-size:clamp(40px,6vw,84px); font-weight:600; font-style:italic; color:var(--parchment); line-height:.9; letter-spacing:-.04em; }
  .testi-hl em { color:var(--gold); font-style:inherit; }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; position:relative; z-index:1; max-width:1280px; margin:0 auto; }
  .testi-card { background:rgba(240,235,225,.025); border:1px solid rgba(240,235,225,.05); overflow:hidden; position:relative; transition:transform .4s cubic-bezier(.22,1,.36,1),border-color .4s; }
  .testi-card:hover { transform:translateY(-5px); border-color:rgba(201,169,110,.2); }
  .testi-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),var(--forest2),transparent); opacity:0; transition:opacity .4s; }
  .testi-card:hover::before { opacity:1; }
  .testi-photo { height:240px; overflow:hidden; position:relative; }
  .testi-photo img { width:100%; height:100%; object-fit:cover; object-position:top center; filter:grayscale(20%); transition:transform .6s,filter .6s; }
  .testi-card:hover .testi-photo img { transform:scale(1.04); filter:grayscale(0%); }
  .testi-photo-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.5) 0%,transparent 60%); }
  .testi-body { padding:28px 28px 32px; }
  .testi-mark { font-family:var(--serif); font-size:56px; font-weight:700; color:var(--gold); opacity:.2; line-height:.7; display:block; margin-bottom:8px; }
  .testi-q { font-size:14px; font-weight:300; color:rgba(240,235,225,.6); line-height:1.7; margin-bottom:20px; letter-spacing:.01em; }
  .testi-name { font-size:11px; font-weight:600; color:var(--forest2); letter-spacing:.05em; font-family:var(--sans); }
  .testi-co { font-size:10px; color:rgba(240,235,225,.25); margin-top:2px; font-family:var(--sans); }
  .cta-s { position:relative; min-height:80vh; display:flex; flex-direction:column; justify-content:center; overflow:hidden; padding:100px 52px; }
  .cta-bg { position:absolute; inset:0; }
  .cta-bg img { width:100%; height:100%; object-fit:cover; animation:kenBurnsAlt 28s ease-in-out infinite alternate-reverse; }
  .cta-ov { position:absolute; inset:0; background:linear-gradient(to right,rgba(10,9,8,.97) 40%,rgba(10,9,8,.5) 100%),linear-gradient(to top,rgba(10,9,8,.8) 0%,transparent 50%); }
  .cta-in { position:relative; z-index:2; max-width:1280px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
  .cta-h { font-family:var(--serif); font-size:clamp(60px,9vw,140px); font-weight:600; font-style:italic; color:var(--parchment); line-height:.85; letter-spacing:-.05em; }
  .cta-h em { color:var(--gold); font-style:inherit; }
  .cta-tag { font-size:11px; font-weight:500; color:rgba(240,235,225,.4); margin-bottom:22px; letter-spacing:.05em; font-family:var(--sans); }
  .cta-ph { display:flex; align-items:center; gap:8px; text-decoration:none; font-size:11px; font-weight:500; color:rgba(240,235,225,.4); border:1px solid rgba(240,235,225,.12); padding:14px 22px; border-radius:1px; transition:all .25s; letter-spacing:.04em; font-family:var(--sans); }
  .cta-ph:hover { color:var(--parchment); border-color:rgba(240,235,225,.35); }
  .cta-meta { font-size:10px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:rgba(240,235,225,.18); margin-top:16px; font-family:var(--sans); }
  @media(max-width:900px) {
    .hero-c { padding:0 20px 60px; }
    .hero-btm { grid-template-columns:1fr; }
    .svc-grid { grid-template-columns:1fr 1fr; }
    .svc-card:nth-child(1) { grid-column:1/3; grid-row:1; min-height:55vw; }
    .svc-card:nth-child(2) { grid-column:1; grid-row:2; min-height:50vw; }
    .svc-card:nth-child(3) { grid-column:2; grid-row:2; min-height:50vw; }
    .svc-card:nth-child(4) { grid-column:1; grid-row:3; min-height:50vw; }
    .svc-card:nth-child(5) { grid-column:2; grid-row:3; min-height:50vw; }
    .testi-grid { grid-template-columns:1fr; }
    .testi-s { padding:80px 20px; }
    .cta-in { grid-template-columns:1fr; gap:48px; }
    .cta-s { padding:80px 20px; }
  }
`

export default function Home() {
  return (
    <>
      <style>{S}</style>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg">
          <img src={MTN} alt="Javer — Performance Digital Marketing"  />
        </div>
        <div className="hero-ov" />
        <div className="hero-vign" />
        <div className="hero-hor" />
        <div className="hero-c">
          <div className="rise-1 eyebrow-light">Edmonton &amp; Calgary — Performance Marketing</div>
          <h1 className="hero-h rise-2">
            <em style={{color:'var(--gold)',fontStyle:'inherit'}}>J</em>aver.
          </h1>
          <p className="hero-sub rise-3">Proven data-driven strategies. Real measurable growth.</p>
          <div className="hero-div rise-4" />
          <div className="hero-btm rise-5">
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/get-a-proposal" className="btn btn-g">Get a Free Proposal</Link>
              <Link href="/case-studies" className="btn btn-o">View Results</Link>
            </div>
            <a href={TEL} style={{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--sans)',fontSize:12,fontWeight:500,color:'rgba(240,235,225,.4)',textDecoration:'none',letterSpacing:'.03em'}}>
              <Phone size={13} style={{color:'var(--forest2)'}} />{PHONE}
            </a>
          </div>
        </div>
        <div className="scroll-cue"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <TrustBar />

      {/* SERVICE PHOTO GRID */}
      <section style={{background:'var(--ink)',padding:0}}>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div key={s.n} className="svc-card">
              <div className="svc-img"><img src={s.photo} alt={s.name} loading="lazy" /></div>
              <div className="svc-ov" />
              <div className="svc-line" />
              <div className="svc-txt">
                <div className="svc-num">{s.n}</div>
                <div className="svc-name">{s.name}</div>
                <Link href={s.href} className="svc-cta">{s.cta} ↗</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="vid-s">
        <div className="vid-frame">
          <iframe src="https://www.youtube.com/embed/G0ER7tFNxck?autoplay=1&mute=1&loop=1&controls=0&playlist=G0ER7tFNxck&rel=0" allow="autoplay; fullscreen" title="Javer Reel" />
          <div className="vid-fallback" />
        </div>
        <div className="vid-ov" />
        <div className="vid-txt">
          <Reveal dir="up"><span className="vid-lbl">Our Work</span></Reveal>
          <Reveal dir="up" delay={80}>
            <h2 className="vid-h">Built for<br/><em>Results.</em></h2>
          </Reveal>
          <Reveal dir="up" delay={160}>
            <Link href="/get-a-proposal" className="btn btn-g">Get a Proposal</Link>
          </Reveal>
        </div>
      </section>

      <Stats />
      <PhotoStrip />

      {/* TESTIMONIALS */}
      <section className="testi-s">
        <div className="testi-head">
          <Reveal dir="up"><h2 className="testi-hl">What our clients <em>say.</em></h2></Reveal>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-photo">
                <img src={t.photo} alt={t.name} loading="lazy" />
                <div className="testi-photo-ov" />
              </div>
              <div className="testi-body">
                <span className="testi-mark">&ldquo;</span>
                <p className="testi-q">{t.quote}</p>
                <div className="testi-name">{t.name}</div>
                <div className="testi-co">{t.co}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{background:'var(--ink)'}}>
        <div className="wrap" style={{display:'grid',gridTemplateColumns:'5fr 6fr',gap:80,alignItems:'start'}}>
          <div>
            <Reveal><div className="eyebrow">Questions</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(40px,5.5vw,76px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.9,letterSpacing:'-.04em'}}>
                Frequently<br/>Asked.
              </h2>
            </Reveal>
          </div>
          <Reveal dir="right"><FAQ items={FAQS} /></Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-s">
        <div className="cta-bg"><img src={MTN} alt="" loading="lazy" /></div>
        <div className="cta-ov" />
        <div className="cta-in">
          <Reveal dir="up">
            <h2 className="cta-h">Let us<br/><em>Prove</em><br/>It.</h2>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <p className="cta-tag">Currently accepting new clients for Q3 2025</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:8}}>
              <Link href="/get-a-proposal" className="btn btn-g">Get a Free Proposal</Link>
              <a href={TEL} className="cta-ph"><Phone size={12} style={{color:'var(--forest2)'}} />{PHONE}</a>
            </div>
            <p className="cta-meta">hello@javer.ca · Edmonton · Calgary · javer.ca</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}