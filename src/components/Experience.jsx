import { motion } from 'framer-motion';
import './Experience.css';
import { BasedInPill, CurlyUnderline, ScribbleArrow, SketchyCircle, WavyUnderline } from './Scribbles';

const experiences = [
  {
    year: '2022 – PRESENT',
    role: 'Freelance Projects',
    company: 'Rice Trading App UI & Restaurant Menu Design',
    details: [
      'Rice Trading App UI: Designed a Figma-based mobile UI to streamline sales workflows and business data clarity.',
      'Menu Design: Crafted a high-end, brand-aligned menu layout to improve readability and customer experience.'
    ]
  },
  {
    year: '2024',
    role: 'Front-End Development Intern',
    company: 'CodeAlpha',
    details: [
      'Built and optimized responsive UIs using HTML, CSS, and JavaScript.',
      'Designed portfolio, image gallery, and real-world web projects.',
      'Gained hands-on front-end experience in production environments.'
    ]
  },
  {
    year: '2025',
    role: 'UI/UX Intern',
    company: 'Digi Infinite',
    details: [
      'Designed scalable Figma UI layouts for Order Alert, X-Trend, and TMP.',
      'Created social graphics & branded visuals for 6+ brands including Al Maktoum Holdings and Blinds & Curtains Dubai.',
      'Designed corporate slides for Ibn-e-Yousaf, Diplomacy Sky Media, and Dubai 54th National Day.',
      'Managed full social media campaign for 7 Figure Agency Masterclass.'
    ]
  }
];

const certifications = [
  'WordPress Course — IEEE CS PIEAS (2022)',
  'Build With AI Workshop — GDSC (2024)',
  'Front-End Development Bootcamp — GDSC (2024)',
  'Meta Front-End Developer Professional Certificate — Coursera (2024–Present)',
  'Social Media Management & Design Certificate — 7 Figure Agency Masterclass, Lahore'
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="journey-wrapper">
            <span className="exp-eyebrow">My Journey</span>
            <CurlyUnderline width={100} color="#c084fc" />
          </div>
          <div className="exp-heading-wrapper">
            <span className="corner-bracket top-left"></span>
            <span className="corner-bracket top-right"></span>
            <span className="corner-bracket bottom-left"></span>
            <span className="corner-bracket bottom-right"></span>

            <div className="heading-annotation-group">
              <span className="heading-annotation">The Journey So Far</span>
              <ScribbleArrow className="arrow-heading" color="white" />
            </div>

            <div className="exp-sparkle-star star-left">
              <svg viewBox="0 0 100 100" fill="white">
                <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
              </svg>
            </div>
            <h2 className="exp-heading">Experience &amp;<br />Certifications</h2>
            <div className="exp-sparkle-star star-right">
              <svg viewBox="0 0 100 100" fill="white">
                <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="exp-content">
          <div className="exp-timeline-container">
            {/* Annotation for Freelance - pointing to the first item */}
            <div className="freelance-annotation">
              <img src="/arrow.png" alt="" className="annotation-arrow" />
              <div className="annotation-text-group">
                <svg className="sparkle-mini" viewBox="0 0 100 100">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="#c084fc" />
                </svg>
                <div className="text-with-underline">
                  <span className="annotation-text">My First Clients</span>
                  <CurlyUnderline width={150} color="#c084fc" />
                </div>
              </div>
            </div>

            <div className="timeline-line"></div>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              >
                {/* Progression marker between Freelance and CodeAlpha */}
                {i === 1 && (
                  <div className="growing-annotation">
                    <ScribbleArrow className="arrow-growing" color="white" />
                    <div className="text-with-underline-mini">
                      <span>growing</span>
                      <WavyUnderline width={80} color="#c084fc" />
                    </div>
                  </div>
                )}

                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>

                  <div className="role-wrapper">
                    {exp.company === 'Digi Infinite' && (
                      <BasedInPill
                        text="latest role ★"
                        fontSize="12px"
                        padding="6px 16px"
                        style={{ background: 'rgba(192, 132, 252, 0.2)', pointerEvents: 'auto' }}
                        whileHover={{ scale: 1.1 }}
                      />
                    )}
                    <h3 className="timeline-role">{exp.role}</h3>
                  </div>

                  <h4 className="timeline-company">{exp.company}</h4>
                  <ul className="timeline-details">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>
                        <span className="detail-dash">—</span>
                        <span className="detail-text">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.company === 'Digi Infinite' && (
                    <div className="learned-note">
                      <ScribbleArrow className="arrow-learned" color="white" />
                      <div className="text-with-underline-mini">
                        <span>learned so much</span>
                        <WavyUnderline width={130} color="#c084fc" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="edu-pill-wrapper">
          <BasedInPill
            text="BSc Computer Science — Quaid-e-Azam University, Islamabad (2022–Present)"
            fontSize="16px"
            padding="14px 28px"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          <div className="ongoing-annotation">
            <img src="/arrow.png" alt="" className="annotation-arrow ongoing-arrow" />
            <div className="text-with-underline ongoing-text-wrapper">
              <span className="corner-bracket top-left mini"></span>
              <span className="corner-bracket top-right mini"></span>
              <span className="corner-bracket bottom-left mini"></span>
              <span className="corner-bracket bottom-right mini"></span>
              <div className="ongoing-text-group">
                <svg className="sparkle-mini ongoing-sparkle" viewBox="0 0 100 100">
                  <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="#c084fc" />
                </svg>
                <span className="ongoing-annotation-text">ongoing</span>
              </div>
              <WavyUnderline width={100} color="#c084fc" />
            </div>
          </div>
        </div>

        <motion.div
          className="cert-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="cert-heading-wrapper">
            <h3 className="cert-heading">Certifications</h3>
            <WavyUnderline width={180} color="#c084fc" />
          </div>

          {/* Top-right "5 & counting" annotation */}
          <div className="cert-count-annotation">
            <div className="cert-count-group">
              <SketchyCircle className="cert-count-circle" color="#c084fc" />
              <svg className="sparkle-mini" viewBox="0 0 100 100">
                <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="#c084fc" />
              </svg>
              <span className="cert-count-text">5 & counting</span>
            </div>
            <CurlyUnderline width={100} color="rgba(192, 132, 252, 0.4)" />
          </div>
          <div className="cert-list">
            {certifications.map((cert, i) => {
              const isMeta = cert.includes('Meta');
              return (
                <div key={i} className="cert-card-wrapper">
                  {isMeta && (
                    <div className="big-one-annotation">
                      <svg className="sparkle-mini" viewBox="0 0 100 100">
                        <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="#c084fc" />
                      </svg>
                      <span>big one!</span>
                    </div>
                  )}

                  <motion.div
                    className={`cert-card ${isMeta ? 'meta-highlight' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <svg className="cert-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className="cert-text">{cert}</span>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom-right "more coming" annotation */}
          <div className="more-coming-annotation">
            <div className="more-coming-group">
              <span>more coming</span>
              <svg className="more-coming-arrow" width="50" height="24" viewBox="0 0 80 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                {/* Longer, slightly slanted hand-drawn style straight arrow */}
                <path d="M5,15 L70,8" />
                <path d="M62,2 L72,8 L60,16" />
              </svg>
            </div>
            <CurlyUnderline width={120} color="rgba(192, 132, 252, 0.4)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;