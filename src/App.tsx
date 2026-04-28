import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundOrbs />
      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-violet/30 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-accent-cyan/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-accent-fuchsia/20 blur-3xl animate-pulse-slow" />
    </div>
  );
}

export default App;
