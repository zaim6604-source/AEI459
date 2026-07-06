import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-secondary via-primary to-highlight flex items-center justify-center`}>
        <div className="text-center">
          <i className="fas fa-users text-white/40 text-5xl mb-2"></i>
          <p className="text-white/50 text-xs">Team Photo</p>
        </div>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[85vh]">
      {/* Left panel: ocean-blue solid */}
      <div className="w-full md:w-1/2 bg-primary text-white flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16">
        <div className="max-w-xl">
          {/* Pill badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-accent border border-white/20 mb-6">
            <i className="fas fa-badge-check mr-1.5"></i>
            Licensed Recruiter — 2193/RWP
          </span>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            We Open the Door —{" "}
            <span className="text-accent">You Walk Into a Better Living</span>
          </h2>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
            Jabballian Overseas Recruiting Agency guides Rawalpindi's workers into
            trusted Gulf and European jobs — licensed and thorough.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/923339941576"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Apply Now
            </a>
            <a
              href="https://wa.me/923339941576"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/40 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp Us
            </a>
          </div>

          {/* Floating trust indicators */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
            <div className="flex items-center gap-2">
              <i className="fas fa-users text-accent"></i>
              <span className="text-sm text-white/70">4000+ Placed</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-globe text-accent"></i>
              <span className="text-sm text-white/70">12+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-halved text-accent"></i>
              <span className="text-sm text-white/70">Govt. Licensed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel: full-height photo */}
      <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-[85vh] overflow-hidden">
        <ImgWithFallback
          src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&q=80"
          alt="Professional team at Jabballian Overseas"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Wavy inner seam overlay */}
        <div className="absolute inset-0 md:bg-gradient-to-r md:from-primary/30 md:to-transparent"></div>

        {/* 2193/RWP badge */}
        <div className="absolute top-6 right-6 bg-white/95 text-primary font-heading font-bold px-4 py-2 rounded-lg shadow-lg text-sm">
          <i className="fas fa-certificate text-accent mr-1.5"></i>
          2193/RWP
        </div>

        {/* Floating stat chips */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
          <div className="bg-white/90 backdrop-blur-sm text-ink px-4 py-2.5 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-2">
            <i className="fas fa-briefcase text-primary"></i>
            Gulf & Europe Jobs
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-ink px-4 py-2.5 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-2">
            <i className="fas fa-building text-primary"></i>
            United Centre, Shamsabad
          </div>
        </div>
      </div>
    </section>
  );
}