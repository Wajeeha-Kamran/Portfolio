import { useState, useEffect, useRef } from 'react';
import './SelectedWork.css';
import { WavyUnderline, BasedInPill } from './Scribbles';

const projects = [
  {
    num: '01',
    title: 'Order Alert UI/UX Design',
    tags: ['Web Design', 'Figma', 'UI/UX'],
    preview: '/previews/order_alert.png',
    modalData: {
      problemStatement: 'A logistics software company needed a dashboard interface that could surface critical "Order Alerts" without overwhelming the user. The primary challenge was information hierarchy: distinguishing between minor status updates and severe delivery delays that require immediate attention.',
      solution: {
        typography: {
          headingFamily: 'Montserrat',
          bodyFamily: 'Satoshi',
          weights: ['Light', 'Regular', 'Medium', 'Bold']
        },
        colors: [
          { hex: '#FFFFFF', name: 'Pure White' },
          { hex: '#5CBC6C', name: 'Primary Green' },
          { hex: '#000000', name: 'Deep Black' },
          { hex: '#2C6D2D', name: 'Dark Green' },
          { hex: '#FB7CC3', name: 'Alert Pink' },
          { hex: '#ECFA2D', name: 'Yellow Glow' },
          { hex: '#2C99FA', name: 'Action Blue' }
        ],
        images: [
          '/orderalert/orderalerthomepage.png',
          '/orderalert/orderalertcasestudypage.png',
          '/orderalert/1.png',
          '/orderalert/2.png',
          '/orderalert/3.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: [0, 1]
        }
      }
    }
  },
  {
    num: '02',
    title: 'Rice Trading Company Mobile App',
    tags: ['App Design', 'Figma', 'UI/UX'],
    preview: '/previews/rice_trading.png',
    modalData: {
      problemStatement: 'The agriculture and rice trading sector often struggles with outdated manual record-keeping and inefficient communication between farmers, traders, and buyers. This leads to discrepancies in inventory, delayed payments, and lack of transparency. The goal was to create a modern, unified mobile platform that streamlines the purchasing, selling, and tracking processes while providing real-time data analytics for business owners to make informed decisions.',
      solution: {
        typography: {
          headingFamily: 'Gupter',
          bodyFamily: 'Montserrat',
          weights: ['Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold', 'Black']
        },
        colors: [
          { hex: '#D2A74E', name: 'Main color' },
          { hex: '#429E9F', name: 'Accent color' },
          { hex: '#FFFFFF', name: 'Clean White' },
          { hex: '#000000', name: 'Pure Black' },
          { hex: '#808080', name: 'Gray' }
        ],
        images: [
          '/riceapp/riceimage1.png',
          '/riceapp/riceimage2.png',
          '/riceapp/riceimage3.png',
          '/riceapp/riceimage4.png',
          '/riceapp/riceimage5.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [0, 2, 3, 4],
          hoverPillIndex: 1
        }
      }
    }
  },
  {
    num: '03',
    title: 'X-Trend UI/UX Design',
    tags: ['Web Design', 'Figma', 'UI/UX'],
    preview: '/previews/x_trend.png',
    modalData: {
      problemStatement: 'X-Trend is a trend-forecasting platform for retail buyers. The objective was to design a visually stimulating yet data-rich interface that allows users to rapidly scan global trends and deep-dive into regional analytics through interactive heatmaps and social sentiment widgets.',
      solution: {
        typography: {
          headingFamily: 'Alexandria',
          bodyFamily: 'Montserrat',
          weights: ['Regular', 'Medium', 'Bold']
        },
        colors: [
          { hex: '#FFFFFF', name: 'Clean White' },
          { hex: '#000000', name: 'Pure Black' },
          { hex: '#00B0B3', name: 'Trend Teal' },
          { hex: '#751679', name: 'Trend Purple' }
        ],
        images: [
          '/xtrend/12.png',
          '/xtrend/13.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: [0, 1]
        }
      }
    }
  },
  {
    num: '04',
    title: 'Educational Website',
    tags: ['React', 'Full-Stack', 'Development'],
    preview: '/previews/educational_website.png',
    modalData: {
      problemStatement: 'An educational institution required a modern Learning Management System (LMS) to facilitate seamless interaction between students and instructors. The challenge was to organize vast amounts of course material into an intuitive, distraction-free environment that encourages self-paced learning.',
      solution: {
        typography: {
          headingFamily: 'Plus Jakarta Sans',
          bodyFamily: 'Inter',
          weights: ['Regular', 'Medium', 'Bold', 'Extra Bold']
        },
        colors: [
          { hex: '#001A4F', name: 'Academic Blue' },
          { hex: '#7C4EE4', name: 'Accent Purple' },
          { hex: '#6366F1', name: 'Innovation Indigo' },
          { hex: '#0F172A', name: 'Slate Ink' },
          { hex: '#FFFFFF', name: 'Pure White' }
        ],
        images: [
          '/educationalwebsite/1.png',
          '/educationalwebsite/2.png',
          '/educationalwebsite/3.png',
          '/educationalwebsite/4.png',
          '/educationalwebsite/5.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: [0, 1, 2, 3, 4]
        }
      }
    }
  },
  {
    num: '05',
    title: 'Multi-Brand Social Media Design',
    tags: ['Brand Design', 'Canva', 'Graphics'],
    preview: '/previews/social_media.png',
    modalData: {
      problemStatement: 'A marketing agency required a set of dynamic social media templates that could be rapidly adapted for different brands while maintaining high visual quality. The core problem was maintaining brand consistency across various platforms (Instagram, LinkedIn, X) with distinct aspect ratios and user behaviors.',
      solution: {
        typography: {
          headingFamily: 'Montserrat',
          bodyFamily: 'Inter',
          weights: ['Light', 'Regular', 'Semi Bold', 'Bold']
        },
        colors: [
          { hex: '#FF5733', name: 'Vibrant Orange' },
          { hex: '#2ECC71', name: 'Success Green' },
          { hex: '#3498DB', name: 'Link Blue' },
          { hex: '#111821', name: 'Matte Black' },
          { hex: '#FFFFFF', name: 'Pure White' }
        ],
        images: [
          '/socialmedia/1.png',
          '/socialmedia/2.png',
          '/socialmedia/3.png',
          '/socialmedia/4.png',
          '/socialmedia/5.png',
          '/socialmedia/6.png',
          '/socialmedia/7.png',
          '/socialmedia/8.png',
          '/socialmedia/9.png',
          '/socialmedia/10.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          hoverPillIndices: []
        }
      }
    }
  },
  {
    num: '06',
    title: 'Corporate Event Design',
    tags: ['Brand Design', 'Presentations', 'Design'],
    preview: '/previews/corporate_event.png',
    modalData: {
      problemStatement: 'For a major corporate summit, the task was to design an immersive physical and digital brand experience. The challenge was to bridge the gap between keynote presentation materials, on-site environmental graphics, and the event companion app to create a unified attendee journey.',
      solution: {
        typography: {
          headingFamily: 'Katumruy Pro',
          bodyFamily: 'Montserrat',
          weights: ['Lato Regular', 'Montserrat Medium', 'Katumruy Bold']
        },
        colors: [
          { hex: '#04095A', name: 'Royal Navy' },
          { hex: '#E8B80C', name: 'Success Gold' },
          { hex: '#FFFFFF', name: 'Pure White' },
          { hex: '#F1F5F9', name: 'Executive Gray' }
        ],
        images: [
          '/corporateevent/11.png',
          '/corporateevent/12.png',
          '/corporateevent/13.png',
          '/corporateevent/14.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: [0, 1, 2, 3]
        }
      }
    }
  },
  {
    num: '07',
    title: 'Presentation Design Showcase',
    tags: ['Pitch Decks', 'Storytelling', 'UI/UX'],
    preview: '/previews/presentation_showcase.png',
    modalData: {
      problemStatement: 'Modern presentations require a fusion of cinematic storytelling and information hierarchy. This showcase features a selection of high-stakes investor pitch decks, corporate brand guidelines, and visual narratives designed to captivate audiences and drive strategic decision-making.',
      solution: {
        typography: {
          headingFamily: 'Montserrat',
          bodyFamily: 'Satoshi',
          weights: ['Semi Bold', 'Bold', 'Black']
        },
        colors: [
          { hex: '#C5A059', name: 'Prestige Gold' },
          { hex: '#EB1A22', name: 'Impact Red' },
          { hex: '#00F2FF', name: 'Cyber Cyan' },
          { hex: '#008C45', name: 'Emerald Green' },
          { hex: '#000000', name: 'Midnight Black' },
          { hex: '#FFFFFF', name: 'Pure White' }
        ],
        images: [
          '/presentationslides/15.png',
          '/presentationslides/16.png',
          '/presentationslides/17.png',
          '/presentationslides/18.png'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: []
        }
      }
    }
  },
  {
    num: '08',
    title: 'Menu Design',
    tags: ['Print Design', 'Branding', 'Culinary'],
    preview: '/previews/menu_design.png',
    modalData: {
      problemStatement: 'Designing for the culinary industry requires a balance of appetizing aesthetics and clear information architecture. This project showcases menu layouts that blend tradition with modern readability.',
      solution: {
        typography: {
          headingFamily: 'Satoshi',
          bodyFamily: 'Satoshi',
          weights: ['Regular', 'Medium', 'Bold']
        },
        colors: [
          { hex: '#B22222', name: 'Hatti Red' },
          { hex: '#000080', name: 'Regal Navy' },
          { hex: '#228B22', name: 'Organic Green' },
          { hex: '#FDF5E6', name: 'Vintage Cream' }
        ],
        images: [
          '/menu images/menu1.jpg',
          '/menu images/image1.jpg',
          '/menu images/img1.jpg',
          '/menu images/img2.jpg',
          '/menu images/img3.jpg',
          '/menu images/img4.jpg'
        ],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [0, 1, 2, 3, 4, 5],
          hoverPillIndices: [0, 1, 2, 3, 4, 5]
        }
      }
    }
  },
  {
    num: '09',
    title: 'Other Projects',
    tags: ['Design Gallery', 'UI/UX', 'Selection'],
    preview: '/previews/other_projects.png',
    modalData: {
      isGrid: true,
      problemStatement: 'Beyond the featured case studies, this section represents a collection of specialized design tasks, brand identity explorations, and software systems developed across various platforms and technologies.',
      gridProjects: [
        {
          name: 'News Website',
          description: 'Developed with React and APIs using component-based architecture and mobile first approach.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#34d399'
        },
        {
          name: 'E-commerce Website',
          description: 'Developed a clone for E-commerce website with React, Express and REST APIs using component-based architecture.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#3b82f6'
        },
        {
          name: 'Image Gallery Website',
          description: 'Created a responsive gallery with HTML, CSS, and JavaScript for dynamic layouts.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#f43f5e'
        },
        {
          name: 'Hospital Management System',
          description: 'Created a C++ patient record management system for healthcare administration.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#0ea5e9'
        },
        {
          name: 'Bookstore Management System',
          description: 'Developed a C++ inventory and book issuance tracking system for retail management.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#f59e0b'
        },
        {
          name: 'Online Recruitment Platform',
          description: 'Developed a Java-based recruitment platform with testing via Azure DevOps.',
          github: 'https://github.com/Wajeeha-Kamran',
          color: '#a855f7'
        }
      ],
      solution: {
        typography: {
          headingFamily: 'Alexandria',
          bodyFamily: 'Montserrat',
          weights: ['Regular', 'Medium', 'Bold']
        },
        colors: [
          { hex: '#581C87', name: 'Royal Purple' },
          { hex: '#18181B', name: 'Zinc 950' },
          { hex: '#FFFFFF', name: 'Clean White' },
          { hex: '#A855F7', name: 'Electric Violet' }
        ],
        images: [],
        ctaLinks: { figma: 'https://www.figma.com/design/5HxLB48IkfJV1ISwEtzis3/Untitled?node-id=117-125&t=rm4Gg0Jx1ebio1mh-1', live: '#' },
        layoutHints: {
          containImages: [],
          hoverPillIndices: []
        }
      }
    }
  },
];


