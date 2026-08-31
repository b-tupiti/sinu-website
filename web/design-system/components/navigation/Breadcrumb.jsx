import React from 'react';
export function Breadcrumb({items=[],style}){
  return <nav aria-label="Breadcrumb" style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap',fontFamily:'var(--font-sans)',fontSize:'var(--t-sm)',...style}}>
    {items.map((it,i)=>{const last=i===items.length-1;
      return <React.Fragment key={i}>
        {last?<span aria-current="page" style={{color:'var(--text-heading)',fontWeight:600}}>{it.label||it}</span>
          :<a href={it.href||'#'} style={{color:'var(--text-muted)',textDecoration:'none'}} onMouseEnter={e=>e.target.style.color='var(--link-hover)'} onMouseLeave={e=>e.target.style.color='var(--text-muted)'}>{it.label||it}</a>}
        {!last&&<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="1.75" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>}
      </React.Fragment>;})}
  </nav>;
}