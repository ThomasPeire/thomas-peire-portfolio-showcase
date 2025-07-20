import About from '@/components/About';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

const Index = () => {
  return (
    <main className="min-h-screen" role="main">
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default Index;
