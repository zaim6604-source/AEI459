const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const destinations = [
  "Saudi Arabia", "UAE", "Qatar", "Kuwait",
  "Oman", "Germany", "Poland", "Romania", "Hungary",
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="font-heading text-xl font-bold text-white">Jabballian Overseas</h3>
              <p className="text-accent text-xs font-semibold tracking-wider uppercase -mt-0.5">
                Recruiting Agency
              </p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30 mb-4">
              2193/RWP
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              Licensed overseas recruitment agency based in Rawalpindi, connecting Pakistani workers
              with trusted Gulf and European employers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[8px] text-accent"></i>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Destinations
            </h4>
            <ul className="flex flex-col gap-2">
              {destinations.map((d) => (
                <li key={d} className="text-sm text-white/60 flex items-center gap-2">
                  <i className="fas fa-globe text-[10px] text-accent/60"></i>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="flex items-start gap-3">
                  <i className="fas fa-phone text-accent mt-0.5 text-sm"></i>
                  <div className="text-sm text-white/60">
                    <p>051-4935235</p>
                    <p>051-4935335</p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/923339941576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <i className="fab fa-whatsapp text-accent mt-0.5 text-sm"></i>
                  0333-9941576
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jabballian.pk"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors"
                >
                  <i className="fas fa-envelope text-accent mt-0.5 text-sm"></i>
                  info@jabballian.pk
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <i className="fas fa-location-dot text-accent mt-0.5 text-sm"></i>
                  <div className="text-sm text-white/60">
                    <p>Office No. 10, 3rd Floor,</p>
                    <p>United Centre, Shamsabad,</p>
                    <p>Murree Road, Rawalpindi</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jabballian Overseas Recruiting Agency. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            License: 2193/RWP — United Centre, Shamsabad, Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}