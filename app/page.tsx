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
  {
    n: '01', name: 'Website Design',
    desc: 'Conversion-first design that turns visitors into revenue around the clock.',
    photo: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85&auto=format&fit=crop',
    href: '/services/web-design', cta: 'Get a Quote',
  },
  {
    n: '02', name: 'Digital Strategy',
    desc: '',
    photo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85&auto=format&fit=crop',
    href: '/services/digital-strategy', cta: 'Learn More',
  },
  {
    n: '03', name: 'Google Ads',
    desc: '',
    photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',
    href: '/services/google-ads', cta: 'Free Audit',
  },
  {
    n: '04', name: 'Facebook & Instagram',
    desc: '',
    photo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop',
    href: '/services/meta', cta: 'Free Audit',
  },
  {
    n: '05', name: 'SEO',
    desc: '',
    photo: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&q=85&auto=format&fit=crop',
    href: '/services/seo', cta: 'Free Audit',
  },
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
#hero{height:100vh;min-height:700px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}
.hero-bg{position:absolute;inset:0;animation:kenBurns 24s ease-in-out infinite alternate}
.hero-bg img{width:100%;height:100%;object-fit:cover}
.hero-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,8,.98) 0%,rgba(10,9,8,.88) 25%,rgba(10,9,8,.55) 55%,rgba(10,9,8,.2) 100%),linear-gradient(105deg,rgba(10,9,8,.7) 0%,rgba(10,9,8,.2) 50%,transparent 100%)}
.hero-vign{position:absolute;inset:0;background:radial-gradient(ellipse 140% 140% at 50% 50%,transparent 30%,rgba(10,9,8,.7) 100%)}
.hero-hor{position:absolute;top:50%;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,169,110,.6) 30%,rgba(201,169,110,.8) 50%,rgba(201,169,110,.6) 70%,transparent);pointer-events:none}
.hero-c{position:relative;z-index:2;padding:0 52px 72px;max-width:1280px;margin:0 auto;width:100%}
.hero-tag{display:inline-flex;align-items:center;gap:14px;font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:24px;opacity:0;animation:riseIn .7s .15s ease forwards;font-family:var(--sans)}
.hero-tag::before{content:'';width:32px;height:1px;background:linear-gradient(90deg,transparent,var(--gold))}
.hero-h{font-family:var(--serif);font-weight:700;font-style:italic;font-size:clamp(60px,8.5vw,110px);line-height:.85;letter-spacing:-.05em;color:var(--parchment);text-shadow:0 4px 60px rgba(0,0,0,.8),0 2px 20px rgba(0,0,0,.9);margin-bottom:24px;opacity:0;animation:riseIn .95s .05s cubic-bezier(.16,1,.3,1) forwards}
.hero-h .g{color:var(--gold)}
.hero-value{font-size:clamp(20px,2.2vw,28px);font-weight:700;color:var(--parchment);line-height:1.25;max-width:560px;text-shadow:0 3px 28px rgba(0,0,0,.9);margin:14px 0 10px;opacity:0;animation:riseIn .7s .18s ease forwards;letter-spacing:-.01em}
.hero-sub{font-size:clamp(14px,1.4vw,17px);font-weight:400;color:rgba(240,235,225,.6);line-height:1.6;max-width:500px;text-shadow:0 2px 20px rgba(0,0,0,.85);margin-bottom:28px;opacity:0;animation:riseIn .7s .28s ease forwards}
.hero-div{width:100%;height:1px;background:linear-gradient(90deg,rgba(201,169,110,.5),rgba(201,169,110,.15) 40%,transparent);margin-bottom:28px;opacity:0;animation:riseIn .5s .4s ease forwards}
.hero-urgency{display:inline-flex;align-items:center;gap:8px;background:rgba(43,66,55,.5);border:1px solid rgba(61,94,80,.65);padding:7px 14px;border-radius:40px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(240,235,225,.88);margin-bottom:16px;opacity:0;animation:riseIn .5s .42s ease forwards;font-family:var(--sans)}
.hero-urgency::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--gold);flex-shrink:0;animation:urgPulse 2s ease-in-out infinite}
.hero-btm{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;opacity:0;animation:riseIn .7s .5s ease forwards}
.hero-ph{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:rgba(240,235,225,.45);text-decoration:none;letter-spacing:.03em;transition:color .2s;font-family:var(--sans)}
.hero-ph:hover{color:var(--gold)}
.scroll-cue{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;animation:fadeIn 1s 1.2s ease forwards}
.scroll-cue span{font-size:9px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:rgba(240,235,225,.25);font-family:var(--sans)}
.scroll-line{width:1px;height:44px;background:linear-gradient(to bottom,rgba(201,169,110,.6),transparent);animation:scrollPulse 2.2s 1.5s ease-in-out infinite}

