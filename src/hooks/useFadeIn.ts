import { useEffect } from 'react';

export function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
