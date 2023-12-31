import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