function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const modalVideoRef = useRef(null);
  const carouselMediaRefs = useRef([]);

  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.playbackRate = 0.5;
    }
  }, [isModalOpen]);

  // Handle Carousel Video Playback Optimization & Reliability
  useEffect(() => {
    if (isModalOpen && selectedProjectData) {
      // Pause all other videos to reduce CPU/GPU load
      carouselMediaRefs.current.forEach((el, idx) => {
        if (el && el.tagName === 'VIDEO' && idx !== currentImgIndex) {
          try {
            if (el) el.pause();
          } catch (e) { /* ignore interrupt */ }
        }
      });

      // Strictly ensure the active video plays
      const currentMedia = carouselMediaRefs.current[currentImgIndex];
      if (currentMedia && currentMedia.tagName === 'VIDEO') {
        currentMedia.currentTime = 0;
        const playPromise = currentMedia.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => { /* handle potential abort */ });
        }
      }
    }
  }, [currentImgIndex, isModalOpen, selectedProjectData]);

  const openModal = (project) => {
    if (project.modalData) {
      carouselMediaRefs.current = []; // Clear refs from previous project
      setSelectedProjectData(project);
      setCurrentImgIndex(0);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImg = () => {
    const images = selectedProjectData.modalData.solution.images;
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    const images = selectedProjectData.modalData.solution.images;
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="work-section" id="work">
      <div className="work-inner">
        <div className="work-header">
          <span className="work-label">Selected Work</span>
          <h2 className="work-heading">My Latest<br /><em>Projects</em></h2>
          <WavyUnderline width={240} color="#9b59f5" />
        </div>

        <div className="work-layout">
          <div className="work-list">
            {projects.map((p, i) => (
              <div
                key={p.num}
                className={`work-item ${activeProject === i ? 'active' : ''} ${p.modalData ? 'has-modal' : ''}`}
                onMouseEnter={() => setActiveProject(i)}
                onClick={() => openModal(p)}
                role="button"
                tabIndex={0}
                id={`work-item-${p.num}`}
              >
                <div className="work-item-inner">
                  <span className="work-num">{p.num}</span>
                  <span className="work-title">{p.title}</span>
                  <div className="work-tags">
                    {p.tags.map((tag) => (
                      <span className="work-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="work-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="work-preview">
            {projects.map((p, i) => (
              <div
                key={p.num}
                className={`work-preview-img ${activeProject === i ? 'active' : ''}`}
              >
                <img src={p.preview} alt={p.title} loading="lazy" />
                <div className="work-preview-overlay">
                  <span>{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedProjectData && (
        <div className="project-modal-backdrop" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Ambient Background Video */}
            <video
              ref={modalVideoRef}
              className="modal-bg-video"
              src="/sectionvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="modal-video-overlay"></div>

            <button className="modal-close-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="modal-inner-scroll">
              <div className="modal-header-info">
                <span className="featured-chip">
                  {selectedProjectData.num === '09' ? 'PROJECT COLLECTION' : 'FEATURED PROJECT'}
                </span>
                <h3 className="modal-title">{selectedProjectData.title}</h3>
              </div>

              {selectedProjectData.num === '09' ? (
                <div className="modal-section" style={{ padding: '0 2rem 4rem' }}>
                  <div className="other-projects-grid">
                    {selectedProjectData.modalData.gridProjects.map((proj, idx) => (
                      <div className="other-project-card" key={idx} style={{ '--accent-color': proj.color }}>
                        <h4 className="card-heading">{proj.name}</h4>
                        <p className="card-description">{proj.description}</p>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GITHUB REPOSITORY
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal-section">
                    <h4>Problem Statement</h4>
                    <p>{selectedProjectData.modalData.problemStatement}</p>
                  </div>

                  <div className="modal-section modal-solution">
                    <h4 style={{ padding: '2rem 2rem 0' }}>The Solution</h4>

                    <div className="modal-typo-colors">
                      <h5 className="section-dot-title" style={{ padding: '0 2rem' }}><span className="dot" style={{ backgroundColor: '#a855f7' }}></span> Topography & Colors</h5>
                      <div className="design-system-grid">
                        <div className="modal-section design-sub-box">
                          <div className="sub-title-wrapper">
                            <h6 className="sub-title-center">Colors Used</h6>
                            <WavyUnderline width={120} />
                          </div>
                          <div className="color-palette">
                            {selectedProjectData.modalData.solution.colors.map(c => (
                              <div className="color-item" key={c.hex}>
                                <div className="color-circle" style={{ backgroundColor: c.hex }}>
                                  <span style={{ color: c.hex === '#FFFFFF' || c.hex === '#E8DED2' ? '#000' : '#FFF' }}>{c.hex.replace('#', '')}</span>
                                </div>
                                <span className="color-name">{c.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="modal-section design-sub-box">
                          <div className="sub-title-wrapper">
                            <h6 className="sub-title-center">Fonts Used</h6>
                            <WavyUnderline width={110} />
                          </div>
                          <div className="typo-showcase">
                            <div className="typo-preview">
                              <div className="font-pair">
                                <div className="font-item">
                                  <span className="font-label">Heading:</span>
                                  <span className="typo-name" style={{ fontFamily: selectedProjectData.modalData.solution.typography.headingFamily }}>
                                    {selectedProjectData.modalData.solution.typography.headingFamily}
                                  </span>
                                </div>
                                <div className="font-item">
                                  <span className="font-label">Body:</span>
                                  <span className="typo-name body-font-preview" style={{ fontFamily: selectedProjectData.modalData.solution.typography.bodyFamily }}>
                                    {selectedProjectData.modalData.solution.typography.bodyFamily}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="typo-weights">
                              {selectedProjectData.modalData.solution.typography.weights.map(w => (
                                <div className="weight-item" key={w}>
                                  <span className="weight-family">{selectedProjectData.modalData.solution.typography.bodyFamily}</span>
                                  <span className="weight-name" style={{ fontWeight: w.replace(' ', '').toLowerCase() === 'semibold' ? 600 : w.replace(' ', '').toLowerCase() === 'extrabold' ? 800 : w.replace(' ', '').toLowerCase() === 'black' ? 900 : w.toLowerCase() === 'medium' ? 500 : 400 }}>{w}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-project-images">
                      <h5 className="section-dot-title" style={{ padding: '0 2rem' }}><span className="dot" style={{ backgroundColor: '#a855f7' }}></span> The Design</h5>

                      <div className="carousel-container">
                        <div className="carousel-viewport">
                          {selectedProjectData.modalData.solution.images.map((media, idx) => {
                            const isVideo = media.toLowerCase().endsWith('.mp4');
                            const isContained = selectedProjectData.modalData.solution.layoutHints?.containImages?.includes(idx);

                            return isVideo ? (
                              <video
                                key={selectedProjectData.num + idx}
                                ref={(el) => (carouselMediaRefs.current[idx] = el)}
                                src={media}
                                className={`project-mockup ${currentImgIndex === idx ? 'active' : ''} ${isContained ? 'fit-contain' : ''}`}
                                loop
                                muted
                                playsInline
                                preload={currentImgIndex === idx ? "auto" : "metadata"}
                              />
                            ) : (
                              <img
                                key={selectedProjectData.num + idx}
                                ref={(el) => (carouselMediaRefs.current[idx] = el)}
                                src={media}
                                alt={`${selectedProjectData.title} view ${idx + 1}`}
                                className={`project-mockup ${currentImgIndex === idx ? 'active' : ''} ${isContained ? 'fit-contain' : ''}`}
                                loading="lazy"
                              />
                            );
                          })}

                          {/* Hover Pill logic based on layoutHints */}
                          {(selectedProjectData.modalData.solution.layoutHints?.hoverPillIndices?.includes(currentImgIndex) ||
                            selectedProjectData.modalData.solution.layoutHints?.hoverPillIndex === currentImgIndex) && (
                              <div className="modal-explore-pill">
                                <BasedInPill text="hover to explore" />
                              </div>
                            )}
                        </div>


                        <div className="carousel-controls">
                          <div className="arrow-buttons">
                            <button className="arrow-btn prev" onClick={prevImg}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button className="arrow-btn next" onClick={nextImg}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>

                          <div className="carousel-pagination">
                            {selectedProjectData.modalData.solution.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`pag-dot ${currentImgIndex === idx ? 'active' : ''}`}
                                onClick={() => setCurrentImgIndex(idx)}
                              ></div>
                            ))}
                          </div>

                          <p className="carousel-help-text">Click the arrows or dots to navigate through key screens</p>
                        </div>
                      </div>

                      <div className="modal-action-footer">
                        <div className="modal-cta-buttons">
                          <a href={selectedProjectData.modalData.solution.ctaLinks?.figma || '#'} className="modal-btn outline">VIEW ON FIGMA</a>
                        </div>
                        <p className="modal-design-credit">Designed in Figma · 2024</p>
                      </div>
                    </div>

                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SelectedWork;
