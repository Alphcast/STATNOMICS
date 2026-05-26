const quickLinks = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];
const socials = [
  { icon: '𝕏', href: 'https://twitter.com' },
  { icon: 'in', href: 'https://linkedin.com' },
  { icon: '📘', href: 'https://facebook.com' },
  { icon: '📸', href: 'https://instagram.com' },
];

const footerServices = [
  'Research Writing', 'Data Analysis', 'Assignment Help',
  'Proposal Writing', 'Business Analysis', 'Virtual Assistance',
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0c29]/80 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#home" className="font-syne font-extrabold text-xl bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent tracking-tight mb-4 inline-block">
              <span className="mr-1">✦</span> STATNOMICS
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-3">
              Empowering students, researchers, and businesses with expert-driven research,
              data analysis, and analytical solutions.
            </p>
            <div className="flex gap-2 mt-4">
              {socials.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                   className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                              text-white/50 text-sm no-underline hover:border-primary-500/40 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                     className="text-white/40 text-sm no-underline hover:text-primary-500 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-4">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerServices.map(s => (
                <li key={s}>
                  <a href="#services"
                     className="text-white/40 text-sm no-underline hover:text-primary-500 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-bold text-white text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/2347037994509" target="_blank" rel="noreferrer"
                 className="text-white/40 text-sm no-underline hover:text-primary-500 transition-colors flex items-center gap-2">
                <span>💬</span> +234 703 799 4509
              </a>
              <a href="mailto:hello@statnomics.com"
                 className="text-white/40 text-sm no-underline hover:text-primary-500 transition-colors flex items-center gap-2">
                <span>📧</span> hello@statnomics.com
              </a>
              <span className="text-white/40 text-sm flex items-center gap-2">
                <span>🕐</span> 24/7 Support Available
              </span>
              <a href="https://wa.me/2347037994509?text=Hello%20STATNOMICS%2C%20I%20need%20help%20with%20my%20project"
                 target="_blank" rel="noreferrer" className="btn-wa mt-2 py-2 px-4 text-xs w-fit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2026 STATNOMICS. All rights reserved.</p>
          <p className="text-white/30 text-xs">Built with ✦ by the STATNOMICS Team</p>
        </div>
      </div>
    </footer>
  );
}