/* ═══ MANIFESTO ════════════════════════════ */
.mfst{background:var(--ink);padding:100px 52px;border-bottom:1px solid rgba(201,169,110,.08)}
.mfst-grid{display:grid;grid-template-columns:1fr 2.2fr;gap:80px;align-items:start;max-width:1280px;margin:0 auto}
.mq{font-family:var(--serif);font-size:clamp(28px,3.5vw,52px);font-weight:700;font-style:italic;color:var(--chalk);line-height:1.2;letter-spacing:-.02em}
.mq em{color:var(--gold);font-style:inherit;position:relative}
.mq em::after{content:'';position:absolute;left:0;right:0;bottom:-3px;height:1.5px;background:linear-gradient(90deg,var(--gold),transparent)}
.mq-body{font-size:16px;font-weight:400;color:rgba(240,235,225,.55);line-height:1.8;margin-top:24px;margin-bottom:28px}
.mq-source{display:flex;align-items:center;gap:16px;margin-top:32px;padding-top:28px;border-top:1px solid rgba(240,235,225,.07);font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:rgba(240,235,225,.3);font-family:var(--sans)}
.mq-source::before{content:'';display:block;width:28px;height:1px;background:rgba(240,235,225,.2)}

/* ═══ SERVICES ══════════════════════════════ */
.svc-grid{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:auto auto;gap:3px;background:rgba(240,235,225,.05)}
.svc-card{position:relative;overflow:hidden;cursor:pointer;min-height:320px}
.svc-card:nth-child(1){grid-column:1;grid-row:1/3;min-height:640px}
.svc-card:nth-child(2){grid-column:2;grid-row:1}
.svc-card:nth-child(3){grid-column:3;grid-row:1}
.svc-card:nth-child(4){grid-column:2;grid-row:2}
.svc-card:nth-child(5){grid-column:3;grid-row:2}
.svc-img{position:absolute;inset:0;transition:transform .8s cubic-bezier(.22,1,.36,1)}
.svc-img img{width:100%;height:100%;object-fit:cover}
.svc-card:hover .svc-img{transform:scale(1.06)}
.svc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,8,.97) 0%,rgba(10,9,8,.7) 40%,rgba(10,9,8,.25) 100%);transition:background .4s}
.svc-card:hover .svc-ov{background:linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.8) 45%,rgba(10,9,8,.35) 100%)}
.svc-line{position:absolute;top:0;left:0;right:100%;height:3px;background:linear-gradient(90deg,var(--gold),var(--forest2));transition:right .5s cubic-bezier(.22,1,.36,1);z-index:3}
.svc-card:hover .svc-line{right:0}
.svc-txt{position:absolute;bottom:0;left:0;right:0;padding:clamp(20px,2.5vw,36px);z-index:2}
.svc-num{font-size:10px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;opacity:.9;font-family:var(--sans)}
.svc-name{font-family:var(--serif);font-size:clamp(26px,2.8vw,42px);font-weight:700;font-style:italic;color:var(--chalk);line-height:.95;letter-spacing:-.02em;text-shadow:0 2px 20px rgba(0,0,0,.8)}
.svc-desc{font-size:14px;font-weight:400;color:rgba(240,235,225,.75);line-height:1.6;margin-top:10px;max-width:380px;opacity:0;transform:translateY(8px);transition:opacity .4s,transform .4s}
.svc-card:hover .svc-desc{opacity:1;transform:translateY(0)}
.svc-cta{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);text-decoration:none;opacity:0;transform:translateY(8px);transition:opacity .4s .05s,transform .4s .05s;font-family:var(--sans)}
.svc-card:hover .svc-cta{opacity:1;transform:translateY(0)}

