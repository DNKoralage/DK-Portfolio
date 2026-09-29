export function SiteFooter() {
  return (
    <footer className="foot">
      <a className="logo" href="#home">
        <span className="logo-mark">DK</span>
        <span>Devnith Koralage</span>
      </a>
      <p>© 2026 Devnith Koralage. All rights reserved.</p>
      <nav aria-label="Footer">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="to-top" href="#home" aria-label="Back to top">↑</a>
    </footer>
  );
}
