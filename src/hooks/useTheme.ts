import { useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(true);
  const toggle = () => setDark(d => !d);
  return { dark, toggle };
}