/* ═══ VIDEO ═════════════════════════════════ */
.vid-s{position:relative;height:65vh;min-height:480px;overflow:hidden;display:flex;align-items:center;justify-content:center}
.vid-frame{position:absolute;inset:-10%;overflow:hidden}
.vid-frame iframe{position:absolute;top:50%;left:50%;width:120%;height:120%;transform:translate(-50%,-50%);border:none;pointer-events:none}
.vid-fallback{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80&auto=format&fit=crop') center/cover no-repeat;animation:kenBurns 18s ease-in-out infinite alternate}
.vid-ov{position:absolute;inset:0;z-index:2;background:linear-gradient(to bottom,rgba(10,9,8,.5),rgba(10,9,8,.65)),radial-gradient(ellipse 100% 100% at 50% 50%,transparent 30%,rgba(10,9,8,.75) 100%)}
.vid-txt{position:relative;z-index:3;text-align:center;padding:0 24px;display:flex;flex-direction:column;align-items:center;gap:20px}
.vid-lbl{font-size:11px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);font-family:var(--sans)}
.vid-h{font-family:var(--serif);font-size:clamp(52px,8vw,112px);font-weight:700;font-style:italic;color:var(--chalk);line-height:.88;letter-spacing:-.04em;text-shadow:0 4px 40px rgba(0,0,0,.9)}
.vid-h em{color:var(--gold);font-style:inherit}

/* ═══ TESTIMONIALS ══════════════════════════ */
.testi-s{background:var(--ink2);padding:100px 52px;position:relative;overflow:hidden}
.testi-s::before{content:'';position:absolute;inset:0;background:url('https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg') center 40%/cover no-repeat;opacity:.05;pointer-events:none}
.testi-head{text-align:center;position:relative;z-index:1;margin-bottom:64px}
.testi-hl{font-family:var(--serif);font-size:clamp(48px,7vw,96px);font-weight:700;font-style:italic;color:var(--chalk);line-height:.88;letter-spacing:-.04em}
.testi-hl em{color:var(--gold);font-style:inherit}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;position:relative;z-index:1;max-width:1280px;margin:0 auto}
.testi-card{background:rgba(240,235,225,.04);border:1px solid rgba(240,235,225,.07);overflow:hidden;position:relative;transition:border-color .4s;perspective:800px}
.testi-card:hover{border-color:rgba(201,169,110,.25)}
.testi-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--forest2),transparent);opacity:0;transition:opacity .4s;z-index:2}
.testi-card:hover::before{opacity:1}
.testi-photo{height:250px;overflow:hidden;position:relative}
.testi-photo img{filter:grayscale(20%);transition:transform .6s,filter .6s}
.testi-card:hover .testi-photo img{transform:scale(1.04);filter:grayscale(0%)}
.testi-photo-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,9,8,.55) 0%,transparent 60%)}
.testi-body{padding:28px 28px 32px}
.testi-mark{font-family:var(--serif);font-size:60px;font-weight:700;color:var(--gold);opacity:.25;line-height:.7;display:block;margin-bottom:8px}
.testi-q{font-size:15px;font-weight:500;color:rgba(240,235,225,.82);line-height:1.7;margin-bottom:20px;letter-spacing:.01em}
.testi-name{font-size:12px;font-weight:700;color:var(--forest2);letter-spacing:.05em;font-family:var(--sans)}
.testi-co{font-size:11px;color:rgba(240,235,225,.35);margin-top:3px;font-family:var(--sans)}

