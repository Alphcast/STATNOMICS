import { Counter } from './Counter';

const stats = [
  { target: 500, suffix: '+', label: 'Projects Completed', icon: '📁' },
  { target: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
  { target: 24, suffix: '/7', label: 'Support Available', icon: '🕐' },
  { target: 100, suffix: '%', label: 'On Agreement', icon: '🤝' },
];

export function Stats() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ target, suffix, label, icon }) => (
            <div key={label}
                 className="glass p-5 md:p-6 rounded-2xl text-center hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300 fade-up">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="stat-num">
                <Counter target={target} suffix={suffix} />
              </div>
              <div className="text-white/50 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
