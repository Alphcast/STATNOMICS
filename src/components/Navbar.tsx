import { useState } from 'react';

interface NavbarProps {
  dark: boolean;
  toggle: () => void;
}

const links = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];

export function Navbar({ dark, toggle }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between bg-[#0f0c29]/80 backdrop-blur-xl border-b border-white/10">
      <a href="#home" className="font-syne font-extrabold text-xl bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent tracking-tight">
        <span className="mr-1">✦</span> STATNOMICS
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-white/50 text-sm font-medium no-underline relative pb-1
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                         after:bg-gradient-to-r after:from-primary-500 after:to-accent-500
                         after:transition-all after:duration-300
                         hover:text-white hover:after:w-full"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm
                     hover:border-primary-500/40 hover:text-white transition-all"
          title="Toggle theme"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          )}
          <span className="text-xs">{dark ? 'Light' : 'Dark'}</span>
        </button>

        <a
          href="https://wa.me/2347037994509?text=Hello%20STATNOMICS%2C%20I%20need%20help%20with%20my%20project"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
        >
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 p-1"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0f0c29]/95 backdrop-blur-xl border-b border-white/10 md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                   className="text-white/60 text-lg font-medium no-underline hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="https://wa.me/2347037994509?text=Hello%20STATNOMICS%2C%20I%20need%20help%20with%20my%20project"
                 target="_blank" rel="noreferrer" className="btn-primary w-full justify-center">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
