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

        {/* Image showcase — real tool interfaces */}
        <div className="grid md:grid-cols-3 gap-3 mb-12 fade-up">
          {[
            {
              src: 'https://images.unsplash.com/photo-1762558978967-709b17a00415?w=600&auto=format',
              title: 'Excel & Spreadsheet Mastery',
              sub: 'Financial modeling · Data entry · Dashboards',
              gradient: 'from-primary-500/20 to-purple-600/20',
            },
            {
              src: 'https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=600&auto=format',
              title: 'PowerBI Dashboard Design',
              sub: 'KPI tracking · Sales analytics · Executive reporting',
              gradient: 'from-accent-500/20 to-teal-600/20',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Mixed-Design_ANOVA_Example.png',
              title: 'SPSS Statistical Modeling',
              sub: 'ANOVA · Regression · Survey analysis · T-tests',
              gradient: 'from-fuchsia-500/20 to-pink-600/20',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Screenshot-knitr-RStudio.png',
              title: 'R Programming & Analysis',
              sub: 'RStudio · Knitr · tidyverse · Statistical computing',
              gradient: 'from-primary-500/20 to-accent-500/20',
            },
            {
              src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Screen-python-code-matplotlib-physics-simulation.jpg',
              title: 'Python Data Science',
              sub: 'Jupyter · Pandas · Matplotlib · Machine learning',
              gradient: 'from-emerald-500/20 to-teal-600/20',
            },
            {
              src: 'https://images.unsplash.com/photo-1762279389020-eeeb69c25813?w=600&auto=format',
              title: 'Charts & Data Visualization',
              sub: 'Interactive plots · Infographics · Report-ready graphs',
              gradient: 'from-amber-500/20 to-orange-600/20',
            },
          ].map(item => (
            <div key={item.title} className="glass rounded-2xl overflow-hidden group cursor-pointer">
              <div className={`aspect-[16/9] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="text-white/70 text-sm font-semibold">{item.title}</div>
                <div className="text-white/30 text-xs mt-1">{item.sub}</div>
              </div>
            </div>
          ))}
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
