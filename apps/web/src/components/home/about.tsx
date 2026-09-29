import { ArrowRight, Mail, MapPin, Phone, User } from 'lucide-react';

export function About() {
  return (
    <section className="panel" id="about">
      <div className="panel-head"><User size={16} /> About Me</div>
      <p>
        Full-Stack Developer and Systems Engineer based in Dehiwala, Sri Lanka. Specialized in building modern, responsive web platforms, advanced TV/radio streaming server architecture, and high-quality multimedia content.
      </p>
      <dl className="facts">
        <div><dt><User size={14} /> Name</dt><dd>Devnith Koralage</dd></div>
        <div><dt><MapPin size={14} /> Location</dt><dd>Dehiwala, Sri Lanka</dd></div>
        <div><dt><Mail size={14} /> Email</dt><dd><a href="mailto:dnkoralage@gmail.com">dnkoralage@gmail.com</a></dd></div>
        <div><dt><Phone size={14} /> Phone</dt><dd><a href="tel:+94787984875">+94 78 798 4875</a></dd></div>
      </dl>
      <p className="status"><span className="dot" /> Open to Work / Available for Freelance</p>
      <a className="text-link" href="#contact">More About Me <ArrowRight size={14} /></a>
    </section>
  );
}
