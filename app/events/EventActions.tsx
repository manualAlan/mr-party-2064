"use client";
import { useEffect, useState } from "react";
import { ArrowIcon } from "../components";
import { events } from "../data";

export function RegisterButton({event}:{event:string}){
  return <a className="register-link" href={`/events?event=${event}#register`}>Register <ArrowIcon/></a>
}

export function RegistrationForm(){
 const [sent,setSent]=useState(false);
 const [selected,setSelected]=useState("");
 useEffect(()=>{
   const requested=new URLSearchParams(window.location.search).get("event");
   if(requested && events.some(event=>event.slug===requested)) setSelected(requested);
 },[]);
 return <form className="register-form" onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
   {sent ? <div className="form-success"><span>YOU’RE ON THE LIST</span><h3>See you there.</h3><p>This local preview has recorded the interaction without sending personal data.</p><button type="button" onClick={()=>setSent(false)}>Register another person</button></div> : <>
   <div className="form-title"><span>EVENT REGISTRATION</span><h3>Save your place.</h3></div>
   <label>Event<select required value={selected} onChange={e=>setSelected(e.target.value)}><option value="" disabled>Choose an event</option>{events.map(e=><option value={e.slug} key={e.slug}>{e.title}, {e.day} {e.month}</option>)}</select></label>
   <div className="form-pair"><label>First name<input required placeholder="First name"/></label><label>Last name<input required placeholder="Last name"/></label></div>
   <label>Email<input required type="email" placeholder="you@example.ca"/></label>
   <button className="button button-white" type="submit">Reserve my place <ArrowIcon/></button><small>No data leaves this local preview.</small></>}
 </form>
}

export function EventPageNavigator(){
 useEffect(()=>{
   const reveal=()=>{
     const id=decodeURIComponent(window.location.hash.slice(1));
     if(!id) return;
     window.requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}));
   };
   reveal();
   window.addEventListener("hashchange",reveal);
   return()=>window.removeEventListener("hashchange",reveal);
 },[]);
 return null;
}

export function VolunteerForm(){
 const [sent,setSent]=useState(false);
 if(sent) return <div className="form-success compact-success"><span>WELCOME TO THE TEAM</span><h3>You’re in.</h3><p>Your local LCA organiser would follow up from the live campaign system.</p><button type="button" onClick={()=>setSent(false)}>Start over</button></div>;
 const regions=["Chasmia","Carnapol","Kalahooska","Moeras","Pleucadeuc","Ambarino","Kazana","Ambrosia","Reno","Montiablo","Cambria","Oplana","Myrati","Pittston","Mezata","Costa Blanca","Ventura"];
 return <form className="volunteer-form" onSubmit={(e)=>{e.preventDefault();setSent(true)}}><label>Full name<input required type="text" placeholder="Your name"/></label><label>Email address<input required type="email" placeholder="you@example.ca"/></label><label>Home region<select required defaultValue=""><option value="" disabled>Select your region</option>{regions.map(region=><option key={region}>{region}</option>)}</select></label><button className="button button-white" type="submit">Count me in <ArrowIcon/></button><small>No data leaves this local preview.</small></form>
}

export function BulletinForm(){
 const [sent,setSent]=useState(false);
 return <form className="bulletin-form" onSubmit={(e)=>{e.preventDefault();setSent(true)}}>{sent?<><strong>SUBSCRIBED</strong><span>The next field bulletin would land in your inbox.</span></>:<><label htmlFor="bulletin-email">CAMPAIGN FIELD BULLETIN</label><input required id="bulletin-email" type="email" placeholder="Your email address"/><button type="submit">Sign me up <ArrowIcon/></button></>}</form>
}
