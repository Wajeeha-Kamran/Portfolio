import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'UI/UX & DESIGN',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Canva', level: 85 },
      { name: 'Adobe Illustrator', level: 65 }
    ]
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 78 }
    ]
  },
  {
    title: 'DATABASES & TOOLS',
    skills: [
      { name: 'MySQL', level: 70 },
      { name: 'MongoDB Atlas', level: 65 },
      { name: 'Microsoft Azure', level: 55 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-inner">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">EXPERTISE</span>
          <h2 className="skills-title">Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              className="skills-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="category-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bg">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
