import Link from 'next/link'
import Stats from '@/components/Stats'
import Reveal from '@/components/Reveal'
import TrustBar from '@/components/TrustBar'
import PhotoStrip from '@/components/PhotoStrip'
import FAQ from '@/components/FAQ'
import { Phone } from 'lucide-react'

const PHONE = '+1-780-860-3865'
const TEL   = 'tel:+17808603865'
const MTN   = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'

const SERVICES = [
  { n: 'I.',    name: 'Web Design',         sub: 'Conversion-first — built to turn visitors into revenue.', href: '/services/web-design' },
  { n: 'II.',   name: 'Digital Strategy',   sub: 'Full-funnel planning grounded in your market & goals.',   href: '/services/digital-strategy' },
  { n: 'III.',  name: 'Google Ads',         sub: 'Search, Shopping & Performance Max — zero wasted spend.',  href: '/services/google-ads' },
  { n: 'IV.',   name: 'Meta Advertising',   sub: 'Facebook & Instagram campaigns built around real data.',  href: '/services/meta' },
  { n: 'V.',    name: 'SEO',                sub: 'Long-term organic growth through technical precision.',    href: '/services/seo' },
  { n: 'VI.',   name: 'Analytics',          sub: 'Cookieless tracking, dashboards & server-side events.',   href: '/services/advanced-analytics' },
]

const TESTIMONIALS = [
  {
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85&auto=format&fit=crop&crop=faces',
    quote: 'Since beginning my partnership with Javer in 2020, the impact on my business has been transformative. I am inundated with more leads than I can handle.',
    name: 'Danielle Goodman', co: 'DTT Services, Edmonton',
  },
  {
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop&crop=faces',
    quote: 'My accounting firm had been relying on referrals. Javer introduced me to data-driven strategy — results exceeded every expectation.',
    name: 'Nnenna Ibeakanma', co: 'Diamond Accounting, Alberta',
  },
  {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop&crop=faces',
    quote: 'A perfect example of a professional, result-oriented agency. Their knowledge is exceptional and they genuinely care about outcomes, not just deliverables.',
    name: 'Minas H.', co: 'Client, Calgary',
  },
]

const FAQS = [
  { q: 'What makes Javer different from other marketing agencies?', a: 'Three main factors: Diverse Experience across B2B and B2C industries. Knowledge — long-standing Google, Meta, and Microsoft partnerships give us exclusive access to betas and priority support. Adaptability — as a boutique agency we move fast and improve ROI quickly.' },
  { q: 'What type of clients does Javer work with?', a: 'Over 100 clients from diverse industries — dental, beauty, construction, law, trades, manufacturing, real estate, education, and more across both B2B and B2C.' },
  { q: 'How much do your services cost?', a: 'Every project is unique. Fill out our proposal form to get a customized quote — free, takes 2 minutes.' },
  { q: 'How quickly will I see results?', a: 'Paid media can drive results within weeks. SEO and brand-building are longer-term investments. We set clear expectations during onboarding and update you every step of the way.' },
  { q: 'How can I get in touch?', a: `Fill out the proposal form, call ${PHONE}, or email markus.tran@wearejodigital.com. We respond within one business day.` },
]

