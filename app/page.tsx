import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Performance from '@/components/Performance';
import Community from '@/components/Community';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Performance />
        <Community />
        <News />
        <CTA />
      </main>
      <Footer />
    </>
  );
}