const S = `
  .tb { background:var(--bg2); border-bottom:1px solid var(--line2); padding:13px 52px; }
  .tb-in { max-width:1280px; margin:0 auto; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px; }
  .tb-p { display:flex; align-items:center; gap:7px; font-size:10px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--text3); font-family:var(--sans); }
  .tb-p::before { content:'◆'; font-size:7px; color:var(--forest2); }
  .tb-s { font-family:var(--serif); font-size:20px; font-weight:600; font-style:italic; color:var(--text2); padding-left:18px; border-left:1px solid var(--line); display:flex; align-items:center; gap:10px; }
  .tb-sl { font-family:var(--sans); font-size:9px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:var(--text3); line-height:1.4; font-style:normal; }
  @media(max-width:700px) { .tb { padding:12px 20px; } }
`
export default function TrustBar() {
  return (
    <div className="tb">
      <style>{S}</style>
      <div className="tb-in">
        <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
          {['Google Partner','Meta Business Partner','Microsoft Advertising'].map(p => (
            <div key={p} className="tb-p">{p}</div>
          ))}
        </div>
        <div style={{ display:'flex', gap:0, flexWrap:'wrap' }}>
          {[['100+','Clients Served'],['25×','Best ROI'],['4+ yrs','In Business']].map(([v,l]) => (
            <div key={l} className="tb-s" style={{ marginLeft: v==='100+'?0:18 }}>
              <span>{v}</span>
              <span className="tb-sl">{l.split(' ').join('<br />')}<br/>{l.includes(' ') ? '' : ''}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}