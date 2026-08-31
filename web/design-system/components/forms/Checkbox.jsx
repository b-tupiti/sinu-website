import React from 'react';
export function Checkbox({label,checked,onChange,disabled,style}){
  return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'default':'pointer',fontFamily:'var(--font-sans)',fontSize:15,color:disabled?'var(--text-faint)':'var(--text-body)',...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(!checked)} style={{width:20,height:20,flex:'none',borderRadius:'var(--r-xs)',border:'1.5px solid '+(checked?'var(--brand-primary)':'var(--line-strong)'),background:checked?'var(--brand-primary)':'var(--surface-card)',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'background var(--dur-fast) var(--ease-out)'}}>
      {checked&&<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
    </span>{label}
  </label>;
}