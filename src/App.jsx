import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProgramsSection from './components/ProgramsSection.jsx';
import CrewAndStories from './components/CrewAndStories.jsx';
import CTAandContact from './components/CTAandContact.jsx';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CrewAndStories />
      <CTAandContact />
    </div>
  );
}

export default App;