const S = `
/* ═══ HERO ══════════════════════════════════ */
#hero { height:100vh; min-height:700px; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; }
.hero-bg { position:absolute; inset:0; animation:kenBurns 24s ease-in-out infinite alternate; }
.hero-bg img { width:100%; height:100%; object-fit:cover; }
.hero-ov { position:absolute; inset:0; background:linear-gradient(to top, rgba(250,250,248,1) 0%, rgba(250,250,248,.97) 18%, rgba(250,250,248,.82) 38%, rgba(250,250,248,.38) 62%, rgba(250,250,248,.08) 85%, transparent 100%); }
.hero-c { position:relative; z-index:2; padding:0 52px 80px; max-width:1280px; margin:0 auto; width:100%; }
.hero-tag { display:inline-flex; align-items:center; gap:14px; font-size:10px; font-weight:600; letter-spacing:.32em; text-transform:uppercase; color:var(--gold); margin-bottom:20px; opacity:0; animation:riseIn .7s .1s ease forwards; font-family:var(--sans); }
.hero-tag::before { content:''; width:24px; height:1px; background:var(--gold); }
.hero-h { font-family:var(--serif); font-weight:700; font-style:italic; font-size:clamp(72px,10vw,140px); line-height:.88; letter-spacing:-.05em; color:var(--text); margin-bottom:20px; opacity:0; animation:riseIn .95s .04s cubic-bezier(.16,1,.3,1) forwards; }
.hero-h .g { color:var(--gold); }
.hero-value { font-size:clamp(16px,1.8vw,22px); font-weight:500; color:var(--text2); line-height:1.3; max-width:560px; margin:0 0 8px; opacity:0; animation:riseIn .7s .15s ease forwards; letter-spacing:-.01em; }
.hero-sub { font-size:clamp(13px,1.2vw,15px); font-weight:400; color:var(--text3); line-height:1.7; max-width:480px; margin-bottom:32px; opacity:0; animation:riseIn .7s .25s ease forwards; }
.hero-div { width:48px; height:1px; background:var(--gold); margin-bottom:28px; opacity:0; animation:riseIn .5s .35s ease forwards; }
.hero-btm { display:flex; align-items:center; gap:20px; flex-wrap:wrap; opacity:0; animation:riseIn .7s .45s ease forwards; }
.hero-ph { display:flex; align-items:center; gap:7px; font-size:12px; font-weight:500; color:var(--text3); text-decoration:none; letter-spacing:.03em; transition:color .2s; font-family:var(--sans); }
.hero-ph:hover { color:var(--text); }
.scroll-cue { position:absolute; bottom:28px; left:50%; transform:translateX(-50%); z-index:2; display:flex; flex-direction:column; align-items:center; gap:8px; opacity:0; animation:fadeIn 1s 1.2s ease forwards; }
.scroll-cue span { font-size:9px; font-weight:600; letter-spacing:.3em; text-transform:uppercase; color:var(--text3); font-family:var(--sans); }
.scroll-line { width:1px; height:40px; background:linear-gradient(to bottom,var(--gold),transparent); animation:scrollPulse 2.2s 1.5s ease-in-out infinite; }

/* ═══ MANIFESTO ════════════════════════════ */
.mfst { background:var(--bg); padding:100px 52px; border-bottom:1px solid var(--line2); }
.mfst-grid { display:grid; grid-template-columns:1fr 2.2fr; gap:80px; align-items:start; max-width:1280px; margin:0 auto; }
.mq { font-family:var(--serif); font-size:clamp(28px,3.5vw,52px); font-weight:700; font-style:italic; color:var(--text); line-height:1.2; letter-spacing:-.02em; }
.mq em { color:var(--gold); font-style:inherit; position:relative; }
.mq em::after { content:''; position:absolute; left:0; right:0; bottom:-3px; height:1px; background:linear-gradient(90deg,var(--gold),transparent); }
.mq-body { font-size:16px; font-weight:400; color:var(--text3); line-height:1.85; margin-top:24px; margin-bottom:28px; }
.mq-source { display:flex; align-items:center; gap:16px; margin-top:32px; padding-top:28px; border-top:1px solid var(--line2); font-size:10px; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--text3); font-family:var(--sans); }
.mq-source::before { content:''; display:block; width:24px; height:1px; background:var(--line); }

/* ═══ SERVICES NUMBERED LIST ════════════════ */
.svc-s { background:var(--bg2); padding:100px 52px; }
.svc-wrap { max-width:1280px; margin:0 auto; }
.svc-hd { display:grid; grid-template-columns:1fr 2.2fr; gap:80px; align-items:end; margin-bottom:64px; }
.svc-hl { font-family:var(--serif); font-size:clamp(48px,6vw,88px); font-weight:700; font-style:italic; color:var(--text); line-height:.88; letter-spacing:-.04em; }
.svc-hl em { color:var(--gold); font-style:inherit; }
.svc-intro { font-size:15px; font-weight:400; color:var(--text3); line-height:1.8; max-width:400px; }
.svc-list { border-top:1px solid var(--line2); }
.svc-row { display:grid; grid-template-columns:72px 1fr auto; align-items:center; gap:32px; padding:28px 0; border-bottom:1px solid var(--line2); text-decoration:none; color:inherit; position:relative; transition:padding-left .3s cubic-bezier(.22,1,.36,1); overflow:hidden; }
.svc-row::after { content:''; position:absolute; left:0; bottom:0; width:0; height:1.5px; background:var(--gold); transition:width .55s cubic-bezier(.22,1,.36,1); }
.svc-row:hover::after { width:100%; }
.svc-row:hover { padding-left:8px; }
.svc-n { font-family:var(--serif); font-style:italic; font-size:20px; color:var(--gold); font-weight:600; }
.svc-name { font-family:var(--serif); font-size:clamp(26px,3vw,44px); font-weight:600; font-style:italic; color:var(--text); letter-spacing:-.02em; line-height:1; }
.svc-sub { font-size:12px; font-weight:400; color:var(--text3); margin-top:4px; }
.svc-arr { font-size:22px; color:var(--text3); transition:transform .3s, color .3s; flex-shrink:0; }
.svc-row:hover .svc-arr { transform:translate(4px,-4px); color:var(--gold); }

/* ═══ VIDEO ═════════════════════════════════ */
.vid-s { position:relative; height:65vh; min-height:480px; overflow:hidden; display:flex; align-items:center; justify-content:center; }
.vid-frame { position:absolute; inset:-10%; overflow:hidden; }
.vid-frame iframe { position:absolute; top:50%; left:50%; width:120%; height:120%; transform:translate(-50%,-50%); border:none; pointer-events:none; }
.vid-fallback { position:absolute; inset:0; background:url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80&auto=format&fit=crop') center/cover no-repeat; animation:kenBurns 18s ease-in-out infinite alternate; }
.vid-ov { position:absolute; inset:0; z-index:2; background:linear-gradient(to bottom,rgba(10,9,8,.55),rgba(10,9,8,.72)),radial-gradient(ellipse 100% 100% at 50% 50%,transparent 30%,rgba(10,9,8,.8) 100%); }
.vid-txt { position:relative; z-index:3; text-align:center; padding:0 24px; display:flex; flex-direction:column; align-items:center; gap:20px; }
.vid-lbl { font-size:10px; font-weight:700; letter-spacing:.32em; text-transform:uppercase; color:var(--gold); font-family:var(--sans); }
.vid-h { font-family:var(--serif); font-size:clamp(52px,8vw,112px); font-weight:700; font-style:italic; color:var(--chalk); line-height:.88; letter-spacing:-.04em; text-shadow:0 4px 40px rgba(0,0,0,.9); }
.vid-h em { color:var(--gold); font-style:inherit; }

/* ═══ TESTIMONIALS ══════════════════════════ */
.testi-s { background:var(--bg); padding:100px 52px; }
.testi-head { text-align:center; margin-bottom:64px; }
.testi-hl { font-family:var(--serif); font-size:clamp(48px,7vw,96px); font-weight:700; font-style:italic; color:var(--text); line-height:.88; letter-spacing:-.04em; }
.testi-hl em { color:var(--gold); font-style:inherit; }
.testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; max-width:1280px; margin:0 auto; }
.testi-card { background:var(--bg2); overflow:hidden; position:relative; transition:background .4s; perspective:800px; }
.testi-card:hover { background:var(--bg3); }
.testi-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--gold),transparent); opacity:0; transition:opacity .4s; z-index:2; }
.testi-card:hover::before { opacity:1; }
.testi-photo { height:240px; overflow:hidden; position:relative; }
.testi-photo img { filter:grayscale(30%) contrast(1.05); transition:transform .6s,filter .6s; }
.testi-card:hover .testi-photo img { transform:scale(1.04); filter:grayscale(0%) contrast(1.1); }
.testi-photo-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(244,239,230,.6) 0%,transparent 55%); }
.testi-body { padding:28px 28px 32px; }
.testi-mark { font-family:var(--serif); font-size:56px; font-weight:700; color:var(--gold); opacity:.3; line-height:.7; display:block; margin-bottom:8px; }
.testi-q { font-size:15px; font-weight:500; color:var(--text2); line-height:1.75; margin-bottom:20px; letter-spacing:.005em; }
.testi-name { font-size:11px; font-weight:700; color:var(--forest2); letter-spacing:.06em; text-transform:uppercase; font-family:var(--sans); }
.testi-co { font-size:11px; color:var(--text3); margin-top:3px; font-family:var(--sans); }

/* ═══ WHY JAVER ═════════════════════════════ */
.why-s { background:var(--bg2); padding:100px 52px; border-top:1px solid var(--line2); border-bottom:1px solid var(--line2); }
.why-grid { display:grid; grid-template-columns:1fr 2.2fr; gap:80px; align-items:start; max-width:1280px; margin:0 auto; }
.why-stmt { font-family:var(--serif); font-size:clamp(28px,3.8vw,52px); font-weight:700; font-style:italic; color:var(--text); line-height:1.15; letter-spacing:-.02em; margin-bottom:28px; }
.why-stmt em { color:var(--gold); font-style:inherit; }
.why-list { display:flex; flex-direction:column; }
.why-item { display:grid; grid-template-columns:52px 1fr; gap:24px; padding:26px 0; border-bottom:1px solid var(--line2); }
.why-item:first-child { border-top:1px solid var(--line2); }
.why-n { font-family:var(--serif); font-size:14px; font-weight:700; font-style:italic; color:var(--gold); padding-top:2px; }
.why-t { font-size:15px; font-weight:700; color:var(--text); margin-bottom:6px; letter-spacing:.01em; }
.why-d { font-size:14px; font-weight:400; color:var(--text3); line-height:1.75; }

/* ═══ FAQ ════════════════════════════════════ */
.faq-s { background:var(--bg); padding:100px 52px; }
.faq-hl { font-family:var(--serif); font-size:clamp(52px,7vw,96px); font-weight:700; font-style:italic; color:var(--text); line-height:.88; letter-spacing:-.04em; }

/* ═══ CTA ═══════════════════════════════════ */
.cta-s { position:relative; min-height:80vh; display:flex; flex-direction:column; justify-content:center; overflow:hidden; padding:100px 52px; }
.cta-bg { position:absolute; inset:0; }
.cta-bg img { width:100%; height:100%; object-fit:cover; animation:kenBurnsAlt 28s ease-in-out infinite alternate-reverse; }
.cta-ov { position:absolute; inset:0; background:linear-gradient(to right,rgba(10,9,8,.98) 45%,rgba(10,9,8,.6) 100%),linear-gradient(to top,rgba(10,9,8,.9) 0%,transparent 50%); }
.cta-in { position:relative; z-index:2; max-width:1280px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.cta-h { font-family:var(--serif); font-size:clamp(68px,10vw,150px); font-weight:700; font-style:italic; color:var(--chalk); line-height:.84; letter-spacing:-.05em; text-shadow:0 4px 40px rgba(0,0,0,.8); }
.cta-h em { color:var(--gold); font-style:inherit; }
.cta-tag { font-size:11px; font-weight:600; color:rgba(240,235,225,.45); margin-bottom:20px; letter-spacing:.06em; display:block; font-family:var(--sans); text-transform:uppercase; }
.cta-sub { font-size:17px; font-weight:400; color:rgba(240,235,225,.55); line-height:1.7; margin-bottom:32px; }
.cta-btns { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:8px; }
.cta-ph { display:flex; align-items:center; gap:8px; text-decoration:none; font-size:12px; font-weight:600; color:rgba(240,235,225,.45); border:1px solid rgba(240,235,225,.15); padding:14px 22px; border-radius:2px; transition:all .25s; letter-spacing:.04em; font-family:var(--sans); }
.cta-ph:hover { color:var(--chalk); border-color:rgba(240,235,225,.45); }
.cta-ph svg { color:var(--forest2); }
.cta-meta { font-size:10px; font-weight:400; letter-spacing:.12em; color:rgba(240,235,225,.18); margin-top:16px; font-family:var(--sans); }

/* ═══ RESPONSIVE ════════════════════════════ */
@media(max-width:900px) {
  .hero-c { padding:0 20px 60px; }
  .mfst { padding:80px 20px; }
  .mfst-grid { grid-template-columns:1fr; gap:36px; }
  .svc-s { padding:80px 20px; }
  .svc-hd { grid-template-columns:1fr; gap:28px; margin-bottom:48px; }
  .svc-row { grid-template-columns:56px 1fr auto; gap:20px; }
  .testi-s { padding:80px 20px; }
  .testi-grid { grid-template-columns:1fr; }
  .why-s { padding:80px 20px; }
  .why-grid { grid-template-columns:1fr; gap:36px; }
  .faq-s { padding:80px 20px; }
  .cta-in { grid-template-columns:1fr; gap:48px; }
  .cta-s { padding:80px 20px; }
  .faq-rsp { grid-template-columns:1fr!important; gap:48px!important; }
}
@media(max-width:600px) {
  .svc-row { grid-template-columns:44px 1fr; }
  .svc-arr { display:none; }
}
`

