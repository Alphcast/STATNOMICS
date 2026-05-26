const whyItems = [
  { icon: '🧠', title: 'Expert Team', desc: 'PhD-qualified researchers & writers across all academic and professional domains.', color: 'from-primary-500/30 to-primary-600/20' },
  { icon: '⚡', title: 'Fast Delivery', desc: '48-hour turnaround on most projects. Rush options available for urgent deadlines.', color: 'from-accent-500/30 to-cyan-600/20' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Transparent, fair pricing with no hidden fees. Student-friendly rates available.', color: 'from-emerald-500/30 to-green-600/20' },
  { icon: '🔒', title: '100% Confidential', desc: 'Your data stays private. NDA signing available on request for sensitive projects.', color: 'from-fuchsia-500/30 to-pink-600/20' },
  { icon: '📊', title: 'AI + Human Expertise', desc: 'Best-in-class tools combined with expert human oversight for superior results.', color: 'from-amber-500/30 to-orange-600/20' },
  { icon: '🔄', title: 'Unlimited Revisions', desc: 'We revise until you are satisfied — no extra charges, no questions asked.', color: 'from-primary-500/30 to-accent-500/20' },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="section-label fade-left">Why STATNOMICS</div>
            <h2 className="section-title fade-left">Expertise You Can Trust.<br />Speed You Can Count On.</h2>
            <p className="text-white/50 text-base leading-relaxed mt-4 max-w-md fade-left">
              We blend human expertise with AI-assisted research workflows to deliver work that is
              faster, smarter, and more accurate than traditional academic support services.
            </p>

            {/* Image of people analyzing */}
            <div className="mt-8 glass rounded-2xl overflow-hidden fade-left">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-fuchsia-500/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10 flex items-center gap-3 md:gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 border-2 border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="1.5" className="md:w-8 md:h-8">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
                        </svg>
                      </div>
                      <div className="mt-2 w-16 md:w-20 h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                             style={{ width: `${[85, 92, 78][i]}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5">
                  <span className="text-white/70 text-xs">Team collaboration in action</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-right">
            {whyItems.map(w => (
              <div key={w.title}
                   className="glass p-5 rounded-xl hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3
                              bg-gradient-to-br ${w.color} border border-white/10`}>
                  {w.icon}
                </div>
                <div className="font-syne font-bold text-sm text-white mb-1.5">{w.title}</div>
                <div className="text-white/40 text-xs leading-relaxed">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
