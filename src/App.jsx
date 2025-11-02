import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <CTASection />
      </main>
    </div>
  );
}

export default App;
