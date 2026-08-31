import React from 'react';
export function Dialog({open,title,onClose,children,footer}){
  if(!open)return null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(11,24,48,.5)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,zIndex:100}}>
    <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{background:'var(--surface-card)',borderRadius:'var(--r-xl)',boxShadow:'var(--sh-3)',width:'min(520px,100%)',overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 24px 0'}}>
        <h2 style={{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h3)',color:'var(--text-heading)'}}>{title}</h2>
        <button onClick={onClose} aria-label="Close" style={{border:'none',background:'transparent',cursor:'pointer',color:'var(--text-muted)',padding:4}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
      </div>
      <div style={{padding:'14px 24px 22px',fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.6,color:'var(--text-body)'}}>{children}</div>
      {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:10,padding:'0 24px 22px'}}>{footer}</div>}
    </div>
  </div>;
}