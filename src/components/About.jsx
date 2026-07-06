import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}>
        <i className="fas fa-building text-primary/40 text-6xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    content:
      "To ethically and efficiently connect Pakistani workers with dignified overseas employment opportunities, ensuring transparency, legal compliance, and mutual success for both candidates and employers.",
  },
  {
    id: "vision",
    label: "Our Vision",
    content:
      "To be Pakistan's most trusted overseas recruitment partner — recognized for integrity, thoroughness, and the life-changing impact we create for workers and their families.",
  },
  {
    id: "why-us",
    label: "Why Us",
    content:
      "Licensed (2193/RWP), 15+ years of experience, 4000+ successful placements across 12+ countries. We handle every step from documentation to departure, with personalized support throughout.",
  },
];

const trustChips = [
  { icon: "fa-certificate", label: "Govt. Licensed 2193/RWP" },
  { icon: "fa-handshake", label: "Ethical Recruitment" },
  { icon: "fa-clock", label: "Fast Processing" },
  { icon: "fa-globe", label: "12+ Countries" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            WHO WE ARE
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImgWithFallback
                src="https://plus.unsplash.com/premium_photo-1661760902897-2495710199ec?w=800&q=80"
                alt="Jabballian Overseas team"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            {/* Address caption */}
            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-primary/10">
              <p className="text-sm text-ink/70">
                <i className="fas fa-location-dot text-primary mr-2"></i>
                United Centre, 3rd Floor, Shamsabad, Murree Road, Rawalpindi
              </p>
            </div>
          </div>

          {/* Tabbed content */}
          <div>
            <p className="text-ink/70 mb-6 leading-relaxed">
              Based at <strong>United Centre, Shamsabad, Murree Road, Rawalpindi</strong>, Jabballian
              Overseas Recruiting Agency (License <strong>2193/RWP</strong>) is a government-licensed
              recruitment firm dedicated to connecting Pakistani workers with trusted employers across
              the Gulf and Europe.
            </p>
            <p className="text-ink/70 mb-8 leading-relaxed">
              With over 15 years of experience, we provide thorough, end-to-end recruitment services
              — from documentation and visa processing to pre-departure orientation and travel support.
            </p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-ink/60 border border-primary/10 hover:border-primary/30"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10 min-h-[120px]">
              <p className="text-ink/75 leading-relaxed">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 mt-6">
              {trustChips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15"
                >
                  <i className={`fas ${chip.icon} text-[10px]`}></i>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}