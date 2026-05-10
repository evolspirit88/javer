
const partners = [
  { label: 'Google Partner',            icon: '◉' },
  { label: 'Meta Business Partner',     icon: '◉' },
  { label: 'Microsoft Advertising',     icon: '◉' },
]

const proofs = [
  { value: '100+',  label: 'Clients Served' },
  { value: '25×',   label: 'Best ROI Result' },
  { value: '4+ yrs',label: 'In Business' },
]

export default function TrustBar() {
  return (
    <div style={{background:'#2E2C27', borderTop:'1px solid rgba(255,255,255,0.05)', fontFamily:'var(--font-dm-sans)'}}>
      <div className="max-w-[1180px] mx-auto px-12 py-4 flex flex-wrap items-center justify-between gap-4">

        {/* Partner badges */}
        <div className="flex items-center gap-6 flex-wrap">
          {partners.map(p => (
            <div key={p.label} className="flex items-center gap-2">
              <span style={{fontSize:8, color:'#3A5A4A'}}>◆</span>
              <span style={{fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'rgba(250,248,244,0.55)'}}>
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="flex items-center gap-6 flex-wrap">
          {proofs.map(p => (
            <div key={p.label} className="flex items-center gap-2">
              <span style={{fontFamily:'var(--font-cormorant)',fontSize:22,fontWeight:700,fontStyle:'italic',color:'rgba(250,248,244,0.8)'}}>
                {p.value}
              </span>
              <span style={{fontSize:11,color:'rgba(250,248,244,0.35)',letterSpacing:'0.05em',textTransform:'uppercase'}}>
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Edmonton + Calgary */}
        <div style={{fontSize:11,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(250,248,244,0.3)'}}>
          Edmonton · Calgary · Canada
        </div>
      </div>
    </div>
  )
}