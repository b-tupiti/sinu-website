import React from 'react';
export function Tooltip({label,children,style}){
  const [on,setOn]=React.useState(false);
  return <span style={{position:'relative',display:'inline-flex',...style}} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)}>
    {children}
    {on&&<span role="tooltip" style={{position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',background:'var(--navy-900)',color:'#f3f6fb',fontFamily:'var(--font-sans)',fontSize:12.5,fontWeight:500,padding:'6px 10px',borderRadius:'var(--r-sm)',whiteSpace:'nowrap',boxShadow:'var(--sh-2)',zIndex:10}}>{label}</span>}
  </span>;
}