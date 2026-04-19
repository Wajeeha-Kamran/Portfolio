import { useEffect, useRef } from 'react'
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

function App() {
  const globalVideoRef = useRef(null);

  useEffect(() => {
    const heroVideo = document.querySelector(".hero-video");
    if (globalVideoRef.current) {
      globalVideoRef.current.playbackRate = 0.5;
      if (heroVideo) {
        globalVideoRef.current.currentTime = heroVideo.currentTime;
      }
    }
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
      <Footer />
    </div>
  )
}

export default App
