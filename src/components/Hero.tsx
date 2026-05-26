import { Particles } from './Particles';

const chartBars = [
  { label: 'Research', value: 92, color: '#6C63FF' },
  { label: 'Analysis', value: 88, color: '#00D1FF' },
  { label: 'Proposals', value: 85, color: '#A78BFA' },
  { label: 'Assignments', value: 95, color: '#F472B6' },
];

const statCards = [
  { icon: '📄', label: 'Research Papers', value: '500+' },
  { icon: '📊', label: 'Data Reports', value: '350+' },
  { icon: '💼', label: 'Proposals', value: '200+' },
  { icon: '🎓', label: 'Students Helped', value: '1000+' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <Particles />

      {/* Glow orbs */}
      <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)' }} />
      <div className="absolute top-[25%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(0,209,255,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label fade-up">🚀 Premium Research Platform</div>
            <h1 className="font-poppins font-extrabold leading-tight mb-6 fade-up"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-2px' }}>
              <span className="bg-gradient-to-r from-white via-primary-300 to-accent-400 bg-clip-text text-transparent">
                Research Assistance,
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Data Analysis,
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D1FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1.5px rgba(108,99,255,0.3)',
                paintOrder: 'stroke fill',
              }}>
                Proposals &amp; More
              </span>
            </h1>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-md fade-up">
              STATNOMICS empowers students, researchers, startups, and professionals with
              expert-driven research writing, data analysis, business proposals, and virtual
              assistance — delivered fast with precision.
            </p>
            <div className="flex flex-wrap gap-3 fade-up">
              <a href="#contact" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Get Started
              </a>
              <a href="https://wa.me/2347037994509?text=Hello%20STATNOMICS%2C%20I%20need%20help%20with%20my%20project"
                 target="_blank" rel="noreferrer" className="btn-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 md:gap-10 mt-10 flex-wrap fade-up">
              {[['500+', 'Projects Done'], ['98%', 'Satisfaction Rate'], ['24/7', 'Support'], ['48h', 'Avg. Delivery']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-syne font-extrabold text-xl md:text-2xl bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    {n}
                  </div>
                  <div className="text-white/30 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard / Chart Visualization */}
          <div className="relative fade-right">
            {/* Main dashboard card */}
            <div className="glass p-5 md:p-6 rounded-2xl animate-float shadow-2xl shadow-primary-500/20"
                 style={{ transform: 'perspective(1000px) rotateY(-3deg) rotateX(2deg)' }}>
              {/* Window dots */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-white/30 text-xs ml-auto tracking-wide">STATNOMICS · Analytics</span>
              </div>

              {/* Chart bars visualization */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {chartBars.map(bar => (
                  <div key={bar.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-white/40 text-xs mb-1">{bar.label}</div>
                    <div className="flex items-end gap-2">
                      <div className="text-white font-syne font-bold text-lg">{bar.value}%</div>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000"
                             style={{ width: `${bar.value}%`, background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Line chart area */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/40 text-xs">Monthly Performance</span>
                  <span className="text-green-400 text-xs font-semibold">↑ 23.5%</span>
                </div>
                <svg viewBox="0 0 300 80" className="w-full h-auto">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 70 Q20 65 40 50 Q60 35 80 45 Q100 55 120 30 Q140 10 160 25 Q180 40 200 15 Q220 5 240 20 Q260 35 280 25 Q290 20 300 18"
                        fill="none" stroke="#6C63FF" strokeWidth="2" />
                  <path d="M0 70 Q20 65 40 50 Q60 35 80 45 Q100 55 120 30 Q140 10 160 25 Q180 40 200 15 Q220 5 240 20 Q260 35 280 25 Q290 20 300 18 L300 80 L0 80 Z"
                        fill="url(#lineGrad)" />
                  <circle cx="200" cy="15" r="4" fill="#00D1FF" stroke="#0f0c29" strokeWidth="2" />
                </svg>
              </div>

              {/* Pie chart visualization */}
              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-3 border border-white/5">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none" stroke="#2d2460" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.8 8.9 a 15.9155 15.9155 0 0 1 2.1 7.0"
                          fill="none" stroke="#6C63FF" strokeWidth="3" strokeLinecap="round" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 -10.9 -2.5"
                          fill="none" stroke="#00D1FF" strokeWidth="3" strokeLinecap="round"
                          strokeDasharray="16 100" strokeDashoffset="-30" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 0 -10.9 29.3"
                          fill="none" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"
                          strokeDasharray="12 100" strokeDashoffset="-46" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white/60 font-semibold">98%</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-1">
                  {[{ color: '#6C63FF', label: 'Research' }, { color: '#00D1FF', label: 'Analysis' }, { color: '#A78BFA', label: 'Proposals' }, { color: '#F472B6', label: 'Others' }].map(d => (
                    <div key={d.label} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                      <span className="text-white/40 text-[10px]">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse" />
                <span className="text-white/30 text-xs">Expert team online • Avg. delivery 48h</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="glass absolute -bottom-4 -left-4 md:-left-8 px-4 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg shadow-accent-500/20 animate-float-delayed">
              <span className="text-lg">⚡</span>
              <span className="text-white/70 text-xs font-medium whitespace-nowrap">Fast delivery guaranteed</span>
            </div>

            {/* Data stats cards */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {statCards.map(card => (
                <div key={card.label} className="glass py-2 px-3 rounded-xl text-center">
                  <div className="text-lg">{card.icon}</div>
                  <div className="font-syne font-bold text-sm text-white">{card.value}</div>
                  <div className="text-white/30 text-[10px]">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
