import { useEffect } from 'react';

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const update = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return null;
}
