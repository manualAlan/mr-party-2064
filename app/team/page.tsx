import { Header, Footer, ArrowIcon } from "../components";
import { candidates } from "../data";
import Link from "next/link";

export default function Team(){return <><Header/><main>
 <section className="page-hero team-hero"><div className="wrap"><p className="eyebrow light">THE MR TEAM</p><h1>Rooted locally.<br/>Ready nationally.</h1><p>Seven candidates, each with a plan shaped by the place they call home.</p></div></section>
 <section className="candidate-list wrap section-pad">
  {candidates.map((c,i)=><article className="candidate-profile" id={c.slug} key={c.name}>
   <div className="profile-image"><img src={c.image} alt={c.name}/><span>0{i+1}</span></div>
   <div className="profile-copy"><p className="eyebrow">{c.region} · {c.seat}</p><h2>{c.name}</h2><blockquote>{c.quote}</blockquote><p>{c.bio}</p><div className="focus-list">{c.focus.map(x=><span key={x}>{x}</span>)}</div></div>
  </article>)}
 </section>
 <section className="page-cta"><div className="wrap"><div><p className="eyebrow light">MEET THEM IN PERSON</p><h2>The campaign is coming to you.</h2></div><Link className="button button-white" href="/events">See upcoming events <ArrowIcon/></Link></div></section>
 </main><Footer/></>}
