import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hero.css';
import SocialLinks from './SocialLinks';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video speed
    }
  }, []);

  return (
    <div className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        src="/herofinalv.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="hero-video-overlay"></div>
      {/* Texture overlay */}

      <div className="hero-designer-wrapper">
        {/* Generative Selection Bounding Box */}
        <div className="gen-box">
          <div className="anchor top-left"></div>
          <div className="anchor top-center"></div>
          <div className="anchor top-right"></div>
          <div className="anchor bottom-left"></div>
          <div className="anchor bottom-center"></div>
          <div className="anchor bottom-right"></div>

          <div className="gen-box-eyebrow">
            UI/UX <span>Designer</span>
          </div>

            <motion.div 
              className="social-links-title-group"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h1 className="gen-huge-title">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                  Portf
                </motion.span>
                <motion.div 
                  className="gen-orb-holder"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 60 }}
                >
                  <img src="/handimagefff.png" alt="Glowing sphere hands" className="gen-hands-img" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
                >
                  lio
                </motion.span>
              </h1>
            </motion.div>

          <div className="gen-signature">
            Wajeeha Kamran
          </div>

          <img src="/arrowandex.png" alt="" className="gen-box-arrow" />
        </div>

        {/* Glowing glassmorphism social links */}
        <SocialLinks />
      </div>
    </div>
  );
}

export default Hero;
