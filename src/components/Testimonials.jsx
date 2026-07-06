const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Construction Worker — Saudi Arabia",
    quote:
      "Jabballian Overseas made the entire process smooth and transparent. From documentation to departure, they guided me at every step. I'm now working in Riyadh and earning well.",
    rating: 5,
  },
  {
    name: "Muhammad Usman",
    role: "Driver — Kuwait",
    quote:
      "I was hesitant about going abroad, but the team at Jabballian reassured me. They handled my visa and medical tests professionally. Highly recommended for anyone seeking overseas jobs.",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Factory Worker — Poland",
    quote:
      "Thanks to Jabballian Overseas, I secured a job in Poland within weeks. Their pre-departure orientation was very helpful. Truly a life-changing experience.",
    rating: 4,
  },
  {
    name: "Sajid Mahmood",
    role: "Security Guard — Oman",
    quote:
      "Professional, honest, and efficient. They found me a good position in Muscat. The team at United Centre, Shamsabad really cares about their candidates.",
    rating: 5,
  },
  {
    name: "Farhan Ali",
    role: "Welder — Qatar",
    quote:
      "I had tried other agencies before, but Jabballian was different. They verified my employer, arranged everything, and I've been working in Doha for over a year now.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star text-[10px] ${i < count ? "text-accent" : "text-gray-200"}`}
        ></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            SUCCESS STORIES
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Big quote-mark column */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="text-[10rem] leading-[0.8] font-heading font-extrabold text-primary/10 select-none">
              &ldquo;
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink -mt-8 mb-3">
              What Our Candidates Say
            </h3>
            <p className="text-ink/60 text-sm leading-relaxed">
              Real stories from workers we've helped place in trusted jobs across the Gulf and Europe.
            </p>
          </div>

          {/* Stacked mini cards */}
          <div className="lg:col-span-3 space-y-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-5 shadow-sm border border-primary/5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-heading font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                  <Stars count={t.rating} />
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}