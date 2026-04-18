import { useEffect, useRef, memo } from 'react';
import './GlobalStarfield.css';

const GlobalStarfield = memo(function GlobalStarfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    const particles = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 150 : 350; // Heavily optimized for stable framerates
    
    // Mouse parallax state
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isTrackingMouse = false;
    
    const handleMouseMove = (e) => {
      if (!isTrackingMouse) {
        requestAnimationFrame(() => {
          targetMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
          targetMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
          isTrackingMouse = false;
        });
        isTrackingMouse = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let resizeTimer;
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 100);
    };
    window.addEventListener('resize', resize, { passive: true });
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ffffff', '#c084fc', '#9b59f5', '#6c3fc5', '#2d1b69'];

    const createParticle = () => {
      // Create a nebula-like cluster on the right side
      const isNebula = Math.random() > 0.6;
      let startX, startY;
      if (isNebula) {
        startX = canvas.width * 0.6 + Math.random() * (canvas.width * 0.4);
        startY = Math.random() * canvas.height;
      } else {
        startX = Math.random() * canvas.width;
        startY = Math.random() * canvas.height;
      }

      return {
        x: startX, 
        y: startY,
        z: Math.random() * 2 + 0.2, // Depth/Size
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        
        update() {
          this.x += this.vx;
          this.y += this.vy;
          
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        },
        
        draw() {
          // Parallax effect
          const px = this.x - mouseX * this.z;
          const py = this.y - mouseY * this.z;
          
          ctx.beginPath();
          ctx.arc(px, py, this.z, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      };
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      // Clear the canvas on each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smoothly interpolate mouse movement
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // Draw subtle nebula ambient glow effect on the right
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.8 - mouseX * 2, canvas.height * 0.5 - mouseY * 2, 0,
        canvas.width * 0.8 - mouseX * 2, canvas.height * 0.5 - mouseY * 2, canvas.width * 0.5
      );
      gradient.addColorStop(0, 'rgba(108, 63, 197, 0.08)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="global-starfield"></canvas>;
});

export default GlobalStarfield;