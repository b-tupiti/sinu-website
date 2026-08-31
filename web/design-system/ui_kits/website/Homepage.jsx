import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {SearchBar} from '../../components/forms/SearchBar.jsx';
const wrap={maxWidth:'var(--container)',margin:'0 auto',padding:'0 24px'};
const h2={margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h2)',letterSpacing:'-0.01em',color:'var(--text-heading)'};
const METRICS=[['5','Faculties'],['10','Schools'],['20+','Departments'],['4','Colleges & centres']];
const FEATURED=[
 {code:'MAR312',school:'Agriculture, Fisheries & Forestry',title:'Coastal fisheries and marine ecology',blurb:'Field-based study of reef systems, stock assessment, and community fisheries management.',credits:15,semester:'Sem 2',places:'Few places left'},
 {code:'EDU214',school:'Education & Humanities',title:'Curriculum design in the Pacific context',blurb:'Design and evaluate curriculum for Solomon Islands classrooms, with two school placements.',credits:12,semester:'Sem 1',places:null},
 {code:'NUR105',school:'Nursing, Medicine & Health Sciences',title:'Foundations of nursing practice',blurb:'Core clinical skills, patient assessment, and ward practice at the National Referral Hospital.',credits:12,semester:'Sem 1',places:null}];
const FACULTIES=[
 {abbr:'FAFF',name:'Agriculture, Fisheries and Forestry',note:'Agriculture · Environmental Studies · Fisheries · Forestry'},
 {abbr:'FBTS',name:'Business & Tourism Studies',note:'Business & Management · Tourism & Hospitality Management'},
 {abbr:'FEH',name:'Education & Humanities',note:'School of Education · School of Humanities'},
 {abbr:'FNMHS',name:'Nursing, Medicine & Health Sciences',note:'Medicine · Nursing · Public Health'},
 {abbr:'FST',name:'Science & Technology',note:'Built Environment · Science · Transportation'}];
const CENTRES=[
 ['University Preparatory College','Foundation and bridging study for school leavers and mature entrants.'],
 ['Distance & Flexible Learning Centre','Study from the provinces through flexible and distance delivery.'],
 ['Office of Research & Postgraduate Studies','Masters, doctoral supervision, and applied research programs.'],
 ['Institute of Governance, Diplomacy and Development','Policy research, short courses, and public-sector training.']];
const PILLARS=[
 ['Vision','A quality National University, raising standards of education and applied research in the Pacific region.'],
 ['Mission','Championing the pursuit of knowledge, skills, academic inquiry and applied research to transform lives through higher education and training, inclusive of diverse communities, while providing relevant solutions for the Solomon Islands.'],
 ['Values','Excellence and quality in teaching, learning, skills training and research; innovativeness in meeting new challenges; and relevance to the needs of Solomon Islands.']];
const EVENTS=[
 {day:'14',month:'Oct',weekday:'Tue',title:'Open day — Kukum campus',blurb:'Tour the campus, meet lecturers from all six schools, and get help with your application on the spot.',time:'9:00–15:00',place:'Kukum campus, Honiara',tag:'Admissions',lead:true},
 {day:'28',month:'Oct',weekday:'Tue',title:'Scholarship information session',time:'13:00',place:'Online',tag:'Scholarships'},
 {day:'07',month:'Nov',weekday:'Fri',title:'Graduation ceremony 2026',time:'10:00',place:'Panatina campus',tag:'Ceremony'},
 {day:'18',month:'Nov',weekday:'Tue',title:'Public lecture: ocean futures',time:'17:30',place:'Kukum lecture hall',tag:'Research'}];
