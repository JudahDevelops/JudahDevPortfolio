
interface NavbarProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

function Navbar({ isNavOpen, setIsNavOpen }: NavbarProps) {
  return (
    <header>
      <div className="container header-container">
        <h1>Judah Develops</h1>
        <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="hamburger"></span>
        </button>
        <nav className={`nav ${isNavOpen ? 'nav--visible' : ''}`}>
          <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsNavOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
          <a href="#vision" onClick={() => setIsNavOpen(false)}>Vision</a>
          <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;