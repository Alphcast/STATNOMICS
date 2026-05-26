import { services } from '../data/services';

const waLink = 'https://wa.me/2347037994509?text=Hello%20STATNOMICS%2C%20I%20need%20help%20with%20my%20project';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="section-label justify-center fade-up">What We Offer</div>
          <h2 className="section-title fade-up text-center">Services Built for Results</h2>
          <p className="text-white/50 text-base max-w-lg mx-auto mt-4 fade-up">
            From academic writing to data intelligence — we cover every corner of your project needs.
          </p>
        </div>

        {/* Image showcase for analysis */}
        <div className="grid md:grid-cols-3 gap-3 mb-12 fade-up">
          <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-[16/9] bg-gradient-to-br from-primary-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <svg viewBox="0 0 200 120" className="w-4/5 h-auto relative z-10">
                <rect x="10" y="80" width="25" height="30" rx="3" fill="#6C63FF" opacity="0.8" />
                <rect x="45" y="55" width="25" height="55" rx="3" fill="#6C63FF" opacity="0.9" />
                <rect x="80" y="40" width="25" height="70" rx="3" fill="#00D1FF" opacity="0.8" />
                <rect x="115" y="20" width="25" height="90" rx="3" fill="#6C63FF" />
                <rect x="150" y="60" width="25" height="50" rx="3" fill="#A78BFA" opacity="0.8" />
                <line x1="8" y1="105" x2="195" y2="105" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <div className="text-white/70 text-sm font-semibold">Statistical Analysis & Visualization</div>
              <div className="text-white/30 text-xs mt-1">SPSS · R · Python · STATA · Excel</div>
            </div>
          </div>
          <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-[16/9] bg-gradient-to-br from-accent-500/20 to-teal-600/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <svg viewBox="0 0 200 120" className="w-4/5 h-auto relative z-10">
                <circle cx="60" cy="55" r="25" fill="none" stroke="#00D1FF" strokeWidth="2" opacity="0.6" />
                <circle cx="120" cy="50" r="35" fill="none" stroke="#6C63FF" strokeWidth="2" opacity="0.6" />
                <circle cx="90" cy="65" r="18" fill="#6C63FF" opacity="0.3" />
                <circle cx="50" cy="50" r="4" fill="#00D1FF" />
                <circle cx="130" cy="45" r="4" fill="#6C63FF" />
                <circle cx="85" cy="40" r="3" fill="#A78BFA" />
                <circle cx="110" cy="70" r="3" fill="#F472B6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <div className="text-white/70 text-sm font-semibold">Cluster & Regression Analysis</div>
              <div className="text-white/30 text-xs mt-1">Advanced quantitative methods</div>
            </div>
          </div>
          <div className="glass rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-[16/9] bg-gradient-to-br from-fuchsia-500/20 to-pink-600/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <svg viewBox="0 0 200 120" className="w-4/5 h-auto relative z-10">
                <path d="M20 100 L40 70 L60 80 L80 45 L100 55 L120 25 L140 40 L160 30 L180 35"
                      fill="none" stroke="#A78BFA" strokeWidth="2" />
                <path d="M20 100 L40 90 L60 95 L80 70 L100 80 L120 55 L140 65 L160 50 L180 60"
                      fill="none" stroke="#00D1FF" strokeWidth="2" opacity="0.6" />
                {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((x, i) => (
                  <circle key={i} cx={x} cy={[100, 70, 80, 45, 55, 25, 40, 30, 35][i]} r="3" fill="#A78BFA" />
                ))}
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <div className="text-white/70 text-sm font-semibold">Trend Analysis & Forecasting</div>
              <div className="text-white/30 text-xs mt-1">Time series & predictive modeling</div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title}
                 className="glass p-6 rounded-2xl hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 cursor-pointer fade-up group"
                 style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4
                            bg-gradient-to-br from-primary-500/30 to-accent-500/20 border border-primary-500/30
                            group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href={waLink} target="_blank" rel="noreferrer"
                 className="text-primary-500 text-xs font-medium no-underline flex items-center gap-1.5
                          group-hover:gap-2.5 transition-all">
                Request this service
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
