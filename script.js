// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Initialize Vanilla Tilt for 3D hover effect
VanillaTilt.init(document.querySelectorAll(".trek-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

// Floating icons animation
document.querySelectorAll('.floating-icon').forEach((icon, index) => {
  icon.style.left = `${Math.random() * 100}%`;
  icon.style.top = `${Math.random() * 100}%`;
  icon.style.animationDelay = `${index * 0.5}s`;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add dynamic background particles
particlesJS("particles-js", {
  particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: {
          enable: true,
          speed: 6
      }
  }
});