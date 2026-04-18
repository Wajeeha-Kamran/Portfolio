import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleSphere from "./ParticleSphere";
import { WavyUnderline, RoughCircleNumber, AndMoreAnnotation, BracketAnnotation, SketchyCircle } from "./Scribbles";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Product Design",
    description:
      "End-to-end product design — from research and UX flows to polished UI systems and developer-ready handoff.",
    services: [
      "User Research & Strategy",
      "UX Flows & Wireframes",
      "UI Design Systems",
      "Prototyping",
    ],
    tools: ["Figma", "Canva", "Adobe Illustrator"],
  },
  {
    num: "02",
    title: "Front-End Development",
    description:
      "Building responsive, accessible web interfaces with clean code — from pixel-perfect layouts to fully functional React applications.",
    services: [
      "Responsive UI Development",
      "Component-Based Architecture",
      "API Integration",
      "Mobile-First Design",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
  },
  {
    num: "03",
    title: "Mobile App UI Design",
    description:
      "Designing intuitive mobile interfaces with clear user flows — from dashboard layouts to multi-screen workflow mapping in Figma.",
    services: [
      "App UI Design",
      "User Flow Mapping",
      "Dashboard Design",
      "Business Process Layouts",
    ],
    tools: ["Figma", "Canva", "GitHub"],
  },
  {
    num: "04",
    title: "Brand & Social Media Design",
    description:
      "Creating scroll-stopping branded visuals and social media content that aligns with your identity and drives engagement.",
    services: [
      "Social Media Graphics",
      "Branded Visual Assets",
      "Content Planning",
      "Post Scheduling",
    ],
    tools: ["Canva", "Adobe Illustrator", "Figma", "Google Flow"],
  },
  {
    num: "05",
    title: "Corporate & Event Design",
    description:
      "Polished presentation decks, event visuals, and corporate assets designed to make your brand look credible and professional.",
    services: [
      "Presentation Slide Design",
      "Event Branding",
      "Visual Asset Creation",
      "Campaign Design",
    ],
    tools: ["Figma", "Canva", "MS Office"],
  },
  {
    num: "06",
    title: "Strategy & Prototyping",
    description:
      "Turning ideas into testable, interactive prototypes — bridging the gap between concept and a product ready for development.",
    services: [
      "Interactive Prototyping",
      "User Flow Diagrams",
      "Design System Setup",
      "Developer Handoff",
    ],
    tools: ["Figma", "Azure DevOps", "MongoDB", "MySQL", "GitHub"],
  },
];