/* ═══ WHY JAVER ═════════════════════════════ */
.why-s{background:var(--ink);padding:100px 52px;border-top:1px solid rgba(201,169,110,.08);border-bottom:1px solid rgba(201,169,110,.08)}
.why-grid{display:grid;grid-template-columns:1fr 2.2fr;gap:80px;align-items:start;max-width:1280px;margin:0 auto}
.why-stmt{font-family:var(--serif);font-size:clamp(28px,3.8vw,52px);font-weight:700;font-style:italic;color:var(--chalk);line-height:1.15;letter-spacing:-.02em;margin-bottom:28px}
.why-stmt em{color:var(--gold);font-style:inherit}
.why-list{display:flex;flex-direction:column}
.why-item{display:grid;grid-template-columns:48px 1fr;gap:24px;padding:26px 0;border-bottom:1px solid rgba(240,235,225,.06)}
.why-item:first-child{border-top:1px solid rgba(240,235,225,.06)}
.why-n{font-family:var(--serif);font-size:14px;font-weight:700;font-style:italic;color:var(--gold);padding-top:2px}
.why-t{font-size:15px;font-weight:700;color:var(--chalk);margin-bottom:6px;letter-spacing:.01em}
.why-d{font-size:14px;font-weight:400;color:rgba(240,235,225,.5);line-height:1.7}

/* ═══ CTA ═══════════════════════════════════ */
.cta-s{position:relative;min-height:80vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:100px 52px}
.cta-bg{position:absolute;inset:0}
.cta-bg img{width:100%;height:100%;object-fit:cover;animation:kenBurnsAlt 28s ease-in-out infinite alternate-reverse}
.cta-ov{position:absolute;inset:0;background:linear-gradient(to right,rgba(10,9,8,.98) 45%,rgba(10,9,8,.65) 100%),linear-gradient(to top,rgba(10,9,8,.9) 0%,transparent 50%)}
.cta-in{position:relative;z-index:2;max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.cta-h{font-family:var(--serif);font-size:clamp(68px,10vw,150px);font-weight:700;font-style:italic;color:var(--chalk);line-height:.84;letter-spacing:-.05em;text-shadow:0 4px 40px rgba(0,0,0,.8)}
.cta-h em{color:var(--gold);font-style:inherit}
.cta-tag{font-size:12px;font-weight:600;color:rgba(240,235,225,.5);margin-bottom:24px;letter-spacing:.05em;display:block;font-family:var(--sans)}
.cta-sub{font-size:17px;font-weight:400;color:rgba(240,235,225,.6);line-height:1.65;margin-bottom:28px}
.cta-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px}
.cta-ph{display:flex;align-items:center;gap:8px;text-decoration:none;font-size:12px;font-weight:600;color:rgba(240,235,225,.5);border:1.5px solid rgba(240,235,225,.15);padding:14px 24px;border-radius:2px;transition:all .25s;letter-spacing:.04em;font-family:var(--sans)}
.cta-ph:hover{color:var(--parchment);border-color:rgba(240,235,225,.4)}
.cta-ph svg{color:var(--forest2)}
.cta-meta{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:rgba(240,235,225,.2);margin-top:16px;font-family:var(--sans)}

