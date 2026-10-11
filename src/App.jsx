import React, { useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'Forma',
    description: 'A calmer way to manage your money.',
    type: 'Fintech · Product design',
    className: 'project-visual-forma',
    visual: (
      <div className="forma-window">
        <div className="forma-top"><span>forma<span className="forma-dot">.</span></span><span className="forma-avatar">A</span></div>
        <p className="visual-eyebrow">TOTAL BALANCE</p>
        <p className="forma-balance">$24,680<span>.50</span></p>
        <div className="forma-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="forma-caption"><span>01 JUN</span><span>30 JUN</span></div>
        <div className="forma-bottom"><span>Monthly spending</span><strong>↓ 12.8%</strong></div>
      </div>
    ),
  },
  {
    number: '02',
    name: 'Goodside',
    description: 'Small rituals. A little more balance.',
    type: 'Wellness · Web application',
    className: 'project-visual-goodside',
    visual: (
      <div className="goodside-window">
        <div className="goodside-nav"><span>goodside</span><span>your little reset</span></div>
        <div className="goodside-content">
          <span className="goodside-sun">✳</span>
          <p className="visual-eyebrow">A MOMENT FOR YOU</p>
          <h3>Take it<br /><em>one day</em><br />at a time.</h3>
          <span className="goodside-button">Find your pause <span>↗</span></span>
        </div>
        <span className="goodside-orbit orbit-one" />
        <span className="goodside-orbit orbit-two" />
      </div>
    ),
  },
  {
    number: '03',
    name: 'Northstar',
    description: 'Your whole team, moving in sync.',
    type: 'SaaS · Dashboard',
    className: 'project-visual-northstar',
    visual: (
      <div className="northstar-window">
        <div className="northstar-sidebar"><span className="northstar-logo">✳</span><span>⌂</span><span>▤</span><span>◷</span><span>⚙</span></div>
        <div className="northstar-main">
          <div className="northstar-head"><span>Tuesday, October 14</span><span className="northstar-face">J</span></div>
          <h3>Good morning, Jamie <span>✳</span></h3>
          <p className="northstar-subtitle">Here’s what’s happening with your team.</p>
          <div className="northstar-stats"><div><span>IN PROGRESS</span><strong>08</strong><i>↑ 2 this week</i></div><div><span>COMPLETED</span><strong>24</strong><i>↑ 8 this week</i></div></div>
          <div className="northstar-task"><span className="task-check">✓</span><span>Website refresh</span><span className="task-tag">DESIGN</span></div>
        </div>
      </div>
    ),
  },
]

const services = [
  ['01', 'Frontend development', 'Fast, accessible interfaces built with React and a careful eye for detail.'],
  ['02', 'Design systems', 'Reusable components and clear foundations that help products grow.'],
  ['03', 'Creative collaboration', 'A thoughtful partner from the first sketch to the final interaction.'],
]

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell min-h-screen bg-paper text-ink">
      <header className="site-header">
        <a href="#home" className="wordmark" onClick={closeMenu} aria-label="Alex Morgan home">
          alex<span>.</span>morgan
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> INDEPENDENT REACT DEVELOPER <span className="eyebrow-divider">·</span> BROOKLYN, NY</p>
            <h1>Good ideas,<br />made <span className="hero-highlight">real.</span></h1>
            <p className="hero-intro">I’m Alex — a React developer partnering with good people to build thoughtful digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a creative workspace">
            <div className="art-sun" />
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-star star-a">✳</div>
            <div className="art-star star-b">✳</div>
            <div className="art-caption">CURIOUS BY NATURE<br />CAREFUL BY DESIGN</div>
            <div className="art-note"><span className="note-pin">✳</span><span>MAKING THE<br />INTERNET A LITTLE<br />MORE HUMAN.</span></div>
            <div className="art-plant"><span className="plant-leaf leaf-a" /><span className="plant-leaf leaf-b" /><span className="plant-leaf leaf-c" /><span className="plant-leaf leaf-d" /><span className="plant-stem" /><span className="plant-pot" /></div>
            <div className="art-shadow" />
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <div className="ticker" aria-label="React developer, creative collaborator, detail person">
          <div className="ticker-track">
            {[0, 1].map((copy) => <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
              <span>REACT DEVELOPER</span><i>✳</i><span>CREATIVE COLLABORATOR</span><i>✳</i><span>DETAIL PERSON</span><i>✳</i><span>GOOD HUMAN</span><i>✳</i>
            </div>)}
          </div>
        </div>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">A FEW RECENT FAVORITES</p><h2>Selected work<span className="heading-period">.</span></h2></div>
            <p className="section-aside">A little bit of thinking,<br />a lot of making.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className={`project-visual ${project.className}`} href="#contact" aria-label={`Discuss a project like ${project.name}`}>
                  {project.visual}
                  <span className="project-arrow"><ArrowIcon diagonal /></span>
                </a>
                <div className="project-meta"><span>{project.number} / {project.type}</span><span>2024 — 2025</span></div>
                <div className="project-info"><div><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-link"><ArrowIcon diagonal /></span></div>
              </article>
            ))}
          </div>
          <div className="work-note"><span className="availability-dot" /> MORE GOOD THINGS IN THE WORKS</div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-stamp" aria-hidden="true"><span>MADE WITH</span><strong>✳</strong><span>INTENTION</span></div>
            <div className="about-copy">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Code is my craft.<br /><span>People are the point.</span></h2>
              <p className="about-description">I’m a Brooklyn-based developer who believes the best digital experiences feel effortless. I bring equal parts curiosity and craft to every collaboration — turning complex problems into simple, useful things people love to use.</p>
              <div className="about-details"><div><span className="detail-label">WHEN I’M NOT CODING</span><p>Long walks, good coffee &amp; my record collection.</p></div><div><span className="detail-label">MY GO-TO STACK</span><p>React, TypeScript, Tailwind &amp; a lot of care.</p></div></div>
            </div>
            <div className="about-decoration" aria-hidden="true"><span className="decoration-sun">✳</span><span className="decoration-text">STAY<br />CURIOUS</span></div>
          </div>
        </section>

        <section className="services-section section-wrap section-pad" id="services">
          <div className="section-heading">
            <div><p className="eyebrow">HOW I CAN HELP</p><h2>Good work,<br className="mobile-break" /> together<span className="heading-period">.</span></h2></div>
            <p className="section-aside">Thoughtful from the<br />first hello to launch day.</p>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-spark" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow"><span className="availability-dot" /> OPEN FOR THE RIGHT PROJECT</p>
            <h2>Have a good one<br />in <span>mind?</span></h2>
            <p className="contact-copy">Have a half-formed idea, a tricky problem, or just want to say hi? My inbox is open.</p>
            <a className="button button-lime" href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev <ArrowIcon diagonal /></a>
            <span className="contact-spark contact-spark-one" aria-hidden="true">✳</span>
            <span className="contact-spark contact-spark-two" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="wordmark footer-wordmark">alex<span>.</span>morgan</a>
        <p>DESIGNED &amp; BUILT WITH CARE <span>© 2025</span></p>
        <div className="footer-links"><a href="mailto:hello@alexmorgan.dev">EMAIL <ArrowIcon diagonal /></a><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB <ArrowIcon diagonal /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN <ArrowIcon diagonal /></a></div>
      </footer>
    </div>
  )
}

export default App
