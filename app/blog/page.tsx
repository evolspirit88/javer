import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | Javer',
  description: 'Expert insights on Google Ads, SEO, Meta Advertising, and performance marketing from the Javer team in Edmonton & Calgary.',
}

export const revalidate = 60

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  mainImage?: { asset?: { url: string }; alt?: string }
  categories?: { title: string }[]
  author?: { name: string }
}

const FALLBACK_PHOTOS = [
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
]

async function getPosts(): Promise<Post[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return []
  try {
    const { client }      = await import('@/sanity/lib/client')
    const { postsQuery }  = await import('@/sanity/lib/queries')
    return await client.fetch(postsQuery)
  } catch {
    return []
  }
}

const S = `
  .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(240,235,225,.04); max-width:1280px; margin:0 auto; }
  .blog-card { position:relative; overflow:hidden; text-decoration:none; color:inherit; display:block; }
  .blog-photo { height:240px; overflow:hidden; position:relative; }
  .blog-photo img { width:100%; height:100%; object-fit:cover; filter:grayscale(20%); transition:transform .6s,filter .5s; display:block; }
  .blog-card:hover .blog-photo img { transform:scale(1.05); filter:grayscale(0%); }
  .blog-photo-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,.6) 0%,transparent 60%); }
  .blog-body { background:var(--ink2); padding:24px 24px 28px; transition:background .3s; }
  .blog-card:hover .blog-body { background:var(--ink3); }
  .blog-meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
  .blog-cat { font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:var(--forest2); background:rgba(61,94,80,.15); padding:4px 10px; border-radius:1px; font-family:var(--sans); }
  .blog-date { font-size:10px; color:rgba(240,235,225,.25); font-family:var(--sans); }
  .blog-title { font-family:var(--serif); font-size:20px; font-weight:600; font-style:italic; color:var(--parchment); line-height:1.25; margin-bottom:8px; }
  .blog-excerpt { font-size:13px; font-weight:300; color:rgba(240,235,225,.4); line-height:1.6; }
  .blog-arrow { font-size:10px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--gold); margin-top:12px; display:block; font-family:var(--sans); opacity:0; transition:opacity .3s; }
  .blog-card:hover .blog-arrow { opacity:1; }
  @media(max-width:900px) { .blog-grid { grid-template-columns:1fr 1fr; } }
  @media(max-width:600px) { .blog-grid { grid-template-columns:1fr; } }
`

export default async function Blog() {
  const posts = await getPosts()

  return (
    <>
      <style>{S}</style>

      <section style={{background:'var(--ink)', padding:'140px 52px 80px', borderBottom:'1px solid rgba(240,235,225,.05)'}}>
        <div style={{maxWidth:1280, margin:'0 auto'}}>
          <div className="rise-1 eyebrow">Digital Marketing Blog</div>
          <h1 className="rise-2" style={{fontFamily:'var(--serif)', fontSize:'clamp(60px,10vw,150px)', fontWeight:600, fontStyle:'italic', color:'var(--parchment)', lineHeight:.88, letterSpacing:'-.05em'}}>
            Insights &amp;<br/>Expertise.
          </h1>
        </div>
      </section>

      <section style={{background:'var(--ink)', padding:'48px 52px 100px'}}>
        {posts.length === 0 ? (
          <div style={{maxWidth:1280, margin:'0 auto', textAlign:'center', padding:'80px 0'}}>
            <p style={{fontFamily:'var(--serif)', fontSize:24, fontStyle:'italic', color:'rgba(240,235,225,.35)'}}>
              Posts coming soon. Check back shortly.
            </p>
            <p style={{fontFamily:'var(--sans)', fontSize:12, color:'rgba(240,235,225,.2)', marginTop:12, letterSpacing:'.05em'}}>
              Connect Sanity to start publishing.
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, i) => {
              const photo = post.mainImage?.asset?.url || FALLBACK_PHOTOS[i % FALLBACK_PHOTOS.length]
              const cat   = post.categories?.[0]?.title || 'Blog'
              const date  = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-CA', { year:'numeric', month:'short', day:'numeric' })
                : ''
              return (
                <Reveal key={post._id} delay={i * 40}>
                  <Link href={`/blog/${post.slug.current}`} className="blog-card">
                    <div className="blog-photo">
                      <img src={photo} alt={post.mainImage?.alt || post.title} loading="lazy" />
                      <div className="blog-photo-ov" />
                    </div>
                    <div className="blog-body">
                      <div className="blog-meta">
                        <span className="blog-cat">{cat}</span>
                        <span className="blog-date">{date}</span>
                      </div>
                      <h2 className="blog-title">{post.title}</h2>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <span className="blog-arrow">Read More ↗</span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
