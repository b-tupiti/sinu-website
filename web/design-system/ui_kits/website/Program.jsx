import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {Button} from '../../components/actions/Button.jsx';
import {Card} from '../../components/surfaces/Card.jsx';
import {StatBlock} from '../../components/surfaces/StatBlock.jsx';
import {CourseCard} from '../../components/catalog/CourseCard.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
export function Program({nav}){
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="program" nav={nav}/>
    <section style={{background:'var(--surface-navy)'}}>
      <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-12) 24px'}}>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'var(--t-eyebrow)',fontWeight:600,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--teal-300)',marginBottom:12}}>School of Education & Humanities</div>
        <h1 style={{margin:'0 0 16px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',letterSpacing:'-0.015em',color:'var(--text-on-navy)'}}>Bachelor of Education (Secondary)</h1>
        <p style={{margin:'0 0 24px',maxWidth:600,fontFamily:'var(--font-sans)',fontSize:'var(--t-lead)',lineHeight:1.55,color:'rgba(243,246,251,.82)'}}>Prepare to teach in Solomon Islands secondary schools, with specialisations in science, mathematics, English, and social studies.</p>
        <div style={{display:'flex',gap:'var(--sp-10)',flexWrap:'wrap',alignItems:'end'}}>
          <StatBlock onNavy value="4" label="Years full-time"/>
          <StatBlock onNavy value="480" label="Total credits"/>
          <StatBlock onNavy value="Feb 2027" label="Next intake"/>
          <span style={{flex:1}}/>
          <Button size="lg" onClick={()=>nav&&nav('admissions')}>Apply now</Button>
        </div>
      </div>
    </section>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-12) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Programs'},{label:'Bachelor of Education'}]} style={{marginBottom:'var(--sp-8)'}}/>
      <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:'var(--sp-10)',alignItems:'start'}}>
        <div>
          <h2 style={{margin:'0 0 var(--sp-5)',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h2)',color:'var(--text-heading)'}}>Year 1 courses</h2>
          <div style={{display:'grid',gap:12,marginBottom:'var(--sp-8)'}}>
            <CourseCard code="EDU101" title="Foundations of teaching and learning" school="Semester 1" credits={12} onClick={()=>nav&&nav('course')}/>
            <CourseCard code="EDU120" title="Language and literacy across the curriculum" school="Semester 1" credits={12} onClick={()=>nav&&nav('course')}/>
            <CourseCard code="EDU135" title="Adolescent development in Pacific societies" school="Semester 2" credits={12} onClick={()=>nav&&nav('course')}/>
            <CourseCard code="EDU214" title="Curriculum design in the Pacific context" school="Semester 2" credits={12} onClick={()=>nav&&nav('course')}/>
          </div>
          <a href="#" style={{fontFamily:'var(--font-sans)',fontSize:14.5,fontWeight:600,color:'var(--link)',textDecoration:'none'}}>See full 4-year structure →</a>
        </div>
        <div style={{display:'grid',gap:'var(--sp-4)'}}>
          <Card>
            <h3 style={{margin:'0 0 12px',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'var(--t-h4)',color:'var(--text-heading)'}}>Entry requirements</h3>
            <ul style={{margin:0,padding:'0 0 0 18px',fontFamily:'var(--font-sans)',fontSize:14.5,lineHeight:1.8,color:'var(--text-body)'}}>
              <li>Form 6 or 7 pass with English & one science</li>
              <li>Mature entry: 25+, relevant experience</li>
              <li>Provincial scholarship holders welcome</li>
            </ul>
          </Card>
          <Card>
            <h3 style={{margin:'0 0 12px',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'var(--t-h4)',color:'var(--text-heading)'}}>Fees · 2027</h3>
            <div style={{display:'grid',gap:8}}>
              {[['Domestic (per year)','SBD 12,400'],['Regional (per year)','SBD 18,900'],['Student services levy','SBD 350']].map(([k,v])=>
                <div key={k} style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-sans)',fontSize:14,color:'var(--text-body)',borderBottom:'1px solid var(--line-1)',paddingBottom:8}}>
                  <span>{k}</span><span style={{fontFamily:'var(--font-mono)',color:'var(--text-heading)'}}>{v}</span>
                </div>)}
            </div>
            <p style={{margin:'10px 0 0',fontFamily:'var(--font-sans)',fontSize:'var(--t-xs)',color:'var(--text-muted)'}}>Fees shown in SBD and subject to annual review.</p>
          </Card>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </div>;
}