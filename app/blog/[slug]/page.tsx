import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

export const revalidate = 60
export const dynamicParams = true

interface Props { params: Promise<{ slug: string }> }

// Only pre-render slugs if env vars are available
export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return []
  try {
    const { client } = await import('@/sanity/lib/client')
    const { postSlugsQuery } = await import('@/sanity/lib/queries')
    const slugs: { slug: string }[] = await client.fetch(postSlugsQuery)
    return slugs.map(({ slug }) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params
    const { client } = await import('@/sanity/lib/client')
    const { postQuery } = await import('@/sanity/lib/queries')
    const post = await client.fetch(postQuery, { slug })
    if (!post) return { title: 'Post Not Found' }
    return {
      title:       post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      openGraph: {
        title:       post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        images:      post.mainImage?.asset?.url ? [{ url: post.mainImage.asset.url }] : [],
      },
    }
  } catch {
    return { title: 'Blog Post' }
  }
}

const portableComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(28px,3.5vw,44px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.95,letterSpacing:'-.02em',margin:'52px 0 20px'}}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{fontFamily:'var(--serif)',fontSize:'clamp(22px,2.5vw,32px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:1,margin:'40px 0 16px'}}>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 style={{fontFamily:'var(--sans)',fontSize:16,fontWeight:600,color:'var(--parchment)',margin:'32px 0 12px'}}>{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{fontFamily:'var(--serif)',fontSize:18,fontStyle:'italic',color:'rgba(240,235,225,.65)',lineHeight:1.85,margin:'0 0 24px'}}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{borderLeft:'3px solid var(--gold)',paddingLeft:28,margin:'40px 0',fontFamily:'var(--serif)',fontSize:22,fontStyle:'italic',color:'rgba(240,235,225,.55)',lineHeight:1.5}}>{children}</blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string; blank?: boolean }; children: React.ReactNode }) => (
      <a href={value?.href} target={value?.blank ? '_blank' : undefined} rel={value?.blank ? 'noopener noreferrer' : undefined}
         style={{color:'var(--forest2)',textDecoration:'underline',textUnderlineOffset:3}}>{children}</a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul style={{margin:'0 0 24px',paddingLeft:24}}>{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol style={{margin:'0 0 24px',paddingLeft:24}}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.6)',lineHeight:1.8,marginBottom:8,listStyleType:'disc'}}>{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(240,235,225,.6)',lineHeight:1.8,marginBottom:8}}>{children}</li>
    ),
  },
}

const S = `
  .post-hero { min-height:55vh; position:relative; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; }
  .post-hero-img { position:absolute; inset:0; }
  .post-hero-img img { width:100%; height:100%; object-fit:cover; filter:brightness(.5) contrast(1.05); display:block; }
  .post-hero-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(10,9,8,1) 0%,rgba(10,9,8,.6) 40%,rgba(10,9,8,.1) 100%); }
  .post-hero-c { position:relative; z-index:2; padding:0 52px 64px; max-width:900px; margin:0 auto; width:100%; }
  .post-body { max-width:720px; margin:0 auto; padding:72px 52px 120px; }
  .post-author { display:flex; align-items:center; gap:14px; padding:28px 0; border-top:1px solid rgba(240,235,225,.06); margin-top:60px; }
  .post-author-img { width:44px; height:44px; border-radius:50%; overflow:hidden; flex-shrink:0; }
  @media(max-width:768px) { .post-hero-c { padding:0 20px 48px; } .post-body { padding:48px 20px 80px; } }
`

export default async function Post({ params }: Props) {
  const { slug } = await params

  try {
    const { client } = await import('@/sanity/lib/client')
    const { postQuery } = await import('@/sanity/lib/queries')
    const post = await client.fetch(postQuery, { slug })
    if (!post) notFound()

    const date = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString('en-CA', { year:'numeric', month:'long', day:'numeric' })
      : ''
    const cats = post.categories?.map((c: { title: string }) => c.title).join(' · ') || ''

    return (
      <>
        <style>{S}</style>
        <section className="post-hero" style={{background:'var(--ink)'}}>
          {post.mainImage?.asset?.url && (
            <div className="post-hero-img"><img src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title} /></div>
          )}
          <div className="post-hero-ov" />
          <div className="post-hero-c">
            {cats && <div style={{fontFamily:'var(--sans)',fontSize:10,fontWeight:700,letterSpacing:'.25em',textTransform:'uppercase',color:'var(--forest2)',marginBottom:14}}>{cats}</div>}
            <h1 style={{fontFamily:'var(--serif)',fontSize:'clamp(36px,5.5vw,72px)',fontWeight:600,fontStyle:'italic',color:'var(--parchment)',lineHeight:.92,letterSpacing:'-.03em',marginBottom:18}}>
              {post.title}
            </h1>
            <div style={{display:'flex',alignItems:'center',gap:16,fontFamily:'var(--sans)',fontSize:11,color:'rgba(240,235,225,.35)',flexWrap:'wrap'}}>
              {post.author?.name && <span>By {post.author.name}</span>}
              {date && <><span style={{opacity:.4}}>·</span><span>{date}</span></>}
            </div>
          </div>
        </section>

        <section style={{background:'var(--ink)'}}>
          <div className="post-body">
            <p style={{fontFamily:'var(--serif)',fontSize:'clamp(19px,2vw,26px)',fontStyle:'italic',color:'rgba(240,235,225,.5)',lineHeight:1.55,marginBottom:48,paddingBottom:48,borderBottom:'1px solid rgba(240,235,225,.06)'}}>
              {post.excerpt}
            </p>
            <PortableText value={post.body} components={portableComponents as any} />
            {post.author?.name && (
              <div className="post-author">
                {post.author.image?.asset?.url && (
                  <div className="post-author-img"><img src={post.author.image.asset.url} alt={post.author.name} /></div>
                )}
                <div>
                  <div style={{fontFamily:'var(--sans)',fontSize:13,fontWeight:600,color:'var(--parchment)'}}>{post.author.name}</div>
                  <div style={{fontFamily:'var(--sans)',fontSize:11,color:'rgba(240,235,225,.3)',marginTop:2}}>Javer Digital Marketing</div>
                </div>
              </div>
            )}
            <div style={{marginTop:40,paddingTop:40,borderTop:'1px solid rgba(240,235,225,.06)'}}>
              <Link href="/blog" style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:600,letterSpacing:'.15em',textTransform:'uppercase',color:'var(--forest2)',textDecoration:'none'}}>
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        <section style={{background:'var(--forest)',padding:'64px 52px',textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--serif)',fontSize:'clamp(28px,4vw,56px)',fontWeight:600,fontStyle:'italic',color:'var(--chalk)',lineHeight:.92,letterSpacing:'-.03em',marginBottom:20}}>
            Ready to put this into action?
          </h2>
          <p style={{fontFamily:'var(--serif)',fontSize:17,fontStyle:'italic',color:'rgba(250,248,244,.5)',marginBottom:28}}>
            Let Javer build the strategy and run the campaigns.
          </p>
          <Link href="/get-a-proposal" style={{background:'var(--chalk)',color:'var(--forest)',fontFamily:'var(--sans)',fontSize:11,fontWeight:700,letterSpacing:'.15em',textTransform:'uppercase',padding:'14px 36px',borderRadius:1,textDecoration:'none',display:'inline-block'}}>
            Get a Free Proposal
          </Link>
        </section>
      </>
    )
  } catch {
    notFound()
  }
}
