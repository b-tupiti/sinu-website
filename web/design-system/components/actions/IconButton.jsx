import React from 'react';
export function IconButton({label,size=36,variant='ghost',disabled,children,style,...rest}){
  const [h,setH]=React.useState(false);
  const solid=variant==='solid';
  return <button aria-label={label} title={label} disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(variant==='outline'?'var(--line-strong)':'transparent'),borderRadius:'50%',cursor:disabled?'default':'pointer',color:disabled?'var(--text-faint)':(solid?'var(--text-on-navy)':'var(--brand-primary)'),background:solid?(h?'var(--brand-primary-strong)':'var(--brand-primary)'):(h&&!disabled?'var(--brand-primary-tint)':'transparent'),transition:'background var(--dur-fast) var(--ease-out)',...style}} {...rest}>{children}</button>;
}