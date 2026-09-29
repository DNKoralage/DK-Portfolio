import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a className="logo" href="#home" aria-label="Devnith Koralage home">
        <span className="logo-mark">DK</span>
        <span>Devnith Koralage</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="cv-btn" href="/devnith-koralage-cv.txt" download>
        <Download size={15} /> Download CV
      </a>
      <button className="menu-btn" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
