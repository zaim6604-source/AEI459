export default function CTABand() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #006BA6 0%, #0496FF 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Ready to Start Your Overseas Journey?
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Take the first step toward a better living. Contact Jabballian Overseas today and
          let us guide you to trusted employment opportunities abroad.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923339941576"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-white px-8 py-3.5 rounded-lg text-base font-bold hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <i className="fas fa-paper-plane"></i>
            Apply Now
          </a>
          <a
            href="https://wa.me/923339941576"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/25 transition-all border border-white/20 inline-flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}