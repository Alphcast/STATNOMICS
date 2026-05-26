import { useTheme } from './hooks/useTheme';
import { useFadeIn } from './hooks/useFadeIn';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WAFloat } from './components/WAFloat';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const { dark, toggle } = useTheme();
  useFadeIn();

  return (
    <>
      <div id="scroll-progress" />
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <Cursor />
      <ScrollProgress />
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
