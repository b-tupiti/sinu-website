import React from 'react';
export function CourseCard({code,title,school,credits,semester,level,onClick,style}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:'var(--surface-card)',border:'1px solid '+(h?'var(--line-strong)':'var(--line-2)'),borderRadius:'var(--r-lg)',boxShadow:h?'var(--sh-2)':'var(--sh-1)',padding:'var(--sp-5) var(--sp-6)',cursor:onClick?'pointer':'default',transition:'box-shadow var(--dur-base) var(--ease-out)',display:'grid',gap:10,...style}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
      <span style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:'var(--t-code)',color:'var(--teal-700)',background:'var(--accent-teal-tint)',padding:'3px 10px',borderRadius:'var(--r-pill)'}}>{code}</span>
      {level&&<span style={{fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-faint)'}}>{level}</span>}
    </div>
    <div style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:19,lineHeight:1.3,color:h?'var(--link-hover)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-out)'}}>{title}</div>
    <div style={{display:'flex',gap:14,flexWrap:'wrap',fontFamily:'var(--font-sans)',fontSize:'var(--t-sm)',color:'var(--text-muted)'}}>
      <span>{school}</span>
      {credits!=null&&<span style={{fontFamily:'var(--font-mono)'}}>{credits} credits</span>}
      {semester&&<span style={{fontFamily:'var(--font-mono)'}}>{semester}</span>}
    </div>
  </div>;
}