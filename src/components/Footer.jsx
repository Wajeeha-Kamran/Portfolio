import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import { WavyUnderline } from './Scribbles';
function Footer() {
  const [time, setTime] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    ).then((result) => {
      setNotification({ show: true, type: 'success', message: 'Message sent successfully!' });
      setIsSending(false);
      e.target.reset();
      toggleModal();
    }, (error) => {
      console.error('EmailJS Error:', error);
      setNotification({ show: true, type: 'error', message: `Failed to send: ${error.text || 'Error occurred'}` });
      setIsSending(false);
    });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now) + ' PKT');
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setIsContactModalOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsContactModalOpen(!isContactModalOpen);
    if (!isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <footer className="footer" id="contact">
        {/* CTA Banner */}
        <div className="footer-cta">
          <div className="footer-cta-inner">
            <p className="footer-cta-eyebrow">Got a vision in mind?</p>
            <h2 className="footer-cta-heading">
              I turn bold ideas into<br />
              powerful <em>digital realities</em>
            </h2>
            <button onClick={toggleModal} className="footer-cta-btn" id="footer-cta-email">
              Let's Bring It to Life
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="footer-cta-glow"></div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="footer-brand">
              <span className="footer-logo">WAJEEHA KAMRAN</span>
              <span className="footer-tagline">Building Digital Solutions That Matter</span>
            </div>

            <div className="footer-links-grid">
              <div className="footer-links-col">
                <span className="footer-col-title">Work</span>
                <a href="#work">Projects</a>
                <a href="#work">Case Studies</a>
              </div>
              <div className="footer-links-col">
                <span className="footer-col-title">Services</span>
                <a href="#services">UI/UX Design</a>
                <a href="#services">Branding</a>
                <a href="#services">Product Strategy</a>
              </div>
              <div className="footer-links-col">
                <span className="footer-col-title">Connect</span>
                <a href="https://github.com/Wajeeha-Kamran" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/wajeeha-kamran-0b4605276" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="#contact" onClick={toggleModal}>Email Me</a>
              </div>
            </div>

            <div className="footer-location">
              <span className="footer-clock">{time}</span>
              <span className="footer-city">Islamabad, Pakistan</span>
            </div>
          </div>

          <div className="footer-bar">
            <span>© {new Date().getFullYear()} Wajeeha Kamran. All rights reserved.</span>
          </div>
        </div>

        {/* Contact Modal */}
        {isContactModalOpen && (
          <div className="contact-modal-backdrop" onClick={toggleModal}>
            <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="contact-modal-close" onClick={toggleModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="contact-modal-header">
                <span className="contact-eyebrow">Get in Touch</span>
                <h2 className="contact-title">Let's Create Together</h2>
                <div className="contact-underline-wrapper">
                  <WavyUnderline width={220} color="#c084fc" />
                </div>
              </div>

              <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                <div className="form-group recipient-group">
                  <label htmlFor="recipient">To:</label>
                  <div className="recipient-input-wrapper">
                    <input type="email" id="recipient" value="wajeeha.kh20@gmail.com" readOnly />
                    <span className="lock-icon">🔒</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="user_name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email Address</label>
                    <input type="email" id="email" name="user_email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="3" placeholder="Tell me about your project..." required></textarea>
                </div>

                <button type="submit" className="footer-cta-btn form-submit-btn" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send Message'}
                  {!isSending && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </footer>

      {/* Notification Modal */}
      {notification.show && (
        <div className="notification-modal-backdrop" onClick={() => setNotification({ show: false, type: '', message: '' })}>
          <div className="notification-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={`notification-icon ${notification.type}`}>
              {notification.type === 'success' ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
            </div>
            <h3 className="notification-message">{notification.message}</h3>
            <button className="notification-btn" onClick={() => setNotification({ show: false, type: '', message: '' })}>
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
