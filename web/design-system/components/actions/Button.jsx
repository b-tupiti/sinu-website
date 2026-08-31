import React from 'react';
const V={primary:{bg:'var(--brand-primary)',hv:'var(--brand-primary-strong)',fg:'var(--text-on-navy)',bd:'transparent'},secondary:{bg:'transparent',hv:'var(--brand-primary-tint)',fg:'var(--brand-primary)',bd:'var(--line-strong)'},ghost:{bg:'transparent',hv:'var(--brand-primary-tint)',fg:'var(--brand-primary)',bd:'transparent'},danger:{bg:'var(--danger)',hv:'#8f2b24',fg:'#fff',bd:'transparent'}};
const S={sm:{p:'8px 18px',f:13.5},md:{p:'11px 24px',f:15},lg:{p:'14px 30px',f:16}};
export function Button({variant='primary',size='md',icon,disabled,children,style,...rest}){
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  const v=V[variant]||V.primary,s=S[size]||S.md;
  return <button disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setA(false);}} onMouseDown={()=>setA(true)} onMouseUp={()=>setA(false)}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:s.p,fontFamily:'var(--font-sans)',fontWeight:600,fontSize:s.f,lineHeight:1.2,color:disabled?'var(--text-faint)':v.fg,background:disabled?'var(--surface-sunken)':(h&&!disabled?v.hv:v.bg),border:'1px solid '+(disabled?'transparent':v.bd),borderRadius:'var(--r-pill)',cursor:disabled?'default':'pointer',transform:a&&!disabled?'scale(.98)':'none',transition:'background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)',...style}} {...rest}>{icon}{children}</button>;
}