const steps = [
  { num: '01', icon: '📋', title: 'Submit Your Request', desc: 'Fill out our contact form or message us on WhatsApp with your project details, deadline, and specific requirements.' },
  { num: '02', icon: '⚙️', title: 'Expert Processing', desc: 'Our specialist team reviews your request, assigns the right expert, and begins work immediately with a clear timeline.' },
  { num: '03', icon: '✅', title: 'Delivery & Revisions', desc: 'Receive your completed work on time. Unlimited revisions included until you are fully satisfied with the result.' },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="section-label justify-center fade-up">Simple Process</div>
          <h2 className="section-title fade-up text-center">How STATNOMICS Works</h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[25px] top-14 bottom-14 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 opacity-30 hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-start gap-5 fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center
                              bg-gradient-to-br from-primary-500 to-accent-500 font-syne font-bold text-sm text-white relative z-10
                              shadow-lg shadow-primary-500/30">
                  {step.num}
                </div>
                <div className="glass flex-1 p-5 md:p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-syne font-bold text-sm text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
