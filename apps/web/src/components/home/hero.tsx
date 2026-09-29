import { ArrowRight, Briefcase, Calendar, Globe, MessageCircle } from 'lucide-react';
import { portrait } from '@/data/portfolio';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="pill"><span className="dot" /> Software Developer & Systems Engineer</p>
        <h1>I build high-performance web experiences & streaming systems that matter.</h1>
        <p className="lede">
          I&apos;m Devnith Koralage, a passionate Full-Stack Developer, Systems Engineer, and Multimedia Specialist turning complex ideas into scalable, beautiful web applications and broadcast systems.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">View My Work <ArrowRight size={16} /></a>
          <a className="btn ghost" href="#contact">Let&apos;s Talk <MessageCircle size={16} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orb" aria-hidden="true" />
        <img src={portrait} alt="Devnith Koralage, software developer and systems engineer" width={640} height={800} fetchPriority="high" />
        <ul className="metrics">
          <li><strong>20+</strong><span>Projects Completed</span><Briefcase size={16} /></li>
          <li><strong>4+</strong><span>Years of Experience</span><Calendar size={16} /></li>
          <li><strong>20+</strong><span>Active Web Platforms</span><Globe size={16} /></li>
        </ul>
      </div>
    </section>
  );
}
