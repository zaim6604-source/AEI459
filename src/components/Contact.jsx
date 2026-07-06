import { useState } from "react";

const WHATSAPP_NUMBER = "923339941576";
const PHONE_LINES = ["051-4935235", "051-4935335"];

const contactInfo = [
  {
    icon: "fa-phone",
    title: "Phone",
    lines: PHONE_LINES,
    href: "tel:+92514935235",
  },
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    lines: ["0333-9941576"],
    href: "https://wa.me/923339941576",
  },
  {
    icon: "fa-envelope",
    title: "Email",
    lines: ["info@jabballian.pk"],
    href: "mailto:info@jabballian.pk",
  },
  {
    icon: "fa-location-dot",
    title: "Address",
    lines: [
      "Office No. 10, 3rd Floor,",
      "United Centre, Shamsabad,",
      "Murree Road, Rawalpindi",
    ],
    href: "https://www.google.com/maps?q=United+Centre+Shamsabad+Murree+Road+Rawalpindi&hl=en&z=16&output=embed",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Jabballian Overseas,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 sm:p-8 border border-primary/10">
              <h3 className="font-heading text-xl font-bold text-ink mb-6">
                <i className="fas fa-message text-primary mr-2"></i>
                Send an Inquiry
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1.5">
                    Full Name <span className="text-cta">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-primary/15 text-ink placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1.5">
                    Phone <span className="text-cta">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-primary/15 text-ink placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-primary/15 text-ink placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink/70 mb-1.5">
                    Message <span className="text-cta">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-primary/15 text-ink placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cta text-white py-3.5 rounded-xl text-sm font-bold hover:bg-cta/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i>
                  Send via WhatsApp
                </button>
                <p className="text-xs text-ink/40 text-center">
                  By submitting, you agree to receive a reply on WhatsApp.
                </p>
              </div>
            </form>
          </div>

          {/* Right — info rows + map */}
          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon, title, lines, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <i className={`${icon} text-primary`}></i>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/50 mb-0.5">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-sm font-medium text-ink">{line}</p>
                  ))}
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 border border-primary/10">
              <iframe
                title="Jabballian Overseas Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=United+Centre+Shamsabad+Murree+Road+Rawalpindi&hl=en&z=16&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}