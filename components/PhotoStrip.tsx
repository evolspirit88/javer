const PHOTOS = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553034197-63f3b47a8e2c?w=600&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75&auto=format&fit=crop',
]
const S = `
  .ps { overflow:hidden; background:var(--ink); padding:0; line-height:0; }
  .ps-track { display:flex; gap:3px; animation:stripScroll 40s linear infinite; width:max-content; }
  .ps-track:hover { animation-play-state:paused; }
  .ps-img { width:380px; height:260px; flex-shrink:0; overflow:hidden; position:relative; }
  .ps-img img { width:100%; height:100%; object-fit:cover; filter:grayscale(30%) contrast(1.05); transition:filter .5s,transform .5s; display:block; }
  .ps-img:hover img { filter:grayscale(0%) contrast(1.1); transform:scale(1.04); }
`
export default function PhotoStrip() {
  const doubled = [...PHOTOS, ...PHOTOS]
  return (
    <section className="ps">
      <style>{S}</style>
      <div className="ps-track">
        {doubled.map((src, i) => (
          <div key={i} className="ps-img">
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}