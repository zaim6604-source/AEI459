const steps = [
  {
    num: "01",
    title: "Register & Consult",
    desc: "Visit our office at United Centre, Shamsabad or contact us via WhatsApp. Discuss your skills, preferences, and target destinations with our consultants.",
    icon: "fa-clipboard-list",
  },
  {
    num: "02",
    title: "Documents & Visa",
    desc: "Submit your documents for verification. We handle passport, educational certificates, experience letters, and visa application processing.",
    icon: "fa-file-lines",
  },
  {
    num: "03",
    title: "Medical & Trade Test",
    desc: "Undergo mandatory medical examinations and any required trade skill assessments as per destination country requirements.",
    icon: "fa-stethoscope",
  },
  {
    num: "04",
    title: "Employer Confirmation",
    desc: "We coordinate with the overseas employer for final confirmation, contract signing, and all necessary approvals.",
    icon: "fa-handshake",
  },
  {
    num: "05",
    title: "Ticketing & Departure",
    desc: "We arrange your air ticket, provide pre-departure orientation, and ensure you're fully prepared for your journey abroad.",
    icon: "fa-plane-departure",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Diagonal band background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(0, 107, 166, 0.08) 50%, transparent 60%, transparent 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
            HOW IT WORKS
          </span>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.num} className="relative flex items-center">
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm shadow-lg">
                      {step.num}
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md border border-primary/10 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <i className={`fas ${step.icon} text-primary`}></i>
                        <h3 className="font-heading font-bold text-ink">{step.title}</h3>
                      </div>
                      <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  {isLeft ? (
                    <>
                      {/* Left card */}
                      <div className="hidden md:flex w-[calc(50%-2rem)] justify-end">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-primary/10 text-right">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <h3 className="font-heading font-bold text-ink">{step.title}</h3>
                            <i className={`fas ${step.icon} text-primary`}></i>
                          </div>
                          <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                      {/* Center number */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-heading font-bold text-sm shadow-lg z-10">
                        {step.num}
                      </div>
                      {/* Right spacer */}
                      <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                    </>
                  ) : (
                    <>
                      {/* Left spacer */}
                      <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                      {/* Center number */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-heading font-bold text-sm shadow-lg z-10">
                        {step.num}
                      </div>
                      {/* Right card */}
                      <div className="hidden md:flex w-[calc(50%-2rem)]">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-primary/10">
                          <div className="flex items-center gap-2 mb-2">
                            <i className={`fas ${step.icon} text-primary`}></i>
                            <h3 className="font-heading font-bold text-ink">{step.title}</h3>
                          </div>
                          <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}