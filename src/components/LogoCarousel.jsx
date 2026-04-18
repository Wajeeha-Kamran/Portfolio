import { useEffect, useRef } from 'react';
import './LogoCarousel.css';

const logos = [
  'Anthropic', 'Vercel', 'Notion', 'Figma', 'React',
  'MongoDB', 'Azure', 'Github', 'OpenAI',
];

function LogoCarousel() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      posRef.current -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= half) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const doubled = [...logos, ...logos];

  return (
    <section className="logos-section">
      <div className="logos-viewport">
        <div className="logos-track" ref={trackRef}>
          {doubled.map((logo, i) => (
            <div className="logo-item" key={`${logo}-${i}`}>
              <span>{logo}</span>
            </div>
          ))}
        </div>
        <div className="logos-fade logos-fade--left"></div>
        <div className="logos-fade logos-fade--right"></div>
      </div>
    </section>
  );
}

export default LogoCarousel;
