import React from "react";
import { motion } from "framer-motion";
import { HelloRoughCircle, YrsExpAnnotation, BasedInPill } from "./Scribbles";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column: Image Container */}
          <motion.div
            className="about-image-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-frame">
              {/* Star Crystals - Top Left Section */}
              <div className="about-sparkle-star star-top-1">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>
              <div className="about-sparkle-star star-top-2">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>
              <div className="about-sparkle-star star-top-3">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>

              <img
                src="/myimage.png"
                alt="Wajeeha Kamran Portrait"
                className="about-image-main"
              />

              {/* Location pill below photo */}
              <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
                <BasedInPill location="islamabad" />
              </div>

              {/* Star Crystals - Bottom Right Section */}
              <div className="about-sparkle-star star-bottom-1">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>
              <div className="about-sparkle-star star-bottom-2">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>
              <div className="about-sparkle-star star-bottom-3">
                <svg viewBox="0 0 100 100" fill="white">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="about-text-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-top-right-decoration">
              <span className="handwritten-text">About me</span>
              <img
                src="/arrow.png"
                alt="Decorative Arrow"
                className="about-arrow-image"
              />
            </div>

            {/* Hello! heading with rough circle behind */}
            <div className="hello-heading-wrapper" style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
              <HelloRoughCircle size={280} />
              <h1 className="about-hero-title" style={{ position: "relative", zIndex: 1, margin: 0 }}>Hello!</h1>
            </div>
            <h2 className="about-sub-title">I am Wajeeha Kamran.</h2>

            <div className="about-body-text" style={{ position: "relative" }}>
              <p>
                I’m a Computer Science student and versatile designer focused on blending technical functionality with aesthetic excellence. With advanced skills in Figma and frontend development, I create intuitive user interfaces and impactful brand identities that elevate the user experience.
              </p>
              <div style={{ position: "relative" }}>
                <p>
                  Whether developing responsive web applications or managing creative social media campaigns, I deliver detail-oriented solutions aligned with brand goals. I am constantly leveraging AI-assisted tools and modern trends to push the boundaries of digital storytelling and design.
                </p>

                {/* Yrs exp badge positioned near the end of the text */}
                <div className="mobile-hide-scribble" style={{ position: "absolute", top: "130px", right: "-100px" }}>
                  <YrsExpAnnotation years="2+" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
