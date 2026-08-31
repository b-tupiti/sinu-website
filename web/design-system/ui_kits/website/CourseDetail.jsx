import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {Button} from '../../components/actions/Button.jsx';
import {Badge} from '../../components/feedback/Badge.jsx';
import {Tabs} from '../../components/navigation/Tabs.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
import {Card} from '../../components/surfaces/Card.jsx';
import {PersonCard} from '../../components/catalog/PersonCard.jsx';
const TAB_BODY={
 'Overview':'This course examines how curriculum is designed, adapted, and evaluated for Solomon Islands schools. You will study Pacific-centred pedagogy, vernacular language considerations, and community consultation, and produce a full unit plan for a real school context.',
 'Structure':'Twelve weeks of teaching: six on curriculum theory and Pacific education policy, six on design studio work in small groups. Two field visits to partner schools in Honiara are scheduled in weeks 5 and 9.',
 'Assessment':'Unit plan portfolio 40% · School consultation report 30% · Reflective seminar presentation 20% · Participation 10%. No written exam.',
 'How to apply':'Enrol through the student portal during the registration window (4–22 Jan 2027). EDU101 and EDU120 must be completed first. Cross-school enrolments need coordinator approval.'};
export function CourseDetail({nav}){
  const [tab,setTab]=React.useState('Overview');
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="catalog" nav={nav}/>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-10) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Course catalog'},{label:'EDU214'}]} style={{marginBottom:'var(--sp-6)'}}/>
      <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:'var(--sp-10)',alignItems:'start'}}>
        <div>
          <span style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:15,color:'var(--teal-700)',background:'var(--accent-teal-tint)',padding:'4px 12px',borderRadius:'var(--r-pill)'}}>EDU214</span>
          <h1 style={{margin:'14px 0 14px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',lineHeight:1.1,letterSpacing:'-0.015em',color:'var(--text-heading)',textWrap:'balance'}}>Curriculum design in the Pacific context</h1>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:'var(--sp-6)'}}>
            <Badge tone="success">Open for enrolment</Badge>
            <Badge>12 credits</Badge>
            <Badge tone="info">Semester 1 · 2027</Badge>
            <Badge>Bachelor level</Badge>
          </div>
          <Tabs items={['Overview','Structure','Assessment','How to apply']} active={tab} onChange={setTab} style={{marginBottom:'var(--sp-5)'}}/>
          <p style={{margin:0,fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.7,color:'var(--text-body)',maxWidth:640,textWrap:'pretty'}}>{TAB_BODY[tab]}</p>
        </div>
        <div style={{display:'grid',gap:'var(--sp-4)'}}>
          <Card>
            <div style={{display:'grid',gap:14}}>
              {[['School','Education & Humanities'],['Campus','Kukum, Honiara'],['Schedule','Mon & Wed 09:00–10:30'],['Prerequisites','EDU101 · EDU120'],['Coordinator approval','Not required']].map(([k,v])=>
                <div key={k} style={{display:'grid',gap:2}}>
                  <span style={{fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-faint)'}}>{k}</span>
                  <span style={{fontFamily:k==='Prerequisites'||k==='Schedule'?'var(--font-mono)':'var(--font-sans)',fontSize:14.5,color:'var(--text-heading)'}}>{v}</span>
                </div>)}
              <Button style={{marginTop:6}} onClick={()=>nav&&nav('admissions')}>Enrol in this course</Button>
            </div>
          </Card>
          <PersonCard name="Dr. Selina Bosawai" role="Course coordinator" school="Education" email="s.bosawai@sinu.edu.sb"/>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </div>;
}