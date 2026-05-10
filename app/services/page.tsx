import type { Metadata } from 'next'
import Link from 'next/link'
import Stats from '@/components/Stats'

export const metadata: Metadata = { title: 'Services' }

const MTN = 'https://wearejodigital.com/wp-content/uploads/2024/02/Mountain-BG-min-scaled.jpg'

const SERVICES = [
  { n:'01', name:'Website Design',     desc:'Your website is your best salesperson — we build it to convert visitors into revenue around the clock.',              photo:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=85&auto=format&fit=crop', href:'/services/web-design',           tags:['UX/UI','CRO','WordPress'] },
  { n:'02', name:'Digital Strategy',   desc:'Rigorous research into your brand, competitors, and audience — translated into a clear, accountable roadmap.',       photo:'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85&auto=format&fit=crop',  href:'/services/digital-strategy',    tags:['Brand','Audience','Media'] },
  { n:'03', name:'Google Ads',         desc:'From search and Performance Max to YouTube — managed end-to-end. Every dollar tracked for maximum ROI.',             photo:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',  href:'/services/google-ads',           tags:['Search','PMax','YouTube'] },
  { n:'04', name:'Meta Advertising',   desc:'Performance-driven social advertising with Conversion API implementation — built for the cookieless era.',           photo:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop', href:'/services/meta',                 tags:['Facebook','Instagram','CAPI'] },
  { n:'05', name:'SEO',                desc:'Sustainable organic growth through technical audits, keyword strategy, and local SEO. Built to rank and stay ranked.',photo:'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&q=85&auto=format&fit=crop',  href:'/services/seo',                  tags:['Technical','Local','Content'] },
  { n:'06', name:'Campaign Tracking',  desc:'Without accurate tracking it is impossible to tell if your marketing is working. We make tracking reliable.',       photo:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop',  href:'/services/campaign-tracking',    tags:['GA4','GTM','CAPI'] },
  { n:'07', name:'Advanced Analytics', desc:'Full-stack measurement — data warehousing, attribution, consent management, and live dashboards.',                  photo:'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=85&auto=format&fit=crop',  href:'/services/advanced-analytics',   tags:['BigQuery','Looker','CMP'] },
]

const S = `
  .svc-ov-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--ink); }
  .svc-ov-card { position:relative; overflow:hidden; min-height:340px; cursor:pointer; }
  .svc-ov-card:nth-child(1) { grid-column:1/3; min-height:420px; }
  .svc-ov-img { position:absolute; inset:0; transition:transform .8s cubic-bezier(.22,1,.36,1); }
  .svc-ov-img img { width:100%; height:100%; object-fit:cover; }
  .svc-ov-card:hover .svc-ov-img { transform:scale(1.05); }
  .svc-ov-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.92) 0%,rgba(10,9,8,.3) 55%,rgba(10,9,8,.06) 100%); transition:background .5s; }
  .svc-ov-card:hover .svc-ov-ov { background:linear-gradient(to top,rgba(10,9,8,.97) 0%,rgba(10,9,8,.5) 55%,rgba(10,9,8,.1) 100%); }
  .svc-ov-txt { position:absolute; bottom:0; left:0; right:0; padding:28px 32px; z-index:2; }
  .svc-ov-n { font-size:9px; font-weight:600; letter-spacing:.3em; text-transform:uppercase; color:rgba(201,169,110,.6); margin-bottom:6px; font-family:var(--sans); }
  .svc-ov-name { font-family:var(--serif); font-size:clamp(20px,2.5vw,32px); font-weight:600; font-style:italic; color:var(--parchment); line-height:1; letter-spacing:-.02em; margin-bottom:10px; }
  .svc-ov-desc { font-size:13px; font-weight:300; color:rgba(240,235,225,.45); line-height:1.65; max-width:420px; font-family:var(--sans); opacity:0; transform:translateY(8px); transition:opacity .4s,transform .4s; }
  .svc-ov-card:hover .svc-ov-desc { opacity:1; transform:translateY(0); }
  .svc-ov-line { position:absolute; top:0; left:0; right:100%; height:2px; background:linear-gradient(90deg,var(--gold),var(--forest2)); transition:right .5s cubic-bezier(.22,1,.36,1); z-index:3; }
  .svc-ov-card:hover .svc-ov-line { right:0; }
  @media(max-width:900px) { .svc-ov-grid { grid-template-columns:1fr 1fr; } .svc-ov-card:nth-child(1) { grid-column:1/3; } }
  @media(max-width:600px) { .svc-ov-grid { grid-template-columns:1fr; } .svc-ov-card:nth-child(1) { grid-column:1; } }
`

export default function Services() {
  return (
    <>
      <style>{S}</style>

      <section style={{position:'relative',minHeight:'65vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><img src={MTN} alt="" style={{width:'100%',height:'100%',objectFit:'cover',animation:'kenBurns 22s ease-in-out infinite alternate'}}/><div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.55) 40%,rgba(10,9,8,.15) 100%)'}}/></div>
        <div style={{position:'relative',zIndex:2,padding:'0 52px 72px',maxWidth:1280,margin:'0 auto',width:'100%'}}>
          <div className="rise-1 eyebrow-light">Full-Service Agency</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(60px,10vw,150px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.88,letterSpacing:'-.05em'}}>
            Digital Marketing<br/>Services.
          </h1>
        </div>
      </section>

      <section style={{background:'var(--ink)',padding:0}}>
        <div className="svc-ov-grid">
          {SERVICES.map(s => (
            <Link key={s.n} href={s.href} style={{textDecoration:'none',color:'inherit'}} className="svc-ov-card">
              <div className="svc-ov-img"><img src={s.photo} alt={s.name} loading="lazy" /></div>
              <div className="svc-ov-ov" />
              <div className="svc-ov-line" />
              <div className="svc-ov-txt">
                <div className="svc-ov-n">{s.n}</div>
                <div className="svc-ov-name">{s.name}</div>
                <p className="svc-ov-desc">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Stats />
    </>
  )
}