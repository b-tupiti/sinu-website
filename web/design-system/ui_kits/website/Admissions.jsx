import React from 'react';
import {SiteHeader} from './SiteHeader.jsx';
import {SiteFooter} from './SiteFooter.jsx';
import {Button} from '../../components/actions/Button.jsx';
import {Card} from '../../components/surfaces/Card.jsx';
import {Badge} from '../../components/feedback/Badge.jsx';
import {Breadcrumb} from '../../components/navigation/Breadcrumb.jsx';
import {Toast} from '../../components/feedback/Toast.jsx';
import {Dialog} from '../../components/feedback/Dialog.jsx';
const STEPS=[
 ['Choose your program','Browse the catalog and check entry requirements for your chosen program.'],
 ['Gather documents','School certificates, national ID or passport, and two referee contacts.'],
 ['Submit your application','Apply online through the student portal, or in person at any campus office.'],
 ['Receive your offer','Offers are emailed within 4 weeks. Accept online to secure your place.']];
export function Admissions({nav}){
  const [open,setOpen]=React.useState(false);
  const [sent,setSent]=React.useState(false);
  return <div style={{background:'var(--bg-page)',minHeight:'100vh'}}>
    <SiteHeader page="admissions" nav={nav}/>
    <main style={{maxWidth:'var(--container)',margin:'0 auto',padding:'var(--sp-10) 24px 0'}}>
      <Breadcrumb items={[{label:'Home'},{label:'Admissions'}]} style={{marginBottom:'var(--sp-6)'}}/>
      <div style={{maxWidth:640,marginBottom:'var(--sp-10)'}}>
        <h1 style={{margin:'0 0 12px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h1)',letterSpacing:'-0.015em',color:'var(--text-heading)'}}>How to apply</h1>
        <p style={{margin:0,fontFamily:'var(--font-sans)',fontSize:'var(--t-lead)',lineHeight:1.55,color:'var(--text-body)'}}>Four steps from choosing a program to accepting your offer. Applications for Semester 1, 2027 close <strong style={{color:'var(--text-heading)'}}>28 Nov 2026</strong>.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--sp-4)',marginBottom:'var(--sp-12)'}}>
        {STEPS.map(([t,d],i)=>
          <Card key={t}>
            <div style={{fontFamily:'var(--font-serif)',fontWeight:500,fontSize:32,lineHeight:1,color:'var(--accent-teal-strong)',marginBottom:12}}>{i+1}</div>
            <div style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,color:'var(--text-heading)',marginBottom:6}}>{t}</div>
            <div style={{fontFamily:'var(--font-sans)',fontSize:13.5,lineHeight:1.6,color:'var(--text-muted)'}}>{d}</div>
          </Card>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--sp-10)',alignItems:'start'}}>
        <div>
          <h2 style={{margin:'0 0 var(--sp-5)',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h2)',color:'var(--text-heading)'}}>Key dates</h2>
          <div style={{display:'grid'}}>
            {[['15 Sep 2026','Applications open',['success','Open now']],['28 Nov 2026','Applications close',null],['20 Dec 2026','Offers sent',null],['4–22 Jan 2027','Course registration',null],['9 Feb 2027','Semester 1 begins',null]].map(([d,t,b])=>
              <div key={t} style={{display:'flex',alignItems:'center',gap:16,padding:'14px 0',borderBottom:'1px solid var(--line-2)'}}>
                <span style={{fontFamily:'var(--font-mono)',fontSize:13.5,fontWeight:500,color:'var(--text-heading)',minWidth:130}}>{d}</span>
                <span style={{fontFamily:'var(--font-sans)',fontSize:15,color:'var(--text-body)',flex:1}}>{t}</span>
                {b&&<Badge tone={b[0]}>{b[1]}</Badge>}
              </div>)}
          </div>
        </div>
        <Card style={{background:'var(--brand-primary-tint)',border:'none'}}>
          <h2 style={{margin:'0 0 8px',fontFamily:'var(--font-serif)',fontWeight:500,fontSize:'var(--t-h3)',color:'var(--text-heading)'}}>Ready to start?</h2>
          <p style={{margin:'0 0 18px',fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.6,color:'var(--text-body)'}}>The online application takes about 20 minutes. You can save and come back anytime.</p>
          <div style={{display:'flex',gap:10}}>
            <Button onClick={()=>setOpen(true)}>Start application</Button>
            <Button variant="secondary" onClick={()=>nav&&nav('catalog')}>Browse courses first</Button>
          </div>
          <p style={{margin:'16px 0 0',fontFamily:'var(--font-sans)',fontSize:'var(--t-sm)',color:'var(--text-muted)'}}>Questions? <a href="#" style={{color:'var(--link)'}}>admissions@sinu.edu.sb</a> · +677 30111</p>
        </Card>
      </div>
      {sent&&<div style={{position:'fixed',bottom:24,right:24,zIndex:120}}><Toast tone="success" onDismiss={()=>setSent(false)}>Application started. We emailed you a link to continue.</Toast></div>}
      <Dialog open={open} title="Start your application" onClose={()=>setOpen(false)}
        footer={<><Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button><Button onClick={()=>{setOpen(false);setSent(true);}}>Continue</Button></>}>
        You'll be taken to the student portal to create an account. Have your national ID or passport ready.
      </Dialog>
    </main>
    <SiteFooter/>
  </div>;
}