import { motion } from 'framer-motion';
import './HireMePill.css';

const HireMePill = ({ isLeft }) => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <motion.div 
      className={`hire-me-pill-container ${isLeft ? 'is-left' : ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.6, delay: 2.2 },
        scale: { duration: 0.6, delay: 2.2 }
      }}
      layout // Smooth layout transition for position change
    >
      <button className="hire-me-pill" onClick={handleClick}>
        <div className="status-dot"></div>
        <span className="hire-me-text">Hire Me</span>
      </button>
    </motion.div>
  );
};

export default HireMePill;
