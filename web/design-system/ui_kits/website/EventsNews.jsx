import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {Tabs} from '../../components/navigation/Tabs.jsx';
import {EventCard} from '../../components/catalog/EventCard.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
const NEWS=[
 ['New marine science lab opens at Panatina','The purpose-built facility supports coastal fisheries research and undergraduate teaching.','2 Oct 2026'],
 ['SINU signs research partnership with USP','A five-year agreement covering climate adaptation and Pacific education research.','24 Sep 2026'],
 ['Semester 1 2027 applications now open','Apply online before 28 November. Scholarship rounds close earlier.','15 Sep 2026'],
 ['Nursing graduates posted to provincial clinics','Forty-two new graduates begin placements across nine provinces this month.','2 Sep 2026']];
export function EventsNews({nav}){
  const [tab,setTab]=React.useState('Events');
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="events" nav={nav}/>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-10) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Events & news'}]} style={{marginBottom:'var(--sp-6)'}}/>
      <h1 style={{margin:'0 0 var(--sp-6)',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',letterSpacing:'-0.015em',color:'var(--text-heading)'}}>Events & news</h1>
      <Tabs items={['Events','News']} active={tab} onChange={setTab} style={{marginBottom:'var(--sp-8)'}}/>
      {tab==='Events'
        ?<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--sp-4)',maxWidth:900}}>
          <EventCard day={14} month="Oct" title="Open day — Kukum campus" time="9:00–15:00" location="Honiara" tag="Admissions"/>
          <EventCard day={28} month="Oct" title="Scholarship information session" time="13:00" location="Online" tag="Scholarships"/>
          <EventCard day={7} month="Nov" title="Graduation ceremony 2026" time="10:00" location="Panatina campus" tag="Ceremony"/>
          <EventCard day={18} month="Nov" title="Public lecture: ocean futures" time="17:30" location="Kukum lecture hall" tag="Research"/>
          <EventCard day={25} month="Nov" title="Application help desk" time="8:30–16:00" location="All campuses" tag="Admissions"/>
          <EventCard day={3} month="Dec" title="Staff research symposium" time="9:00" location="Panatina campus" tag="Research"/>
        </div>
        :<div style={{maxWidth:760}}>
          {NEWS.map(([t,d,date])=>
            <a key={t} href="#" style={{display:'grid',gap:6,padding:'22px 0',borderBottom:'1px solid var(--line-2)',textDecoration:'none'}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:12.5,color:'var(--text-faint)'}}>{date}</span>
              <span style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:22,color:'var(--text-heading)'}}>{t}</span>
              <span style={{fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.6,color:'var(--text-body)'}}>{d}</span>
            </a>)}
        </div>}
    </main>
    <SiteFooter/>
  </div>;
}