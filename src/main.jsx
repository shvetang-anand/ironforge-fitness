import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X, Dumbbell, Instagram, MoveUpRight } from 'lucide-react';
import './styles.css';

const plans = [
  { name: 'ESSENTIAL', monthly: 1499, yearly: 1199, tagline: 'Your foundation for better.', features: ['Full gym floor access', 'Locker room access', 'Fitness assessment'], featured: false },
  { name: 'PERFORMANCE', monthly: 2499, yearly: 1999, tagline: 'For those who want more.', features: ['Everything in Essential', 'Group strength classes', 'Monthly progress review', 'Recovery zone access'], featured: true },
  { name: 'ELITE', monthly: 3999, yearly: 3199, tagline: 'Training without limits.', features: ['Everything in Performance', '2 personal training sessions', 'Priority class booking', 'Personalised training plan'], featured: false },
];
const programs = [
  { n: '01', title: 'Strength & Conditioning', desc: 'Build a stronger base with purposeful, progressive training.', tag: 'BUILD STRENGTH', image: 'photo-1534438327276-14e5300c3a48' },
  { n: '02', title: 'Personal Training', desc: 'One-on-one coaching shaped around your goals and your pace.', tag: 'TRAIN WITH INTENT', image: 'photo-1583454110551-21f2fa2afe61' },
  { n: '03', title: 'Functional Fitness', desc: 'Move better, work smarter, and bring strength into everyday life.', tag: 'MOVE BETTER', image: 'photo-1517836357463-d25dfeac3438' },
];
function App() {
  const [billing, setBilling] = useState('monthly');
  const [modal, setModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('PERFORMANCE');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: 'Build strength', visit: 'First-time visit', date: '', time: '10:00 AM – 12:00 PM' });
  const openBooking = (plan = 'PERFORMANCE') => { setSelectedPlan(plan); setSubmitted(false); setModal(true); setMobileMenu(false); };
  const closeBooking = () => setModal(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileMenu(false); };
  return <div className="site-shell">
    <div className="announcement"><span>YOUR NEXT CHAPTER STARTS HERE.</span><button onClick={() => openBooking()}>BOOK A FREE INTRO SESSION <ArrowUpRight size={13}/></button></div>
    <header className="header">
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}><span className="brand-mark"><Dumbbell size={21}/></span><span>IRONFORGE<span className="brand-light"> FITNESS</span><small>STRENGTH. PRECISION. PROGRESS.</small></span></a>
      <nav className={mobileMenu ? 'nav nav-open' : 'nav'}><button onClick={() => scrollTo('programs')}>PROGRAMS</button><button onClick={() => scrollTo('about')}>OUR PHILOSOPHY</button><button onClick={() => scrollTo('membership')}>MEMBERSHIP</button><button onClick={() => scrollTo('contact')}>CONTACT</button><button className="nav-mobile-cta" onClick={() => openBooking()}>BOOK A VISIT <ArrowUpRight size={14}/></button></nav>
      <button className="header-cta" onClick={() => openBooking()}>BOOK A VISIT <ArrowUpRight size={15}/></button>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="Minimal, dramatic gym interior" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"/> A DIFFERENT KIND OF GYM</div>
          <h1>BUILT WITH<br/><em>INTENT.</em></h1>
          <p className="hero-copy">A considered space for people who take their progress seriously. No noise. No shortcuts. Just better, every day.</p>
          <div className="hero-actions"><button className="button button-light" onClick={() => openBooking()}>START YOUR JOURNEY <ArrowUpRight size={16}/></button><button className="text-button" onClick={() => scrollTo('programs')}>EXPLORE THE GYM <ArrowDownRight size={16}/></button></div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span className="index-rule"/><span>THE ART OF GETTING STRONGER</span></div>
        <div className="hero-bottom"><span>DESIGNED FOR YOUR NEXT LEVEL.</span><span>EST. MMXXIV&nbsp; / &nbsp;TRAIN WITH PURPOSE</span></div>
      </section>

      <section className="stats section-pad"><div className="stat-intro"><span className="eyebrow dark-eyebrow">THE IRONFORGE STANDARD</span><p>Everything you need.<br/><strong>Nothing you don't.</strong></p></div><div className="stat"><strong>12<span>+</span></strong><span>EXPERT COACHES</span></div><div className="stat"><strong>2.4<span>k</span></strong><span>STRONGER MEMBERS</span></div><div className="stat"><strong>24<span>/7</span></strong><span>PROGRESS MINDSET</span></div></section>

      <section className="programs section-pad" id="programs"><div className="section-heading"><div><span className="eyebrow dark-eyebrow">01 — FIND YOUR FOCUS</span><h2>TRAIN FOR<br/><em>WHAT MATTERS.</em></h2></div><p>Different goals. One standard.<br/>Find the training that moves you forward.</p></div>
        <div className="program-grid">{programs.map(p => <article className="program-card" key={p.n}><div className="program-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1000&q=85)` }}><span className="program-number">/{p.n}</span><span className="program-tag">{p.tag}</span></div><div className="program-info"><div><h3>{p.title}</h3><p>{p.desc}</p></div><button aria-label={`Book ${p.title}`} className="round-arrow" onClick={() => openBooking()}><ArrowUpRight size={19}/></button></div></article>)}</div>
      </section>

      <section className="manifesto" id="about"><div className="manifesto-image"/><div className="manifesto-content"><span className="eyebrow"><span className="eyebrow-line"/> 02 — OUR PHILOSOPHY</span><h2>YOUR ONLY<br/>COMPETITION<br/>IS <em>YESTERDAY.</em></h2><p>We believe fitness should feel less like a performance and more like a promise you keep to yourself. Thoughtful coaching. Equipment that earns its place. A community that respects the work.</p><button className="button button-outline" onClick={() => scrollTo('membership')}>FIND YOUR MEMBERSHIP <ArrowUpRight size={15}/></button><span className="manifesto-caption">LESS EGO. MORE EVOLUTION.</span></div></section>

      <section className="membership section-pad" id="membership"><div className="section-heading membership-heading"><div><span className="eyebrow dark-eyebrow">03 — INVEST IN YOURSELF</span><h2>YOUR WORK.<br/><em>YOUR TERMS.</em></h2></div><div className="billing-switch"><span className={billing === 'monthly' ? 'active' : ''}>MONTHLY</span><button className={billing === 'yearly' ? 'switch switch-yearly' : 'switch'} aria-label="Toggle annual billing" onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}><span/></button><span className={billing === 'yearly' ? 'active' : ''}>YEARLY <b>SAVE 20%</b></span></div></div>
        <div className="plans-grid">{plans.map(plan => <article key={plan.name} className={`plan-card ${plan.featured ? 'plan-featured' : ''}`}><div className="plan-top"><span>{plan.name}</span>{plan.featured && <span className="popular">MOST POPULAR</span>}</div><p className="plan-tagline">{plan.tagline}</p><div className="plan-price"><span className="currency">₹</span><strong>{(billing === 'monthly' ? plan.monthly : plan.yearly).toLocaleString('en-IN')}</strong><span className="per">/ month</span></div>{billing === 'yearly' && <p className="billed-note">Billed annually · Demo pricing</p>}<div className="plan-rule"/><ul>{plan.features.map(f => <li key={f}><Check size={15}/>{f}</li>)}</ul><button className={plan.featured ? 'button button-dark plan-button' : 'button button-plan plan-button'} onClick={() => openBooking(plan.name)}>CHOOSE {plan.name} <ArrowUpRight size={15}/></button><p className="plan-fine">No joining fee in this demo · Cancel anytime</p></article>)}</div><p className="pricing-disclaimer">Demo website: all prices, offers and member statistics are illustrative, not a real gym offer.</p>
      </section>

      <section className="quote-band"><span className="quote-mark">“</span><blockquote>DISCIPLINE ISN'T A MOMENT.<br/><em>IT'S WHAT YOU RETURN TO.</em></blockquote><span className="quote-credit">THE IRONFORGE MINDSET&nbsp; / &nbsp;NO. 001</span></section>

      <section className="contact section-pad" id="contact"><div><span className="eyebrow dark-eyebrow">04 — YOUR MOVE</span><h2>LET'S GET<br/><em>TO WORK.</em></h2><p>Come see the space. Meet a coach. Tell us what you're working toward. Your first conversation is on us.</p><button className="button button-dark" onClick={() => openBooking()}>BOOK YOUR FREE INTRO <ArrowUpRight size={16}/></button></div><div className="contact-details"><div className="contact-item"><span>FIND US</span><strong>Phagwara, Punjab 144411</strong><p>LPU GYM</p></div><div className="contact-item"><span>OPENING HOURS</span><strong>MON – FRI&nbsp; / &nbsp;05:30 – 22:00</strong><strong>SAT – SUN&nbsp; / &nbsp;07:00 – 20:00</strong></div><div className="contact-item"><span>GET IN TOUCH</span><strong><a href="mailto:shvetanganand90@gmail.com">shvetanganand90@gmail.com</a></strong></div></div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home" onClick={(e) => {e.preventDefault(); scrollTo('home')}}><span className="brand-mark"><Dumbbell size={20}/></span><span>IRONFORGE<span className="brand-light"> FITNESS</span><small>STRENGTH. PRECISION. PROGRESS.</small></span></a><span className="footer-copy">© 2026 IRONFORGE FITNESS. DEMO CONCEPT.</span><div className="footer-links"><button onClick={() => scrollTo('programs')}>PROGRAMS</button><button onClick={() => scrollTo('membership')}>MEMBERSHIP</button><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><button className="back-top" onClick={() => scrollTo('home')}>BACK TO TOP ↑</button></div></footer>

    {modal && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) closeBooking(); }}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" onClick={closeBooking} aria-label="Close booking form"><X size={21}/></button>{!submitted ? <><span className="eyebrow dark-eyebrow">YOUR NEXT CHAPTER</span><h2 id="booking-title">BOOK YOUR<br/><em>INTRO SESSION.</em></h2><p className="modal-copy">Tell us a little about yourself. This demo will show a confirmation without sending your details anywhere.</p><form onSubmit={submit} className="booking-form"><label>FULL NAME<input name="name" value={form.name} onChange={update} placeholder="Your name" required /></label><div className="form-row"><label>EMAIL ADDRESS<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label><label>PHONE (OPTIONAL)<input name="phone" value={form.phone} onChange={update} placeholder="Phone number" /></label></div><label>MEMBERSHIP INTEREST<select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}><option>ESSENTIAL</option><option>PERFORMANCE</option><option>ELITE</option></select></label><div className="form-row"><label>YOUR MAIN GOAL<select name="goal" value={form.goal} onChange={update}><option>Build strength</option><option>Improve fitness</option><option>Fat loss</option><option>Build muscle</option><option>Improve mobility</option></select></label><label>PREFERRED DAY<input type="date" name="date" value={form.date} onChange={update} min={new Date().toISOString().split('T')[0]} /></label></div><label>PREFERRED TIME<select name="time" value={form.time} onChange={update}><option>06:00 AM – 08:00 AM</option><option>10:00 AM – 12:00 PM</option><option>12:00 PM – 02:00 PM</option><option>05:00 PM – 07:00 PM</option><option>07:00 PM – 09:00 PM</option></select></label><button className="button button-dark submit-button" type="submit">REQUEST INTRO SESSION <ArrowUpRight size={16}/></button><p className="form-disclaimer">Demo only. No booking is sent or stored.</p></form></> : <div className="confirmation"><div className="success-icon"><Check size={28}/></div><span className="eyebrow dark-eyebrow">REQUEST PREVIEW</span><h2 id="booking-title">YOU'RE ONE STEP<br/><em>CLOSER.</em></h2><p>Thanks, {form.name}! Your demo request is ready to review.</p><div className="confirmation-summary"><div><span>MEMBERSHIP</span><strong>{selectedPlan}</strong></div><div><span>YOUR GOAL</span><strong>{form.goal}</strong></div><div><span>PREFERRED TIME</span><strong>{form.time}</strong></div>{form.date && <div><span>PREFERRED DAY</span><strong>{form.date}</strong></div>}</div><p className="modal-copy">This is a portfolio prototype. It has not contacted a gym or reserved a real appointment.</p><button className="button button-dark submit-button" onClick={closeBooking}>BACK TO THE SITE <ArrowRight size={16}/></button></div>}</div></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
