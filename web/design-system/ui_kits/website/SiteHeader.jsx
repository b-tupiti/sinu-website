import React from 'react';
const NAV=[
 {label:'About us',id:'home'},
 {label:'Academic',id:'program',children:['Faculties','Schools','Departments','Colleges & centres','Research & postgraduate']},
 {label:'Programs & courses',id:'catalog'},
 {label:'Students',id:'admissions',children:['Prospective students','Current students','Student academic services','Moodle','Student webmail']},
 {label:'Library',id:'home',children:['Library home','Opening hours','Collections','Databases & e-journals','Writing lab']},
 {label:'News & events',id:'events'},
 {label:'Directory',id:'directory'}];
const QUICK=[['Alumni','home'],['Faculty','directory'],['Programs','catalog'],['Moodle',null],['Student mail',null]];
export function SiteHeader({page,nav,dark}){
  const [open,setOpen]=React.useState(null);
  const linkC=on=>dark?(on?'#fff':'rgba(255,255,255,.78)'):(on?'var(--text-heading)':'var(--text-body)');
  const barBg=dark?'rgba(255,255,255,.06)':'var(--navy-800)';
  return <header style={dark?{position:'relative',zIndex:50}:{position:'sticky',top:0,zIndex:50}} onMouseLeave={()=>setOpen(null)}>
    <div style={{background:barBg,borderBottom:dark?'1px solid rgba(255,255,255,.1)':'none'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'7px 24px',display:'flex',alignItems:'center',gap:18,flexWrap:'wrap',fontFamily:'var(--font-sans)',fontSize:12.5,color:'rgba(243,246,251,.82)'}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z"/></svg>
          (+677) 42600
        </span>
        <span style={{flex:1}}/>
        <nav style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          {QUICK.map(([label,id])=><a key={label} href="#" onClick={e=>{e.preventDefault();id&&nav&&nav(id);}} style={{color:'inherit',textDecoration:'none'}}>{label}</a>)}
        </nav>
      </div>
    </div>
    <div style={{background:dark?'rgba(255,255,255,.04)':'var(--accent-teal-tint)',borderBottom:dark?'1px solid rgba(255,255,255,.1)':'1px solid var(--line-1)'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'9px 24px',display:'flex',alignItems:'center',gap:12,fontFamily:'var(--font-sans)',fontSize:13.5}}>
        <span style={{fontSize:11,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',color:dark?'var(--teal-300)':'var(--teal-700)',whiteSpace:'nowrap'}}>Announcements</span>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('events');}} style={{color:dark?'#fff':'var(--text-heading)',textDecoration:'none',fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>SINU 2026 Open Day programme</a>
        <span style={{color:dark?'rgba(255,255,255,.35)':'var(--text-faint)'}}>·</span>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('admissions');}} style={{color:dark?'rgba(255,255,255,.78)':'var(--text-body)',textDecoration:'none',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Scholarship application — submission of required documents</a>
        <span style={{flex:1}}/>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('events');}} style={{color:dark?'var(--teal-300)':'var(--teal-700)',textDecoration:'none',fontWeight:600,whiteSpace:'nowrap'}}>All announcements →</a>
      </div>
    </div>
    <div style={{background:dark?'transparent':'var(--surface-card)',borderBottom:dark?'1px solid rgba(255,255,255,.12)':'1px solid var(--line-2)'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'14px 24px',display:'flex',alignItems:'center',gap:22}}>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('home');}} style={{display:'inline-flex',flex:'none'}}><img src="../../assets/sinu-logo.jpg" alt="Solomon Islands National University" style={{height:46,display:'block',background:'#fff',padding:'4px 8px',borderRadius:'var(--r-sm)'}}/></a>
        <nav style={{display:'flex',gap:2,flex:1,flexWrap:'wrap'}}>
          {NAV.map(it=>{const on=page===it.id;
            return <span key={it.label} style={{position:'relative'}} onMouseEnter={()=>setOpen(it.children?it.label:null)}>
              <a href="#" onClick={e=>{e.preventDefault();nav&&nav(it.id);}}
                style={{display:'inline-flex',alignItems:'center',gap:5,fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:on?600:500,color:linkC(on),textDecoration:'none',padding:'9px 11px',borderRadius:'var(--r-pill)',background:!dark&&on?'var(--surface-sunken)':'transparent',whiteSpace:'nowrap'}}>
                {it.label}
                {it.children&&<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.55}}><path d="m6 9 6 6 6-6"/></svg>}
              </a>
              {it.children&&open===it.label&&
                <div style={{position:'absolute',top:'calc(100% + 6px)',left:0,minWidth:250,background:'var(--surface-card)',border:'1px solid var(--line-2)',borderRadius:'var(--r-lg)',boxShadow:'var(--sh-3)',padding:'8px',zIndex:60}}>
                  {it.children.map(c=><a key={c} href="#" onClick={e=>{e.preventDefault();nav&&nav(it.id);setOpen(null);}} style={{display:'block',padding:'9px 12px',borderRadius:'var(--r-sm)',fontFamily:'var(--font-sans)',fontSize:14.5,color:'var(--text-body)',textDecoration:'none'}}>{c}</a>)}
                </div>}
            </span>;})}
        </nav>
        <button onClick={()=>nav&&nav('admissions')} style={{border:'none',cursor:'pointer',background:dark?'#fff':'var(--brand-primary)',color:dark?'var(--navy-800)':'#fff',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14.5,padding:'11px 24px',borderRadius:'var(--r-pill)',whiteSpace:'nowrap',flex:'none'}}>Apply now</button>
      </div>
    </div>
  </header>;
}