/* ═══ RESPONSIVE ════════════════════════════ */
@media(max-width:900px){
  .hero-c{padding:0 20px 60px}
  .hero-btm{grid-template-columns:1fr}
  .mfst{padding:80px 20px}
  .mfst-grid{grid-template-columns:1fr;gap:36px}
  .svc-grid{grid-template-columns:1fr 1fr}
  .svc-card:nth-child(1){grid-column:1/3;grid-row:1;min-height:52vw}
  .svc-card:nth-child(2){grid-column:1;grid-row:2;min-height:50vw}
  .svc-card:nth-child(3){grid-column:2;grid-row:2}
  .svc-card:nth-child(4){grid-column:1;grid-row:3}
  .svc-card:nth-child(5){grid-column:2;grid-row:3}
  .testi-grid{grid-template-columns:1fr}
  .testi-s{padding:80px 20px}
  .why-s{padding:80px 20px}
  .why-grid{grid-template-columns:1fr;gap:36px}
  .cta-in{grid-template-columns:1fr;gap:48px}
  .cta-s{padding:80px 20px}
}
@media(max-width:900px){
  .faq-rsp{grid-template-columns:1fr!important;gap:48px!important}
}
@media(max-width:600px){
  .svc-grid{grid-template-columns:1fr}
  .svc-card{min-height:70vw!important}
  .svc-card:nth-child(1),.svc-card:nth-child(2),.svc-card:nth-child(3),.svc-card:nth-child(4),.svc-card:nth-child(5){grid-column:1;grid-row:auto}
}
`

export default function Home() {
  return (
    <>
      <style>{S}</style>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg">
          <img src={MTN} alt="Javer — Performance Digital Marketing" />
        </div>
        <div className="hero-ov" />
        <div className="hero-vign" />
        <div className="hero-hor" />
        <div className="hero-c">
          <div className="hero-tag">Edmonton &amp; Calgary — Performance Marketing</div>
          <h1 className="hero-h"><span className="g">J</span>aver.</h1>
          <p className="hero-value">Data-driven marketing that delivers real, measurable growth.</p>
          <p className="hero-sub">Proven strategies for serious businesses in Edmonton &amp; Calgary.</p>
          <div className="hero-div" />
          <div className="hero-urgency">Accepting new clients for Q3 2025</div>
          <div className="hero-btm">
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <Link href="/get-a-proposal" className="btn btn-g">Get a Free Proposal</Link>
              <Link href="/case-studies" className="btn btn-o">View Results</Link>
            </div>
            <a href={TEL} className="hero-ph">
              <Phone size={13} style={{ color:'var(--forest2)' }} />{PHONE}
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
            <div className="eyebrow">The Problem</div>
          </Reveal>
          <Reveal dir="up" delay={80}>
            <p className="mq">
              Your competitors are outspending you. Your cost-per-lead is climbing.{' '}
              <em>Your data is unreliable.</em> Most agencies are still running the old playbook.
            </p>
            <p className="mq-body">
              Javer was built for the new era — where brand identity, creative quality, and data
              precision have to work together. No vanity metrics. No wasted spend.
            </p>
            <Link href="/services" className="btn btn-f" style={{ fontSize:11 }}>
              See How We Solve It →
            </Link>
            <div className="mq-source">— The Javer approach, since 2019</div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE PHOTO GRID */}
      <section style={{ background:'var(--ink)', padding:0 }}>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div key={s.n} className="svc-card">
              <div className="svc-img"><img src={s.photo} alt={s.name} loading="lazy" /></div>
              <div className="svc-ov" />
              <div className="svc-line" />
              <div className="svc-txt">
                <div className="svc-num">{s.n}</div>
                <div className="svc-name">{s.name}</div>
                {s.desc && <p className="svc-desc">{s.desc}</p>}
                <Link href={s.href} className="svc-cta">{s.cta} ↗</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
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

      <Stats />
      <PhotoStrip />

      {/* TESTIMONIALS */}
      <section className="testi-s">
        <div className="testi-head">
          <Reveal dir="up">
            <h2 className="testi-hl">What our clients <em>say.</em></h2>
          </Reveal>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testi-card" style={{ transitionDelay:`${i * 100}ms` }}>
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

      {/* WHY JAVER */}
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
                { n:'I.',   t:'Diverse Experience',      d:'B2B and B2C across dental, construction, legal, retail, real estate, e-commerce, and more. 100+ clients over 4+ years.' },
                { n:'II.',  t:'Platform Partnerships',   d:'Google, Meta, and Microsoft partnerships give us access to betas, priority support, and exclusive training.' },
                { n:'III.', t:'Privacy-First by Default', d:'Cookieless tracking, consent management, and server-side measurement built into every engagement.' },
                { n:'IV.',  t:'Transparent Partnership', d:'Monthly reviews, live dashboards, and honest conversations. You always know exactly where your money goes.' },
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

      {/* FAQ */}
      <section className="section" style={{ background:'var(--ink)' }}>
        <div className="wrap faq-rsp" style={{ display:'grid', gridTemplateColumns:'5fr 6fr', gap:100, alignItems:'start' }}>
          <div>
            <Reveal><div className="eyebrow">Questions</div></Reveal>
            <Reveal delay={60}>
              <h2 style={{
                fontFamily:'var(--serif)', fontSize:'clamp(52px,7vw,96px)',
                fontWeight:700, fontStyle:'italic', color:'var(--chalk)',
                lineHeight:.88, letterSpacing:'-.04em',
              }}>
                Frequently<br />Asked.
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
            <h2 className="cta-h">Let us<br /><em>Prove</em><br />It.</h2>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <span className="cta-tag">Currently accepting new clients for Q3 2025 — spots limited</span>
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
