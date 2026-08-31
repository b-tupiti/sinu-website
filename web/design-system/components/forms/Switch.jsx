import React from 'react';
export function Switch({checked,onChange,label,disabled,style}){
  return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'default':'pointer',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--text-body)',...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(!checked)} style={{width:40,height:24,borderRadius:'var(--r-pill)',background:checked?'var(--accent-teal-strong)':'var(--ink-300)',position:'relative',transition:'background var(--dur-base) var(--ease-in-out)',opacity:disabled?.5:1,flex:'none'}}>
      <span style={{position:'absolute',top:3,left:checked?19:3,width:18,height:18,borderRadius:'50%',background:'#fff',boxShadow:'var(--sh-1)',transition:'left var(--dur-base) var(--ease-in-out)'}}/>
    </span>{label}
  </label>;
}