import React from 'react';
const T={neutral:['var(--surface-sunken)','var(--text-body)'],info:['var(--info-tint)','var(--teal-700)'],success:['var(--success-tint)','var(--success)'],warning:['var(--warning-tint)','var(--warning)'],danger:['var(--danger-tint)','var(--danger)'],gold:['var(--accent-gold-tint)','var(--gold-600)']};
export function Badge({tone='neutral',children,style}){
  const [bg,fg]=T[tone]||T.neutral;
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,background:bg,color:fg,fontFamily:'var(--font-sans)',fontSize:12.5,fontWeight:600,padding:'4px 10px',borderRadius:'var(--r-pill)',...style}}>{children}</span>;
}