function FeaturedCourse({c,onClick}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{position:'relative',display:'flex',flexDirection:'column',background:'var(--surface-card)',border:'1px solid '+(h?'var(--line-strong)':'var(--line-2)'),borderRadius:'var(--r-xl)',boxShadow:h?'0 16px 40px rgba(12,28,54,.10)':'var(--sh-1)',transform:h?'translateY(-3px)':'none',transition:'all var(--dur-base) var(--ease-out)',cursor:'pointer',overflow:'hidden'}}>
    <span style={{position:'absolute',top:0,left:0,right:0,height:3,background:'var(--accent-teal)',transform:h?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform var(--dur-base) var(--ease-out)'}}/>
    {c.places&&<span style={{position:'absolute',top:16,right:16,fontFamily:'var(--font-sans)',fontSize:11.5,fontWeight:600,color:'var(--warning)',background:'var(--warning-tint)',padding:'3px 9px',borderRadius:'var(--r-pill)',whiteSpace:'nowrap',zIndex:2}}>{c.places}</span>}
    <div style={{padding:'26px 26px 0',flex:1}}>
      <div style={{marginBottom:14,minHeight:18,paddingRight:c.places?96:0}}>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'var(--t-eyebrow)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--accent-teal-strong)',whiteSpace:'nowrap'}}>{c.school}</span>
      </div>
      <h3 style={{margin:'0 0 10px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:23,lineHeight:1.2,letterSpacing:'-0.01em',color:h?'var(--link-hover)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-out)',textWrap:'pretty'}}>{c.title}</h3>
      <p style={{margin:0,fontFamily:'var(--font-sans)',fontSize:14.5,lineHeight:1.6,color:'var(--text-muted)'}}>{c.blurb}</p>
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,margin:'22px 26px 0',padding:'14px 0 22px',borderTop:'1px solid var(--line-1)'}}>
      <div style={{display:'flex',flexWrap:'nowrap',gap:8,fontFamily:'var(--font-mono)',fontSize:12.5,fontWeight:500,color:'var(--text-body)',whiteSpace:'nowrap',minWidth:0}}>
        <span style={{whiteSpace:'nowrap'}}>{c.code}</span><span style={{color:'var(--text-faint)'}}>·</span><span style={{whiteSpace:'nowrap'}}>{c.credits} cr</span><span style={{color:'var(--text-faint)'}}>·</span><span style={{whiteSpace:'nowrap'}}>{c.semester}</span>
      </div>
      <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:30,height:30,borderRadius:'50%',background:h?'var(--brand-primary)':'var(--surface-sunken)',color:h?'#fff':'var(--text-muted)',transition:'all var(--dur-base) var(--ease-out)',flex:'none'}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
      </span>
    </div>
  </div>;
}
function FacultyRow({f,onClick}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'grid',gridTemplateColumns:'76px 1fr 30px',gap:22,alignItems:'center',padding:'20px 12px',borderBottom:'1px solid var(--line-2)',cursor:'pointer',background:h?'var(--surface-sunken)':'transparent',transition:'background var(--dur-fast) var(--ease-out)'}}>
    <span style={{fontFamily:'var(--font-mono)',fontSize:12.5,fontWeight:500,color:'var(--teal-700)',background:'var(--accent-teal-tint)',padding:'5px 0',borderRadius:'var(--r-sm)',textAlign:'center'}}>{f.abbr}</span>
    <span style={{display:'grid',gap:4,minWidth:0}}>
      <span style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:21,lineHeight:1.2,color:h?'var(--link-hover)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-out)'}}>Faculty of {f.name}</span>
      <span style={{fontFamily:'var(--font-sans)',fontSize:14,color:'var(--text-muted)'}}>{f.note}</span>
    </span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={h?'var(--brand-primary)':'var(--text-faint)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </div>;
}
function DateBlock({e,big}){
  return <div style={{flex:'none',width:big?76:60,textAlign:'center',background:big?'var(--brand-primary)':'var(--surface-sunken)',color:big?'#fff':'var(--text-heading)',borderRadius:'var(--r-md)',padding:big?'12px 0':'9px 0'}}>
    <div style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:big?34:24,lineHeight:1}}>{e.day}</div>
    <div style={{fontFamily:'var(--font-sans)',fontSize:big?11.5:10.5,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:big?'rgba(255,255,255,.7)':'var(--text-muted)',marginTop:4}}>{e.month}</div>
  </div>;
}
function LeadEvent({e,onClick}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',gap:20,padding:24,background:'var(--surface-card)',border:'1px solid '+(h?'var(--line-strong)':'var(--line-2)'),borderRadius:'var(--r-xl)',boxShadow:h?'0 16px 40px rgba(12,28,54,.10)':'var(--sh-1)',cursor:'pointer',transition:'all var(--dur-base) var(--ease-out)'}}>
    <DateBlock e={e} big/>
    <div style={{display:'grid',gap:8,minWidth:0,alignContent:'start'}}>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <span style={{fontFamily:'var(--font-sans)',fontSize:11.5,fontWeight:600,letterSpacing:'.09em',textTransform:'uppercase',color:'var(--accent-teal-strong)'}}>{e.tag}</span>
        <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-faint)'}}>{e.weekday} · {e.time}</span>
      </div>
      <h3 style={{margin:0,fontFamily:'var(--font-serif)',fontWeight:500,fontSize:22,lineHeight:1.2,color:h?'var(--link-hover)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-out)'}}>{e.title}</h3>
      <p style={{margin:0,fontFamily:'var(--font-sans)',fontSize:14.5,lineHeight:1.6,color:'var(--text-muted)'}}>{e.blurb}</p>
      <span style={{fontFamily:'var(--font-sans)',fontSize:13.5,color:'var(--text-body)',display:'inline-flex',alignItems:'center',gap:6,marginTop:2}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="1.8" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.6"/></svg>
        {e.place}
      </span>
    </div>
  </div>;
}
function EventRow({e,onClick}){
  const [h,setH]=React.useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',gap:16,alignItems:'center',padding:'14px 16px',borderRadius:'var(--r-lg)',background:h?'var(--surface-card)':'transparent',boxShadow:h?'var(--sh-1)':'none',cursor:'pointer',transition:'all var(--dur-fast) var(--ease-out)'}}>
    <DateBlock e={e}/>
    <div style={{display:'grid',gap:3,minWidth:0,flex:1}}>
      <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:15.5,color:h?'var(--link-hover)':'var(--text-heading)',transition:'color var(--dur-fast) var(--ease-out)'}}>{e.title}</span>
      <span style={{fontFamily:'var(--font-sans)',fontSize:13,color:'var(--text-muted)'}}>{e.tag} · {e.time} · {e.place}</span>
    </div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={h?'var(--brand-primary)':'var(--text-faint)'} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{flex:'none'}}><path d="m9 18 6-6-6-6"/></svg>
  </div>;
}
export function Homepage({nav}){
  const [q,setQ]=React.useState('');
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <section style={{position:'relative',minHeight:'100vh',display:'flex',flexDirection:'column',background:'var(--navy-800)',color:'#fff',overflow:'hidden'}}>
      <div style={{position:'relative',zIndex:4,borderBottom:'1px solid rgba(255,255,255,.12)'}}><SiteHeader page="home" nav={nav} dark/></div>
      <div style={{position:'relative',flex:1,display:'flex',alignItems:'stretch'}}>
        <div style={{position:'absolute',inset:0,zIndex:0}} dangerouslySetInnerHTML={{__html:'<image-slot id="home-hero" shape="rect" fit="cover" placeholder="Drop a photo of students"></image-slot>'}}/>
        <div style={{position:'absolute',inset:0,zIndex:1,background:'linear-gradient(100deg, rgba(18,42,79,.96) 0%, rgba(18,42,79,.88) 34%, rgba(18,42,79,.45) 58%, rgba(18,42,79,.15) 78%)',pointerEvents:'none'}}/>
        <div style={{position:'relative',zIndex:2,boxSizing:'border-box',display:'flex',flexDirection:'column',justifyContent:'center',padding:'var(--sp-16) var(--sp-12) 150px 24px',width:'52%',minWidth:420,maxWidth:600,marginLeft:'max(24px, calc((100vw - var(--container)) / 2))',pointerEvents:'none'}}>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:26}}>
            <span style={{width:34,height:1,background:'var(--accent-teal)',flex:'none'}}/>
            <span style={{fontFamily:'var(--font-sans)',fontSize:11.5,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--teal-300)'}}>Honiara · Solomon Islands</span>
          </div>
          <h1 style={{fontFamily:'var(--font-serif)',fontWeight:400,fontSize:'clamp(42px, 4.6vw, 64px)',lineHeight:1.06,letterSpacing:'-0.02em',margin:'0 0 24px',textWrap:'balance'}}>The national university of Solomon Islands</h1>
          <p style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:400,fontSize:20,lineHeight:1.5,color:'rgba(255,255,255,.8)',margin:'0 0 26px'}}>Raising standards of education and applied research in the Pacific region.</p>
          <div style={{height:1,background:'rgba(255,255,255,.14)',marginBottom:26}}/>
          <p style={{fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.7,color:'rgba(255,255,255,.7)',margin:'0 0 30px'}}>Five faculties, ten schools, and study from certificate to postgraduate level — in Honiara and through distance and flexible learning.</p>
          <SearchBar value={q} onChange={setQ} onSubmit={()=>nav&&nav('catalog')} placeholder="Search courses and programs…" style={{border:'none',marginBottom:24,maxWidth:460,pointerEvents:'auto'}}/>
          <div style={{display:'flex',gap:26,alignItems:'center',flexWrap:'wrap',pointerEvents:'auto'}}>
            <button onClick={()=>nav&&nav('admissions')} style={{border:'none',cursor:'pointer',background:'#fff',color:'var(--navy-800)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,padding:'15px 32px',borderRadius:'var(--r-pill)',whiteSpace:'nowrap'}}>Apply for 2027</button>
            <a href="#" onClick={ev=>{ev.preventDefault();nav&&nav('catalog');}} style={{fontFamily:'var(--font-sans)',fontSize:16,fontWeight:600,color:'#fff',textDecoration:'none',borderBottom:'1px solid rgba(255,255,255,.4)',paddingBottom:3,whiteSpace:'nowrap'}}>Explore programs</a>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',left:'50%',bottom:-64,transform:'translateX(-50%)',boxSizing:'border-box',width:'min(1060px,92vw)',background:'var(--surface-card)',border:'1px solid var(--line-2)',borderRadius:'var(--r-xl)',boxShadow:'0 30px 80px rgba(12,28,54,.22)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',padding:'34px 18px',zIndex:6}}>
        {METRICS.map(([v,l],i)=>
          <div key={l} style={{textAlign:'center',padding:'0 18px',borderRight:i<3?'1px solid var(--line-2)':'none'}}>
            <div style={{fontFamily:'var(--font-serif)',fontWeight:400,fontSize:46,lineHeight:1,color:'var(--brand-primary)',marginBottom:10,letterSpacing:'-0.01em'}}>{v}</div>
            <div style={{fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--text-muted)'}}>{l}</div>
          </div>)}
      </div>
    </section>
    <section style={{marginTop:150,background:'var(--surface-sunken)',borderTop:'1px solid var(--line-1)',borderBottom:'1px solid var(--line-1)'}}>
      <div style={{...wrap,padding:'var(--sp-16) 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--sp-10)'}}>
        {PILLARS.map(([title,body])=>
          <div key={title}>
            <div style={{width:34,height:1,background:'var(--accent-teal)',marginBottom:18}}/>
            <h2 style={{margin:'0 0 12px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h3)',color:'var(--text-heading)'}}>Our {title.toLowerCase()}</h2>
            <p style={{margin:0,fontFamily:'var(--font-sans)',fontSize:15.5,lineHeight:1.7,color:'var(--text-body)',textWrap:'pretty'}}>{body}</p>
          </div>)}
      </div>
    </section>
    <section style={{...wrap,paddingTop:'var(--sp-16)'}}>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:'var(--sp-6)'}}>
        <div>
          <h2 style={h2}>Faculties</h2>
          <p style={{margin:'6px 0 0',fontFamily:'var(--font-sans)',fontSize:15.5,color:'var(--text-muted)'}}>Five faculties, ten schools, and over twenty departments.</p>
        </div>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('program');}} style={{fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:600,color:'var(--link)',textDecoration:'none'}}>All programs →</a>
      </div>
      <div style={{borderTop:'1px solid var(--line-2)'}}>
        {FACULTIES.map(f=><FacultyRow key={f.abbr} f={f} onClick={()=>nav&&nav('program')}/>)}
      </div>
      <div style={{marginTop:'var(--sp-10)'}}>
        <h3 style={{margin:'0 0 var(--sp-5)',fontFamily:'var(--font-sans)',fontSize:'var(--t-eyebrow)',fontWeight:600,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--text-muted)'}}>Colleges, centres and institutes</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--sp-4)'}}>
          {CENTRES.map(([t,d])=>
            <a key={t} href="#" onClick={e=>{e.preventDefault();nav&&nav('program');}} style={{display:'grid',gap:6,padding:'var(--sp-5)',background:'var(--surface-card)',border:'1px solid var(--line-2)',borderRadius:'var(--r-lg)',textDecoration:'none'}}>
              <span style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:19,color:'var(--text-heading)'}}>{t}</span>
              <span style={{fontFamily:'var(--font-sans)',fontSize:14,lineHeight:1.6,color:'var(--text-muted)'}}>{d}</span>
            </a>)}
        </div>
      </div>
    </section>
    <section style={{...wrap,paddingTop:'var(--sp-12)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'var(--sp-6)'}}>
        <div>
          <h2 style={h2}>Programmes & courses</h2>
          <p style={{margin:'6px 0 0',fontFamily:'var(--font-sans)',fontSize:15.5,color:'var(--text-muted)'}}>A sample of programmes and courses open for enrolment.</p>
        </div>
        <a href="#" onClick={e=>{e.preventDefault();nav&&nav('catalog');}} style={{fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:600,color:'var(--link)',textDecoration:'none'}}>Browse all programmes →</a>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--sp-5)',alignItems:'stretch'}}>
        {FEATURED.map(c=><FeaturedCourse key={c.code} c={c} onClick={()=>nav&&nav('course')}/>)}
      </div>
    </section>
    <section style={{...wrap,paddingTop:'var(--sp-16)',display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:'var(--sp-10)'}}>
      <div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'var(--sp-5)'}}>
          <h2 style={h2}>Upcoming events</h2>
          <a href="#" onClick={e=>{e.preventDefault();nav&&nav('events');}} style={{fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:600,color:'var(--link)',textDecoration:'none'}}>All events →</a>
        </div>
        <div style={{display:'grid',gap:6}}>
          <LeadEvent e={EVENTS[0]} onClick={()=>nav&&nav('events')}/>
          <div style={{display:'grid',gap:2,marginTop:6}}>
            {EVENTS.slice(1).map(e=><EventRow key={e.title} e={e} onClick={()=>nav&&nav('events')}/>)}
          </div>
        </div>
      </div>
      <div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'var(--sp-5)'}}>
          <h2 style={h2}>News & announcements</h2>
          <a href="#" onClick={e=>{e.preventDefault();nav&&nav('events');}} style={{fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:600,color:'var(--link)',textDecoration:'none'}}>All news →</a>
        </div>
        <div style={{display:'grid'}}>
          {[['Key information about SINU programmes & fees','Announcement'],['Security studies briefing papers','Faculty of Education & Humanities'],['Abstract submission now open','Office of Research & Postgraduate Studies'],['Welcome to Solomon Islands National University','Announcement']].map(([t,d])=>
            <a key={t} href="#" onClick={e=>{e.preventDefault();nav&&nav('events');}} style={{display:'grid',gap:3,padding:'14px 0',borderBottom:'1px solid var(--line-2)',textDecoration:'none'}}>
              <span style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,color:'var(--text-heading)'}}>{t}</span>
              <span style={{fontFamily:'var(--font-mono)',fontSize:12.5,color:'var(--text-faint)'}}>{d}</span>
            </a>)}
        </div>
      </div>
    </section>
    <section style={{position:'relative',marginTop:'var(--sp-20)',minHeight:340,display:'flex',alignItems:'center',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--navy-900)',zIndex:0}}/>
      <div style={{position:'absolute',top:0,right:0,bottom:0,left:'46%',zIndex:1}} dangerouslySetInnerHTML={{__html:'<image-slot id="apply-strip" shape="rect" fit="cover" placeholder="Drop a campus photo"></image-slot>'}}/>
      <div style={{position:'absolute',top:0,bottom:0,left:'40%',width:180,background:'linear-gradient(90deg, var(--navy-900) 0%, rgba(12,28,54,0) 100%)',zIndex:2,pointerEvents:'none'}}/>
      <div style={{...wrap,position:'relative',zIndex:3,boxSizing:'border-box',width:'100%',padding:'var(--sp-16) 24px',display:'flex',justifyContent:'flex-start',pointerEvents:'none'}}>
        <div style={{maxWidth:440,pointerEvents:'auto'}}>
          <div style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:12,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--teal-300)',marginBottom:14}}>Semester 1 · 2027 intake</div>
          <h2 style={{margin:'0 0 12px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',lineHeight:1.08,letterSpacing:'-0.015em',color:'#fff',textWrap:'balance'}}>Applications close 28 November 2026</h2>
          <p style={{margin:'0 0 26px',fontFamily:'var(--font-sans)',fontSize:16.5,lineHeight:1.6,color:'rgba(255,255,255,.78)'}}>School leavers with Form 6 or 7, and mature applicants over 25. The online form takes about 20 minutes — save and come back anytime.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <button onClick={()=>nav&&nav('admissions')} style={{border:'none',cursor:'pointer',background:'#fff',color:'var(--navy-700)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,padding:'14px 30px',borderRadius:'var(--r-pill)',whiteSpace:'nowrap'}}>How to apply</button>
            <button onClick={()=>nav&&nav('catalog')} style={{cursor:'pointer',background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.4)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,padding:'14px 30px',borderRadius:'var(--r-pill)',whiteSpace:'nowrap'}}>Browse courses</button>
          </div>
        </div>
      </div>
    </section>
    <SiteFooter/>
  </div>;
}