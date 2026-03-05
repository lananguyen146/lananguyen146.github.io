import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 bg-cream/85 backdrop-blur-xl border-b border-border-light">
      <a href="#hero" className="font-serif text-lg text-ink no-underline">
        Lana <em className="italic text-terracotta">Nguyen</em>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#toolkit" className="text-xs font-medium tracking-widest uppercase text-warm-gray hover:text-ink transition-colors no-underline">Toolkit</a></li>
        <li><a href="#projects" className="text-xs font-medium tracking-widest uppercase text-warm-gray hover:text-ink transition-colors no-underline">Projects</a></li>
        <li><a href="#contact" className="text-xs font-medium tracking-widest uppercase text-warm-gray hover:text-ink transition-colors no-underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
