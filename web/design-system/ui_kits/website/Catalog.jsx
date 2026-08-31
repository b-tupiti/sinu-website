import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {SearchBar} from '../../components/forms/SearchBar.jsx';
import {Select} from '../../components/forms/Select.jsx';
import {Tag} from '../../components/feedback/Tag.jsx';
import {CourseCard} from '../../components/catalog/CourseCard.jsx';
import {Pagination} from '../../components/navigation/Pagination.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
const COURSES=[
 {code:'EDU214',title:'Curriculum design in the Pacific context',school:'Education & Humanities',credits:12,semester:'Sem 1',level:'Bachelor'},
 {code:'NUR105',title:'Foundations of nursing practice',school:'Nursing, Medicine & Health Sciences',credits:12,semester:'Sem 1',level:'Bachelor'},
 {code:'AGR230',title:'Tropical crop production systems',school:'Agriculture, Fisheries & Forestry',credits:12,semester:'Sem 2',level:'Diploma'},
 {code:'BUS118',title:'Small business management in Melanesia',school:'Business & Tourism Studies',credits:8,semester:'Sem 1',level:'Certificate'},
 {code:'MAR312',title:'Coastal fisheries and marine ecology',school:'Agriculture, Fisheries & Forestry',credits:15,semester:'Sem 2',level:'Bachelor'},
 {code:'ICT201',title:'Networks and island connectivity',school:'Science & Technology',credits:12,semester:'Sem 1',level:'Bachelor'}];
const LEVELS=['All','Certificate','Diploma','Bachelor','Postgraduate'];
export function Catalog({nav}){
  const [q,setQ]=React.useState('');
  const [lvl,setLvl]=React.useState('All');
  const [school,setSchool]=React.useState('All faculties');
  const [page,setPage]=React.useState(1);
  const list=COURSES.filter(c=>(lvl==='All'||c.level===lvl)&&(school==='All faculties'||c.school===school)&&(q===''||(c.title+c.code).toLowerCase().includes(q.toLowerCase())));
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="catalog" nav={nav}/>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-10) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Programmes & courses'}]} style={{marginBottom:'var(--sp-6)'}}/>
      <h1 style={{margin:'0 0 10px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',letterSpacing:'-0.015em',color:'var(--text-heading)'}}>Programmes & courses</h1>
      <p style={{margin:'0 0 28px',fontFamily:'var(--font-sans)',fontSize:'var(--t-lead)',color:'var(--text-body)',maxWidth:560}}>Search every course offered in 2026–27. Filter by level, school, or semester.</p>
      <SearchBar value={q} onChange={v=>{setQ(v);setPage(1);}} placeholder="Search by course name or code…" style={{maxWidth:620,marginBottom:'var(--sp-5)'}}/>
      <div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap',marginBottom:'var(--sp-6)'}}>
        {LEVELS.map(l=><Tag key={l} active={lvl===l} onClick={()=>{setLvl(l);setPage(1);}}>{l}</Tag>)}
        <span style={{flex:1}}/>
        <Select options={['All faculties','Agriculture, Fisheries & Forestry','Business & Tourism Studies','Education & Humanities','Nursing, Medicine & Health Sciences','Science & Technology']} value={school} onChange={e=>setSchool(e.target.value)} style={{minWidth:230}}/>
      </div>
      <div style={{fontFamily:'var(--font-sans)',fontSize:'var(--t-sm)',color:'var(--text-muted)',marginBottom:'var(--sp-4)'}}>{list.length} course{list.length===1?'':'s'}</div>
      {list.length===0
        ?<div style={{padding:'var(--sp-16) 0',textAlign:'center',fontFamily:'var(--font-sans)',color:'var(--text-muted)'}}>No courses match. Try a broader term?</div>
        :<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--sp-4)'}}>
          {list.map(c=><CourseCard key={c.code} {...c} onClick={()=>nav&&nav('course')}/>)}
        </div>}
      <div style={{display:'flex',justifyContent:'center',padding:'var(--sp-10) 0 0'}}><Pagination page={page} pages={8} onChange={setPage}/></div>
    </main>
    <SiteFooter/>
  </div>;
}