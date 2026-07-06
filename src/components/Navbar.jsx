import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: name + badge */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="font-heading text-lg sm:text-xl font-bold text-primary leading-tight">
              Jabballian Overseas
            </h1>
            <p className="text-xs text-primary/70 -mt-0.5">Recruiting Agency</p>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-[#B8860B] border border-accent/40">
            2193/RWP
          </span>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923339941576"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-cta/90 transition-all shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas fa-${menuOpen ? "times" : "bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t mt-2 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923339941576"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta text-white px-4 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-cta/90 transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}