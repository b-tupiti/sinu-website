import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {SearchBar} from '../../components/forms/SearchBar.jsx';
import {Select} from '../../components/forms/Select.jsx';
import {PersonCard} from '../../components/catalog/PersonCard.jsx';
import {Pagination} from '../../components/navigation/Pagination.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
const PEOPLE=[
 ['Dr. Mere Vuki','Senior lecturer','Nursing, Medicine & Health Sciences','m.vuki@sinu.edu.sb'],
 ['Dr. Selina Bosawai','Course coordinator','Education & Humanities','s.bosawai@sinu.edu.sb'],
 ['Prof. John Wale','Head of school','Agriculture, Fisheries & Forestry','j.wale@sinu.edu.sb'],
 ['Ms. Ruth Maelagi','Admissions officer','Student services','r.maelagi@sinu.edu.sb'],
 ['Dr. Patteson Iromea','Lecturer','Business & Tourism Studies','p.iromea@sinu.edu.sb'],
 ['Mr. Derek Aihari','Lecturer','Science & Technology','d.aihari@sinu.edu.sb'],
 ['Dr. Grace Kwaimani','Research fellow','Agriculture, Fisheries & Forestry','g.kwaimani@sinu.edu.sb'],
 ['Ms. Lily Ramo','Registrar','Administration','l.ramo@sinu.edu.sb']];
export function Directory({nav}){
  const [q,setQ]=React.useState('');
  const [school,setSchool]=React.useState('All faculties');
  const list=PEOPLE.filter(p=>(school==='All faculties'||p[2]===school)&&(q===''||p[0].toLowerCase().includes(q.toLowerCase())));
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="directory" nav={nav}/>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-10) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Staff directory'}]} style={{marginBottom:'var(--sp-6)'}}/>
      <h1 style={{margin:'0 0 var(--sp-6)',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',letterSpacing:'-0.015em',color:'var(--text-heading)'}}>Staff directory</h1>
      <div style={{display:'flex',gap:14,alignItems:'center',flexWrap:'wrap',marginBottom:'var(--sp-6)'}}>
        <SearchBar value={q} onChange={setQ} placeholder="Search by name…" style={{flex:1,maxWidth:480}}/>
        <Select options={['All faculties','Agriculture, Fisheries & Forestry','Business & Tourism Studies','Education & Humanities','Nursing, Medicine & Health Sciences','Science & Technology','Student services','Administration']} value={school} onChange={e=>setSchool(e.target.value)} style={{minWidth:230}}/>
      </div>
      {list.length===0
        ?<div style={{padding:'var(--sp-16) 0',textAlign:'center',fontFamily:'var(--font-sans)',color:'var(--text-muted)'}}>No one matches. Check the spelling?</div>
        :<div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--sp-4)'}}>
          {list.map(([name,role,school,email])=><PersonCard key={email} name={name} role={role} school={school} email={email}/>)}
        </div>}
      <div style={{display:'flex',justifyContent:'center',padding:'var(--sp-10) 0 0'}}><Pagination page={1} pages={6} onChange={()=>{}}/></div>
    </main>
    <SiteFooter/>
  </div>;
}