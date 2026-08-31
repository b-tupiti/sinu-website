import React from 'react';
export function Pagination({page=1,pages=1,onChange,style}){
  const go=p=>{if(p>=1&&p<=pages&&onChange)onChange(p);};
  const nums=[];for(let i=1;i<=pages;i++){if(pages<=7||i===1||i===pages||Math.abs(i-page)<=1)nums.push(i);else if(nums[nums.length-1]!=='…')nums.push('…');}
  const btn={minWidth:36,height:36,display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--line-2)',background:'var(--surface-card)',borderRadius:'var(--r-sm)',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:14,color:'var(--text-body)'};
  return <div style={{display:'flex',gap:6,alignItems:'center',...style}}>
    <button style={{...btn,opacity:page===1?.4:1}} onClick={()=>go(page-1)} aria-label="Previous"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg></button>
    {nums.map((n,i)=>n==='…'?<span key={'e'+i} style={{color:'var(--text-faint)',padding:'0 4px'}}>…</span>
      :<button key={n} onClick={()=>go(n)} aria-current={n===page?'page':undefined} style={n===page?{...btn,background:'var(--brand-primary)',color:'var(--text-on-navy)',border:'1px solid var(--brand-primary)',fontWeight:600}:btn}>{n}</button>)}
    <button style={{...btn,opacity:page===pages?.4:1}} onClick={()=>go(page+1)} aria-label="Next"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg></button>
  </div>;
}