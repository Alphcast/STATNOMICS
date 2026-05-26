const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', img: 'https://images.unsplash.com/photo-1772339080120-0ebb044655bf?w=400&auto=format' },
  { name: 'France', flag: '🇫🇷', img: 'https://images.unsplash.com/photo-1760281854309-3c5ea36d5d83?w=400&auto=format' },
  { name: 'Spain', flag: '🇪🇸', img: 'https://images.unsplash.com/photo-1745091723338-cbe6561908ea?w=400&auto=format' },
  { name: 'Germany', flag: '🇩🇪', img: 'https://images.unsplash.com/photo-1570862687812-8b841fad0733?w=400&auto=format' },
  { name: 'Italy', flag: '🇮🇹', img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&auto=format' },
  { name: 'Finland', flag: '🇫🇮', img: 'https://flagcdn.com/w320/fi.png' },
  { name: 'USA', flag: '🇺🇸', img: 'https://images.unsplash.com/photo-1524242109383-e349707a106b?w=400&auto=format' },
  { name: 'Canada', flag: '🇨🇦', img: 'https://images.unsplash.com/photo-1437326516294-01d0da392e11?w=400&auto=format' },
  { name: 'UAE', flag: '🇦🇪', img: 'https://images.unsplash.com/photo-1556011882-b21d3312ea8d?w=400&auto=format' },
  { name: 'Argentina', flag: '🇦🇷', img: 'https://flagcdn.com/w320/ar.png' },
  { name: 'Portugal', flag: '🇵🇹', img: 'https://flagcdn.com/w320/pt.png' },
  { name: 'Brazil', flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1539053447282-6f32f2bddfed?w=400&auto=format' },
  { name: 'Saudi Arabia', flag: '🇸🇦', img: 'https://flagcdn.com/w320/sa.png' },
];

export function GlobalReach() {
  return (
    <section className="py-16 md:py-24 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="section-label justify-center fade-up">Global Reach</div>
          <h2 className="section-title fade-up text-center">Trusted by Students Worldwide</h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto mt-4 fade-up">
            From Europe to the Americas, the Middle East to Africa — students and professionals
            across the globe rely on STATNOMICS for expert research, data analysis, and
            proposal writing. Our human experts deliver excellence, no matter where you are.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 fade-up">
          {countries.map(c => (
            <div
              key={c.name}
              className="glass rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-2xl drop-shadow-lg">{c.flag}</span>
              </div>
              <div className="px-3 py-2.5">
                <div className="text-white text-xs font-semibold truncate">{c.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* World map image */}
        <div className="mt-12 md:mt-16 fade-up">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] md:aspect-[3/1] relative">
              <img
                src="https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?w=1400&auto=format"
                alt="World map — STATNOMICS serves students globally"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29]/80 via-transparent to-[#0f0c29]/80 flex items-center">
                <div className="px-6 md:px-12 max-w-lg">
                  <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-2">
                    Serving Students <span className="text-primary-500">Everywhere</span>
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    From North America to the Middle East, Europe to South America — our human
                    experts deliver world-class research, analysis, and proposals to clients
                    in over 30 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