function Services() {
  const [activeCard, setActiveCard] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  const pinWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    const wrapper = pinWrapperRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!wrapper || !track || !viewport) return;

    // Scroll distance = full track width MINUS the clipped viewport width.
    const getScrollAmount = () => -(track.scrollWidth - viewport.clientWidth);

    let mm = gsap.matchMedia();
    
    // Also track desktop breakpoint for conditionally mounting ParticleSphere
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    mm.add("(min-width: 769px)", () => {
      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "center center",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const cardIndex = Math.min(
              Math.round(self.progress * (services.length - 1)),
              services.length - 1
            );
            setActiveCard(cardIndex);
            if (self.progress > 0 && !isStarted) setIsStarted(true);

            // Dynamic left-fade mask
            const scrolledPx = Math.abs(getScrollAmount()) * self.progress;
            let mask;
            if (scrolledPx > 20) {
              mask = 'linear-gradient(to right, transparent 0px, black 90px, black calc(100% - 60px), rgba(0,0,0,0.4) calc(100% - 20px), transparent 100%)';
            } else {
              mask = 'linear-gradient(to right, black 0%, black calc(100% - 60px), rgba(0,0,0,0.4) calc(100% - 20px), transparent 100%)';
            }
            viewport.style.maskImage = mask;
            viewport.style.webkitMaskImage = mask;
          },
          onEnter: () => setIsStarted(true),
          onLeaveBack: () => setIsStarted(false),
          onStart: () => {
            setIsStarted(true);
            const fade = 'linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 60px), rgba(0,0,0,0.4) calc(100% - 20px), transparent 100%)';
            viewport.style.maskImage = fade;
            viewport.style.webkitMaskImage = fade;
          },
          onReverseComplete: () => {
            const noFade = 'linear-gradient(to right, black 0%, black calc(100% - 60px), rgba(0,0,0,0.4) calc(100% - 20px), transparent 100%)';
            viewport.style.maskImage = noFade;
            viewport.style.webkitMaskImage = noFade;
          },
        },
      });
    });

    return () => {
      mm.revert();
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  return (
    <div ref={pinWrapperRef} className="services-pin-wrapper">
      <section className="services-section" id="services">
        {/* design + code bracket annotation — moved up */}
        <div className="design-code-annotation" style={{ position: "absolute", top: "13rem", left: "18%", zIndex: 10, transform: "rotate(-12deg)" }}>
          <BracketAnnotation
            label="design + code"
            bracketColor="#9b59f5"
            textColor="white"
            secondTextColor="#6c3fc5"
            fontSize={14}
          />
        </div>

        <div className="services-particle-container">
          {isDesktop && (
            <ParticleSphere
              activeCard={isStarted ? (services[activeCard]?.num || "01") : "00"}
            />
          )}
        </div>

        <div className="services-inner">
          {/* Header row */}
          <div className="services-header">
            <div className="services-header-left">
              <span className="services-eyebrow">What I Create</span>
              <h2 className="services-heading">
                Core
                <br />
                Capabilities
              </h2>
              <WavyUnderline width={320} color="#9b59f5" />
            </div>
            <div className="services-header-right">
              <p className="services-desc">
                I bring design and development together to create digital experiences that work.
              </p>
              <div style={{ position: "relative", display: "inline-block" }}>
                <p className="services-scroll-hint">scroll to explore →</p>
                <SketchyCircle color="#a78bfa" width={180} height={42} opacity={0.8} />
              </div>
            </div>
          </div>

          {/* Horizontal scrolling track — overflow:hidden here clips cards as they leave */}
          <div className="services-viewport" ref={viewportRef}>
            <div className="services-track" ref={trackRef}>
              {services.map((s, i) => {
                const isActive = i === activeCard;
                return (
                  <div
                    className={`service-card ${isActive ? "active" : ""}`}
                    key={s.num}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Cover overlay for inactive state */}
                    <div className="service-card-cover">
                      <div className="cover-top">
                        <span className="cover-num">
                          <RoughCircleNumber number={s.num} size={56} circleColor="white" numberColor="white" />
                        </span>
                        <div className="cover-arrow">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 19L19 5M19 5H8M19 5V16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="cover-title">{s.title}</h3>
                    </div>

                    {/* Expanded Card Content */}
                    <div className="service-card-content">
                      <div className="service-card-num">
                        <RoughCircleNumber number={s.num} size={56} circleColor="rgba(0,0,0,0.8)" numberColor="white" />
                      </div>
                      <div className="service-card-top">
                        <h3 className="service-card-title">{s.title}</h3>
                        <div className="service-card-arrow">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                              d="M4 14L14 4M14 4H7M14 4V11"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <p className="service-card-desc">{s.description}</p>

                      <div className="service-card-bottom">
                        <div className="service-col">
                          <span className="service-col-label">Services</span>
                          {s.services.map((item) => (
                            <span key={item} className="service-col-item">{item}</span>
                          ))}
                        </div>
                        <div className="service-col">
                          <span className="service-col-label">Tools</span>
                          {s.tools.map((tool) => (
                            <span key={tool} className="service-col-item">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* "and more" annotation - bottom right of the section */}
          <div className="services-and-more">
            <AndMoreAnnotation color="#c084fc" arrowColor="#d8b4fe" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
