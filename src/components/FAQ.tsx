import { useState } from 'react';
import { faqs } from '../data/faqs';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <div className="section-label justify-center fade-up">Got Questions?</div>
          <h2 className="section-title fade-up text-center">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i}
                 className="border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-colors duration-300 fade-up"
                 style={{ transitionDelay: `${i * 0.06}s` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 md:px-6 py-4 bg-white/5 flex items-center justify-between text-left text-white/80 text-sm font-medium
                           hover:bg-white/[0.08] transition-colors"
              >
                <span className="pr-4">{f.q}</span>
                <span className="text-primary-500 text-xl flex-shrink-0 transition-transform duration-300"
                      style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 bg-white/5"
                style={{ maxHeight: open === i ? 300 : 0 }}
              >
                <p className="px-5 md:px-6 pb-4 text-white/50 text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
