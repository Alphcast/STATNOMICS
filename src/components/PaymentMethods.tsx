const payments = [
  {
    name: 'Bank Transfer',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
    desc: 'Direct bank transfer to our verified account.',
  },
  {
    name: 'Cryptocurrency',
    img: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&q=80',
    desc: 'Bitcoin, Ethereum & USDT accepted.',
  },
  {
    name: 'Payoneer',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
    desc: 'Send & receive via Payoneer wallet.',
  },
];

export function PaymentMethods() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="section-label">Payment Methods</div>
          <h2 className="section-title">How We Collect Payments</h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto mt-4">
            Choose the option that works best for you — secure, fast, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {payments.map(p => (
            <div key={p.name}
                 className="glass rounded-2xl overflow-hidden hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-300 fade-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name}
                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-syne font-bold text-white text-lg mb-1">{p.name}</h3>
                <p className="text-white/40 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