export default function Home() {
  return (
    <>
      <style>{S}</style>

      {/* HERO — full-screen photo, cream overlay rising from bottom */}
      <section id="hero">
        <div className="hero-bg">
          <img src={MTN} alt="Javer — Performance Digital Marketing Edmonton Calgary" />
        </div>
        <div className="hero-ov" />
        <div className="hero-c">
          <div className="hero-tag">Edmonton &amp; Calgary — Performance Marketing</div>
          <h1 className="hero-h"><span className="g">J</span>aver.</h1>
          <p className="hero-value">Data-driven marketing that delivers real, measurable growth.</p>
          <p className="hero-sub">Proven strategies for serious businesses in Edmonton &amp; Calgary.</p>
          <div className="hero-div" />
          <div className="hero-btm">
            <Link href="/get-a-proposal" className="btn btn-g">Get a Free Proposal</Link>
            <Link href="/case-studies" className="btn btn-o">View Results</Link>
            <a href={TEL} className="hero-ph">
              <Phone size={12} style={{ color:'var(--forest2)' }} />{PHONE}
            </a>
          </div>
        </div>
        <div className="scroll-cue"><span>Scroll</span><div className="scroll-line" /></div>
      </section>

      <TrustBar />

      {/* MANIFESTO */}
      <section className="mfst">
        <div className="mfst-grid">
          <Reveal dir="up">
            <div className="eyebrow" style={{ color:'var(--gold)' }}>The Problem</div>
          </Reveal>
          <Reveal dir="up" delay={80}>
            <p className="mq">
              Your competitors are outspending you. Your cost-per-lead is climbing.{' '}
              <em>Your data is unreliable.</em> Most agencies are still running the old playbook.
            </p>
            <p className="mq-body">
              Javer was built for the new era — where brand identity, creative quality, and data
              precision work together. No vanity metrics. No wasted spend.
            </p>
            <Link href="/services" className="btn btn-f" style={{ fontSize:11 }}>
              See How We Solve It →
            </Link>
            <div className="mq-source">The Javer approach, since 2019</div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — numbered luxury list */}
      <section className="svc-s">
        <div className="svc-wrap">
          <div className="svc-hd">
            <Reveal dir="up">
              <h2 className="svc-hl">What we<br /><em>do.</em></h2>
            </Reveal>
            <Reveal dir="up" delay={80}>
              <p className="svc-intro">
                Six disciplines — each one calibrated for measurable return. We work
                on them individually or together as a full-service partnership.
              </p>
            </Reveal>
          </div>
          <Reveal dir="up" delay={100}>
            <div className="svc-list">
              {SERVICES.map((s) => (
                <Link key={s.n} href={s.href} className="svc-row">
                  <span className="svc-n">{s.n}</span>
                  <div>
                    <div className="svc-name">{s.name}</div>
                    <div className="svc-sub">{s.sub}</div>
                  </div>
                  <span className="svc-arr">↗</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO — dark cinematic */}
      <section className="vid-s">
        <div className="vid-frame">
          <iframe
            src="https://www.youtube.com/embed/G0ER7tFNxck?autoplay=1&mute=1&loop=1&controls=0&playlist=G0ER7tFNxck&rel=0"
            allow="autoplay; fullscreen"
            title="Javer Reel"
          />
          <div className="vid-fallback" />
        </div>
        <div className="vid-ov" />
        <div className="vid-txt">
          <Reveal dir="up"><span className="vid-lbl">Edmonton &amp; Calgary</span></Reveal>
          <Reveal dir="up" delay={80}>
            <h2 className="vid-h">Built for<br /><em>Results.</em></h2>
          </Reveal>
          <Reveal dir="up" delay={160}>
            <Link href="/get-a-proposal" className="btn btn-g">Get a Proposal</Link>
          </Reveal>
        </div>
      </section>

      {/* STATS — dark */}
      <Stats />

      {/* PHOTO STRIP */}
      <PhotoStrip />

      {/* TESTIMONIALS — light */}
      <section className="testi-s">
        <div className="testi-head">
          <Reveal dir="up">
            <div className="eyebrow">Client Results</div>
            <h2 className="testi-hl" style={{ marginTop:16 }}>What our clients <em>say.</em></h2>
          </Reveal>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testi-card" style={{ transitionDelay:`${i * 80}ms` }}>
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

      {/* WHY JAVER — light */}
      <section className="why-s">
        <div className="why-grid">
          <Reveal dir="up">
            <div className="eyebrow">Why Javer</div>
          </Reveal>
          <Reveal dir="up" delay={80}>
            <p className="why-stmt">
              Boutique agility with <em>enterprise-grade</em> expertise.
              We adapt fast, stay honest, and take genuine ownership of results.
            </p>
            <div className="why-list">
              {[
                { n:'I.',   t:'Diverse Experience',       d:'B2B and B2C across dental, construction, legal, retail, real estate, e-commerce, and more. 100+ clients over 4+ years.' },
                { n:'II.',  t:'Platform Partnerships',    d:'Google, Meta, and Microsoft partnerships give us access to betas, priority support, and exclusive training.' },
                { n:'III.', t:'Privacy-First by Default', d:'Cookieless tracking, consent management, and server-side measurement built into every engagement.' },
                { n:'IV.',  t:'Transparent Partnership',  d:'Monthly reviews, live dashboards, and honest conversations. You always know exactly where your money goes.' },
              ].map((item) => (
                <div key={item.n} className="why-item">
                  <span className="why-n">{item.n}</span>
                  <div>
                    <div className="why-t">{item.t}</div>
                    <p className="why-d">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="faq-s">
        <div className="wrap faq-rsp" style={{ display:'grid', gridTemplateColumns:'5fr 6fr', gap:100, alignItems:'start' }}>
          <div>
            <Reveal><div className="eyebrow">Questions</div></Reveal>
            <Reveal delay={60}>
              <h2 className="faq-hl" style={{ marginTop:16 }}>Frequently<br />Asked.</h2>
            </Reveal>
          </div>
          <Reveal dir="right"><FAQ items={FAQS} /></Reveal>
        </div>
      </section>

      {/* CTA — dark dramatic closer */}
      <section className="cta-s">
        <div className="cta-bg"><img src={MTN} alt="" loading="lazy" /></div>
        <div className="cta-ov" />
        <div className="cta-in">
          <Reveal dir="up">
            <h2 className="cta-h">Let us<br /><em>Prove</em><br />It.</h2>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <span className="cta-tag">Currently accepting new clients — spots limited</span>
            <p className="cta-sub">Free proposal — no templates, no fluff, no wasted meetings.</p>
            <div className="cta-btns">
              <Link href="/get-a-proposal" className="btn btn-g" style={{ fontSize:12, padding:'17px 44px' }}>
                Get a Free Proposal
              </Link>
              <a href={TEL} className="cta-ph">
                <Phone size={13} />{PHONE}
              </a>
            </div>
            <p className="cta-meta">markus.tran@wearejodigital.com · Edmonton · Calgary · javer.ca</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
