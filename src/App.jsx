import { useState, useEffect, useRef } from 'react'
import './App.css'
import GlobalStarfield from './components/GlobalStarfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Skills from './components/Skills'
import LogoCarousel from './components/LogoCarousel'
import Footer from './components/Footer'
import HireMePill from './components/HireMePill'

function App() {
  const globalVideoRef = useRef(null);
  const [isServicesSection, setIsServicesSection] = useState(false);

  useEffect(() => {
    const heroVideo = document.querySelector(".hero-video");
    if (globalVideoRef.current) {
      globalVideoRef.current.playbackRate = 0.5;
      if (heroVideo) {
        globalVideoRef.current.currentTime = heroVideo.currentTime;
      }
    }

    // Intersection Observer for Services section to move HireMe pill
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsServicesSection(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-10% 0px -10% 0px" // Slight buffer
      }
    );

    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => {
      if (servicesSection) observer.unobserve(servicesSection);
    };
  }, []);

  return (
    <div className="app">
      <GlobalStarfield />
      
      {/* Global Fixed Background Video */}
      <video
        ref={globalVideoRef}
        className="global-bg-video"
        src="/sectionvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="global-bg-overlay"></div>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <SelectedWork />
      <Experience />
      <Skills />
      <LogoCarousel />
      <HireMePill isLeft={isServicesSection} />
      <Footer />
    </div>
  )
}

export default App
