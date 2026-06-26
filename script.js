document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle-btn');
  const menuClose = document.getElementById('menu-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (menuClose) menuClose.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Contact Modal
  const modal = document.getElementById('contact-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const ctaPrimary = document.getElementById('cta-primary-btn');
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success-msg');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      // Reset form and message states after closing animation completes
      setTimeout(() => {
        if (contactForm) contactForm.classList.remove('hidden');
        if (successMsg) successMsg.classList.remove('active');
        if (contactForm) contactForm.reset();
      }, 300);
    }
  };

  if (ctaPrimary) ctaPrimary.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Form Submission
  if (contactForm) {
  // Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const data = new FormData(contactForm);
      await fetch('https://formspree.io/f/xwvdowyq', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      contactForm.classList.add('hidden');
      if (successMsg) successMsg.classList.add('active');
    });
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions, .problem-highlight, .problem-description, .card, .portfolio-section-title, .portfolio-item, .cta-title, .btn-whatsapp');
  
  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  // Run on load and scroll
  window.addEventListener('scroll', revealOnScroll);
  setTimeout(revealOnScroll, 100); // Small delay to trigger on initial paint

  // Smooth scroll active state or smooth action for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
