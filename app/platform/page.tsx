import { Header, Footer, ArrowIcon } from "../components";
import { priorities } from "../data";
import Link from "next/link";

export default function Platform(){return <><Header/><main>
  <section className="page-hero plan-hero"><div className="wrap"><p className="eyebrow light">THE LCA COMMON PROGRAMME</p><h1>Three parties.<br/>One way forward.</h1><p>A shared programme for stable government, stronger communities and a Caprica confident enough to build its future.</p></div></section>
  <section className="alliance-intro wrap section-pad" id="alliance"><p className="eyebrow">THE ALLIANCE</p><h2>Agreement where it matters.</h2><div><p className="lead">LCA unites three distinct political traditions behind one programme for the 2064 election.</p><p>We will govern from common ground, protect constitutional democracy, reward work and enterprise, deliver dependable public services, and give every region a genuine stake in national progress. Our parties retain their identities. Our candidates share one commitment, a capable, open and forward-looking Caprica.</p></div></section>
  <nav className="jump-nav wrap" aria-label="Platform sections">{priorities.map((p,i)=><a href={`#${p.slug}`} key={p.slug}><span>{String(i+1).padStart(2,'0')}</span>{p.title}</a>)}</nav>
  <section className="manifesto wrap section-pad">
   {priorities.map((p,i)=><article className="manifesto-row" id={p.slug} key={p.slug}>
    <div className="manifesto-num">{String(i+1).padStart(2,'0')}</div><div className="manifesto-title"><p className="eyebrow">{p.kicker}</p><h2>{p.headline}</h2><figure><img src={p.image} alt="" /></figure></div>
    <div className="manifesto-text"><p className="lead">{p.short}</p><p>{p.detail}</p><h3>LCA will</h3><ul>{p.commitments.map(x=><li key={x}>{x}</li>)}</ul></div>
   </article>)}
  </section>
  <section className="first-hundred">
    <div className="wrap"><div className="hundred-intro"><p className="eyebrow light">THE FIRST 100 DAYS</p><h2>No drift.<br/>A running start.</h2><p>Four bills ready for the first sitting of Parliament.</p></div>
    <ol className="hundred-list"><li><span>DAY 01</span><strong>Cost of Work Bill</strong><p>Lift the tax-free threshold and simplify deductions for independent workers.</p></li><li><span>DAY 20</span><strong>Caprica Builds Act</strong><p>A single, time-limited approvals track for homes and major infrastructure.</p></li><li><span>DAY 45</span><strong>Open Government Standard</strong><p>Publish contracts, performance data and ministerial meetings by default.</p></li><li><span>DAY 75</span><strong>Skills Compact</strong><p>Employer-designed technical pathways in every region.</p></li></ol></div>
  </section>
  <section className="policy-photo-grid">
    <figure><img src="/images/farm.jpg" alt="Aerial view of productive farmland"/><figcaption>Back Ambrosia’s producers</figcaption></figure>
    <figure><img src="/images/city.jpg" alt="People looking across a modern waterfront city"/><figcaption>Unlock homes and opportunity</figcaption></figure>
    <figure><img src="/images/rail.jpg" alt="A train crossing a bridge through the mountains"/><figcaption>Connect every region</figcaption></figure>
  </section>
  <section className="contrast wrap section-pad"><p className="eyebrow">THE ALLIANCE COMMITMENT</p><h2>Strong public purpose.<br/>Open Caprican enterprise.</h2><div><p>Our three parties agree that government should set fair rules, protect the vulnerable and deliver the essentials well.</p><p>Then it should trust people, communities and businesses to create the growth that pays for lasting public services.</p></div></section>
  <section className="page-cta"><div className="wrap"><h2>Ready to help?</h2><Link className="button button-white" href="/events#volunteer">Join the campaign <ArrowIcon/></Link></div></section>
 </main><Footer/></>}
