import { testimonials } from '../data/testimonials';

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10">
        <div className="text-center">
          <div className="section-label justify-center fade-up">Client Stories</div>
          <h2 className="section-title fade-up text-center">Loved by Students & Professionals</h2>
        </div>
      </div>

      <div className="overflow-hidden py-4">
        <div className="flex gap-5 animate-scroll-x hover:pause" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex-shrink-0 backdrop-blur-xl" style={{ width: 320 }}>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white/10"
                  loading="lazy"
                />
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover\\:pause:hover { animation-play-state: paused !important; }
        .animate-scroll-x {
          animation: scrollX 40s linear infinite;
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
