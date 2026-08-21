import { Header, Footer, ArrowIcon } from "../components";
import { events } from "../data";
import { BulletinForm, EventPageNavigator, RegisterButton, RegistrationForm, VolunteerForm } from "./EventActions";

export default function Events(){return <><Header/><EventPageNavigator/><main>
 <section className="page-hero events-hero"><div className="wrap"><p className="eyebrow light">SHOW UP. SPEAK UP.</p><h1>Politics belongs<br/>in the room.</h1><p>Ask the difficult question. Bring the better idea. Meet the people asking for your vote.</p></div></section>
 <section className="events-page wrap section-pad"><div className="events-title"><p className="eyebrow">UPCOMING EVENTS</p><h2>See you out there.</h2></div>
  {events.map((event)=><article className="event-detail" id={event.slug} key={event.title}><time><strong>{event.day}</strong><span>{event.month}<br/>{event.time}</span></time><div><p>{event.type}</p><h3>{event.title}</h3><span>{event.place}</span><p className="event-description">{event.description}</p></div><RegisterButton event={event.slug}/></article>)}
 </section>
 <section className="event-register-band" id="register"><div className="wrap register-grid"><div><p className="eyebrow light">COME INTO THE ROOM</p><h2>Reserve a seat.<br/>Bring a question.</h2><p>Every public event includes an open-question session. Registration is free.</p></div><RegistrationForm/></div></section>
 <section className="updates-band" id="updates"><div className="wrap"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>One sharp update.<br/>No inbox clutter.</h2></div><BulletinForm/></div></section>
 <section className="volunteer" id="volunteer"><div className="wrap volunteer-grid"><div><p className="eyebrow light">BE PART OF IT</p><h2>A few hours can move a country.</h2><p>Knock a street. Host a conversation. Help at an event. Tell us how you want to take part and your local team will be in touch.</p></div><VolunteerForm/></div></section>
 </main><Footer/></>}
