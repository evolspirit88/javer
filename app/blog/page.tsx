import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = { title: 'Blog' }

const POSTS = [
  { title:'7 Best Practices for SEO-Friendly Blog Posts', date:'Dec 27, 2024', cat:'Content', photo:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Why SEO Will Still Be Crucial in 2025', date:'Dec 6, 2024', cat:'SEO', photo:'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Effective Campaign Evaluation Strategies', date:'Nov 26, 2024', cat:'Analytics', photo:'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Unlocking Google Ads Success in Edmonton', date:'Nov 19, 2024', cat:'Google Ads', photo:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Crafting Mobile-Friendly Websites in Edmonton', date:'Nov 11, 2024', cat:'Web Design', photo:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Unlock Insights with Marketing Analytics', date:'Nov 9, 2024', cat:'Analytics', photo:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Edmonton SEO Strategies for Mobile Search', date:'Nov 8, 2024', cat:'SEO', photo:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop', live:false },
  { title:'Edmonton SEO Optimization: A Comprehensive Guide', date:'Feb 28, 2024', cat:'SEO', photo:'https://images.unsplash.com/photo-1553034197-63f3b47a8e2c?w=800&q=80&auto=format&fit=crop', live:false },
]

const S = `
  .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(240,235,225,.04); max-width:1280px; margin:0 auto; }
  .blog-card { position:relative; overflow:hidden; cursor:pointer; }
  .blog-photo { height:240px; overflow:hidden; position:relative; }
  .blog-photo img { width:100%; height:100%; object-fit:cover; filter:grayscale(20%); transition:transform .6s,filter .5s; }
  .blog-card:hover .blog-photo img { transform:scale(1.05); filter:grayscale(0%); }
  .blog-photo-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.6) 0%,transparent 60%); }
  .blog-body { background:var(--ink2); padding:24px 24px 28px; transition:background .3s; }
  .blog-card:hover .blog-body { background:var(--ink3); }
  .blog-meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
  .blog-cat { font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:var(--forest2); background:rgba(61,94,80,.15); padding:4px 10px; border-radius:1px; font-family:var(--sans); }
  .blog-cs { font-size:9px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:rgba(240,235,225,.25); border:1px solid rgba(240,235,225,.1); padding:4px 8px; border-radius:1px; font-family:var(--sans); }
  .blog-date { font-size:10px; color:rgba(240,235,225,.25); font-family:var(--sans); }
  .blog-title { font-family:var(--serif); font-size:20px; font-weight:600; font-style:italic; color:var(--parchment); line-height:1.25; }
  @media(max-width:900px) { .blog-grid { grid-template-columns:1fr 1fr; } }
  @media(max-width:600px) { .blog-grid { grid-template-columns:1fr; } }
`

export default function Blog() {
  return (
    <>
      <style>{S}</style>
      <section style={{background:'var(--ink)',padding:'140px 52px 80px',borderBottom:'1px solid rgba(240,235,225,.05)'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div className="rise-1 eyebrow">Digital Marketing Blog</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)',fontSize:'clamp(60px,10vw,150px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.88,letterSpacing:'-.05em'}}>
            Insights &amp;<br/>Expertise.
          </h1>
        </div>
      </section>
      <section style={{background:'var(--ink)',padding:'48px 52px 100px'}}>
        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i*40}>
              <div className="blog-card">
                <div className="blog-photo">
                  <img src={p.photo} alt={p.title} loading="lazy" />
                  <div className="blog-photo-ov" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{p.cat}</span>
                    {p.live ? <span className="blog-date">{p.date}</span> : <span className="blog-cs">Coming Soon</span>}
                  </div>
                  <h2 className="blog-title">{p.title}</h2>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}