// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header background - MODIFIED untuk selalu biru
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(59, 130, 246, 0.98)"; // Biru dengan opacity
  } else {
    header.style.background = "rgba(59, 130, 246, 0.95)"; // Biru dengan opacity
  }
});

// Navbar scroll effect - MODIFIED untuk selalu biru
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    header.classList.add("scrolled");
    header.style.background = "rgba(59, 130, 246, 0.98)"; // Biru saat scrolled
  } else {
    header.classList.remove("scrolled");
    header.style.background = "rgba(59, 130, 246, 0.95)"; // Biru default
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add active class to navigation links based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const headerHeight = document.querySelector("header").offsetHeight;

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Update active nav link on scroll
window.addEventListener("scroll", updateActiveNavLink);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards for animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".feature-card, .activity-card, .product-card"
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const cubes = document.querySelectorAll(".cube");
  cubes.forEach((cube, index) => {
    const speed = 0.3 + index * 0.1;
    cube.style.transform = `translateY(${scrolled * speed}px) rotate(${
      scrolled * 0.5
    }deg)`;
  });
});

// Add loading animation
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }
});

// Add hover effect for product cards
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) rotateX(5deg)";
    this.style.boxShadow = "0 15px 50px rgba(59, 130, 246, 0.3)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) rotateX(0deg)";
    this.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
  });
});

// Add click effect for CTA button
document.querySelector(".cta-button")?.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";

  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100, onComplete = () => {}) {
  let i = 0;
  element.textContent = "";
  element.classList.add('typing');

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove('typing');
      element.classList.add('complete');
      onComplete();
    }
  }

  type();
}

// Initialize typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  // Toggle mobile menu
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Toggle body scroll when menu is open
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking on a navigation link
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu when window is resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  const heroTitle = document.querySelector(".hero-content h1");
  const voluxText = document.querySelector(".volux-text");
  const ledText = document.querySelector(".led-text");
  const cubeText = document.querySelector(".cube-text");
  
  if (heroTitle && voluxText && ledText && cubeText) {
    // First type "Volux"
    typeWriter(voluxText, 'Volux ', 100, () => {
      // Then type "LED" with the special effect
      typeWriter(ledText, 'LED', 150, () => {
        // After LED is typed, add the RGB animation class
        ledText.classList.add('rgb-animation');
        
        // Then type " Cube" after the LED text
        typeWriter(cubeText, ' Cube', 100);
      });
    });
  }
});

// News Section Modal with Enhanced Functionality
class NewsModal {
  constructor() {
    this.modal = document.getElementById('newsModal');
    this.modalContent = this.modal.querySelector('.news-modal-body');
    this.closeButton = this.modal.querySelector('.news-modal-close');
    this.articles = document.querySelectorAll('.news-article');
    this.isAnimating = false;
    this.animationDuration = 300; // ms - should match CSS transition duration
    
    this.init();
  }
  
  init() {
    // Find all read more buttons
    this.readMoreButtons = document.querySelectorAll('.news-article .news-read-more');
    
    // Add click event listeners to read more buttons
    this.readMoreButtons.forEach(button => {
      // Make parent article focusable for better accessibility
      const article = button.closest('.news-article');
      article.setAttribute('tabindex', '0');
      article.setAttribute('role', 'article');
      
      // Handle click on read more link
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.isAnimating) return;
        
        const title = article.querySelector('.news-title').textContent;
        const date = article.querySelector('.news-date');
        const image = article.querySelector('.news-image');
        let fullContent = button.getAttribute('data-full-content') || '';
        
        // Hapus komentar dari konten
        fullContent = fullContent.replace(/<!--[\s\S]*?-->/g, '');
        
        // Hapus tag <p> kosong yang mungkin muncul setelah menghapus komentar
        fullContent = fullContent.replace(/<p>\s*<\/p>/g, '');
        
        // Pastikan konten tidak kosong
        if (!fullContent.trim()) {
          fullContent = '<p>Tidak ada konten tambahan yang tersedia.</p>';
        }
        
        this.openModal({
          title,
          date: date ? date.outerHTML : '',
          image: image.outerHTML,
          content: fullContent
        });
      });
      
      // Handle keyboard navigation on article
      article.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !this.isAnimating) {
          e.preventDefault();
          button.click();
        }
      });
    });
    
    // Close modal when clicking close button
    this.closeButton.addEventListener('click', () => this.closeModal());
    
    // Close modal when clicking outside content
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal && !this.isAnimating) {
        this.closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('show') && !this.isAnimating) {
        this.closeModal();
      }
    });
    
    // Prevent background scrolling when modal is open
    this.modal.addEventListener('wheel', this.preventScroll.bind(this), { passive: false });
    this.modal.addEventListener('touchmove', this.preventScroll.bind(this), { passive: false });
    this.modal.addEventListener('touchstart', (e) => {
      this.lastTouchY = e.touches[0].clientY;
    }, { passive: true });
    
    // Prevent modal from being dragged down to dismiss on mobile
    let touchStartY = 0;
    this.modal.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    this.modal.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const modalBody = this.modal.querySelector('.news-modal-body');
      const isAtTop = modalBody.scrollTop === 0;
      const isAtBottom = Math.ceil(modalBody.scrollTop + modalBody.clientHeight) >= modalBody.scrollHeight - 1;
      
      // If user is trying to scroll up at the top or down at the bottom of the modal
      if ((isAtTop && touchY > touchStartY) || (isAtBottom && touchY < touchStartY)) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  
  preventScroll(e) {
    if (this.classList.contains('show')) {
      // Only prevent default if we're at the top or bottom of the modal
      const { scrollTop, scrollHeight, clientHeight } = this.querySelector('.news-modal-body');
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      
      // Get the touch or wheel delta
      const delta = e.deltaY || (e.touches && (e.touches[0].clientY - this.lastTouchY));
      
      // Save touch position for next move
      if (e.touches) {
        this.lastTouchY = e.touches[0].clientY;
      }
      
      // Prevent scrolling past boundaries
      if ((isAtTop && delta > 0) || (isAtBottom && delta < 0)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  }
  
  openModal({ title, date, image, content }) {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    // Store the currently focused element to return focus when modal closes
    this.lastFocusedElement = document.activeElement;
    
    // Set modal content
    this.modalContent.innerHTML = `
      <div class="news-modal-header">
        <h2 class="news-modal-title">${title}</h2>
        ${date ? `<div class="news-modal-date">${date}</div>` : ''}
      </div>
      <div class="news-modal-image-container">
        ${image}
      </div>
      <div class="news-modal-text">
        ${content}
      </div>
    `;
    
    // Show modal with animation
    this.modal.classList.add('show');
    document.body.classList.add('modal-open');
    
    // Prevent background scrolling
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.documentElement.style.overflow = 'hidden';
    
    // Set focus to the close button for better keyboard navigation
    setTimeout(() => {
      this.closeButton.focus();
      this.isAnimating = false;
    }, 20);
  }
  
  closeModal() {
    if (this.isAnimating || !this.modal.classList.contains('show')) return;
    this.isAnimating = true;
    
    // Remove show class to trigger closing animation
    this.modal.classList.remove('show');
    
    // After animation completes, clean up
    setTimeout(() => {
      // Reset body styles
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('modal-open');
      
      // Return focus to the element that opened the modal
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      }
      
      this.isAnimating = false;
    }, 300); // Match this with CSS animation duration
  }
  
  getScrollbarWidth() {
    // Create a temporary div to measure scrollbar width
    const scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);
    
    // Calculate scrollbar width
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    
    // Clean up
    document.body.removeChild(scrollDiv);
    
    return scrollbarWidth;
  }
}

// Initialize the news modal
const newsModal = new NewsModal();

// Simple Lightbox Implementation
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded, initializing lightbox...');
  
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.id = 'newsLightbox';
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: none;
    justify-content: center;
    align-items: flex-start;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
    overflow-y: auto;
    padding: 2rem 0;
    pointer-events: none;
    visibility: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  `;
  
  // Add style to make sure content is visible
  const style = document.createElement('style');
  style.textContent = `
    /* Base Lightbox Styles */
    #newsLightbox {
      transition: opacity 0.3s ease, visibility 0.3s ease !important;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      z-index: 10000;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    #newsLightbox.show {
      opacity: 1 !important;
      pointer-events: auto !important;
      visibility: visible !important;
    }
    
    /* Lightbox Content Container */
    #newsLightbox .news-lightbox-content {
      background: #ffffff;
      padding: 0; /* Hapus padding utama */
      border-radius: 12px;
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      margin: 2rem auto;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      pointer-events: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      transform: translateZ(0);
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
    }
    
    /* Kontainer dalam yang akan memiliki padding */
    #newsLightbox .lightbox-inner {
      padding: 2.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    /* Lightbox Header */
    #newsLightbox .lightbox-header {
      padding: 0 3rem 1.5rem 0;
      margin: 0 0 1.5rem;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
    }
    
    #newsLightbox .lightbox-header h2 {
      color: #1a1a1a;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3;
      margin: 0 0 1rem;
      padding: 0;
      word-break: break-word;
    }
    
    #newsLightbox .lightbox-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin: 1.25rem 0 0;
      font-size: 0.9rem;
      color: #666;
    }
    
    #newsLightbox .lightbox-meta span {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #f8f9fa;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      line-height: 1.4;
      color: #555;
    }
    
    #newsLightbox .lightbox-meta i {
      font-size: 1em;
      opacity: 0.8;
    }
    /* Lightbox Image */
    #newsLightbox .lightbox-image {
      margin: 0 0 2rem;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      max-width: 100%;
      position: relative;
      background: #f8f9fa;
    }
    
    #newsLightbox .lightbox-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
      max-width: 100%;
      border-radius: 6px;
    }
    
    #newsLightbox .lightbox-image:hover img {
      transform: scale(1.02);
    }
    
    /* Lightbox Content */
    #newsLightbox .lightbox-content {
      line-height: 1.8;
      color: #444;
      font-size: 1.05rem;
      padding: 1rem 0;
      flex: 1;
      /* Menambahkan jarak tambahan di bagian atas dan bawah konten */
      margin: 0.5rem 0;
    }
    
    #newsLightbox .lightbox-content p {
      margin: 0 0 1.75rem;
      font-size: 1.05em;
      line-height: 1.8;
      color: #333;
    }
    
    #newsLightbox .lightbox-content p:last-child {
      margin-bottom: 0;
    }
    
    #newsLightbox .lightbox-content img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
      margin: 1.5rem 0;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    /* Close Button */
    #newsLightbox .news-lightbox-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.05);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: #666;
      font-size: 1.5rem;
      line-height: 1;
      z-index: 10;
      padding: 0;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
    }
    
    #newsLightbox .news-lightbox-close:hover,
    #newsLightbox .news-lightbox-close:focus {
      background: #3b82f6;
      color: white;
      transform: rotate(90deg);
      outline: none;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    /* Responsive Styles - Tablet */
    @media (max-width: 992px) {
      #newsLightbox .lightbox-inner {
        padding: 2rem 1.75rem;
      }
      
      #newsLightbox .lightbox-header h2 {
        font-size: 1.6rem;
        line-height: 1.3;
        margin-bottom: 0.75rem;
      }
      
      #newsLightbox .lightbox-meta {
        gap: 0.6rem;
        margin-top: 1rem;
      }
      
      #newsLightbox .lightbox-meta span {
        padding: 0.35rem 0.9rem;
        font-size: 0.82rem;
      }
      
      #newsLightbox .lightbox-content {
        font-size: 1.03rem;
        line-height: 1.75;
      }
      
      #newsLightbox .lightbox-content p {
        margin-bottom: 1.5rem;
      }
    }
    
    /* Responsive Styles - Mobile */
    @media (max-width: 768px) {
      #newsLightbox .news-lightbox-content {
        width: 95%;
        margin: 1rem auto;
        max-height: 90vh;
        border-radius: 10px;
      }
      
      #newsLightbox .lightbox-inner {
        padding: 1.5rem 1.25rem;
      }
      
      #newsLightbox .lightbox-header {
        padding: 0 2.2rem 1rem 0;
        margin-bottom: 1rem;
      }
      
      #newsLightbox .lightbox-header h2 {
        font-size: 1.4rem;
        line-height: 1.3;
        margin-bottom: 0.5rem;
      }
      
      #newsLightbox .lightbox-meta {
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.75rem;
      }
      
      #newsLightbox .lightbox-meta span {
        padding: 0.3rem 0.8rem;
        font-size: 0.8rem;
      }
      
      #newsLightbox .lightbox-content {
        font-size: 1rem;
        line-height: 1.7;
        padding: 0.5rem 0;
      }
      
      #newsLightbox .lightbox-content p {
        margin-bottom: 1.25rem;
      }
      
      #newsLightbox .lightbox-image {
        margin: 0.5rem 0 1.5rem;
      }
      
      #newsLightbox .news-lightbox-close {
        top: 0.6rem;
        right: 0.6rem;
        width: 34px;
        height: 34px;
        font-size: 1.4rem;
      }
    }
    
    /* Extra Small Devices */
    @media (max-width: 480px) {
      #newsLightbox .news-lightbox-content {
        width: 97%;
        margin: 0.5rem auto;
        border-radius: 8px;
      }
      
      #newsLightbox .lightbox-inner {
        padding: 1.25rem 1rem;
      }
      
      #newsLightbox .lightbox-header {
        padding: 0 2rem 0.75rem 0;
        margin-bottom: 0.75rem;
      }
      
      #newsLightbox .lightbox-header h2 {
        font-size: 1.3rem;
        line-height: 1.3;
        margin-bottom: 0.5rem;
      }
      
      #newsLightbox .lightbox-meta {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 0.5rem;
      }
      
      #newsLightbox .lightbox-meta span {
        padding: 0.25rem 0.7rem;
        font-size: 0.78rem;
        border-radius: 15px;
      }
      
      #newsLightbox .lightbox-content {
        font-size: 0.95rem;
        line-height: 1.7;
        padding: 0.25rem 0;
      }
      
      #newsLightbox .lightbox-content p {
        margin-bottom: 1.1rem;
      }
      
      #newsLightbox .news-lightbox-close {
        top: 0.5rem;
        right: 0.5rem;
        width: 32px;
        height: 32px;
        font-size: 1.3rem;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(lightbox);
  console.log('Lightbox element created with inline styles');

  // Function to create lightbox content
  function createLightboxContent(link) {
    console.log('Creating lightbox content from link:', link);
    
    // Cari elemen artikel terdekat
    const article = link.closest('.news-article');
    
    if (!article) {
      console.error('Article not found. Parent elements:', {
        parentElement: link.parentElement,
        parentParent: link.parentElement?.parentElement
      });
      return `
        <div style="
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          margin: 2rem auto;
          color: #333;
          pointer-events: auto;
        ">
          <h2>Error: Article Content Not Found</h2>
          <p>Could not find the article content. Please check the console for more details.</p>
        </div>`;
    }
    
    console.log('Found article element:', article);
    
    // Ambil data dari elemen artikel
    const title = article.querySelector('.news-title')?.textContent || 'No Title';
    const meta = article.querySelector('.news-meta')?.innerHTML || '';
    const fullContent = link.getAttribute('data-full-content') || 'No content available';
    const image = article.querySelector('.news-image-container')?.innerHTML || '';
    
    // Debug: Tampilkan data yang akan digunakan
    console.log('Article data:', { 
      title, 
      hasMeta: !!meta, 
      hasFullContent: !!fullContent, 
      hasImage: !!image 
    });
    
    // Buat konten lightbox dengan style inline
    const lightboxContent = `
      <div class="news-lightbox-content">
        <div class="lightbox-inner">
          <button class="news-lightbox-close" aria-label="Close">&times;</button>
          
          <div class="lightbox-header">
            <h2>${title}</h2>
            <div class="lightbox-meta">${meta}</div>
          </div>
          
          ${image ? `
          <div class="lightbox-image">
            ${image}
          </div>` : ''}
          
          <div class="lightbox-content">
            ${fullContent}
          </div>
        </div>
      </div>
    `;
    
    console.log('Generated lightbox HTML');
    return lightboxContent;
  }

  // Function to open lightbox
  function openLightbox(event) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Opening lightbox...');
    
    try {
      // Create lightbox content
      const content = createLightboxContent(this);
      console.log('Lightbox content generated');
      
      // Update lightbox content
      lightbox.innerHTML = content;
      
      // Show lightbox
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Force reflow to ensure the element is rendered before adding the class
      void lightbox.offsetHeight;
      
      // Add show class after a small delay to trigger the transition
      setTimeout(() => {
        lightbox.classList.add('show');
        console.log('Lightbox shown with content');
      }, 10);
      
      // Add close button event
      const closeBtn = lightbox.querySelector('.news-lightbox-close');
      if (closeBtn) {
        console.log('Close button found, adding event listener');
        closeBtn.addEventListener('click', closeLightbox);
      } else {
        console.error('Close button not found in lightbox');
      }
      
      // Add click outside to close
      lightbox.addEventListener('click', function lightboxClickHandler(e) {
        if (e.target === lightbox) {
          closeLightbox(e);
        }
      });
      
      // Add escape key to close
      const keydownHandler = function(e) {
        if (e.key === 'Escape') {
          closeLightbox(e);
        }
      };
      document.addEventListener('keydown', keydownHandler);
      
      // Store the handler for cleanup
      lightbox._keydownHandler = keydownHandler;
      
      // Debug: Log lightbox state
      console.log('Lightbox state:', {
        display: lightbox.style.display,
        opacity: window.getComputedStyle(lightbox).opacity,
        visibility: window.getComputedStyle(lightbox).visibility,
        zIndex: window.getComputedStyle(lightbox).zIndex
      });
      
    } catch (error) {
      console.error('Error opening lightbox:', error);
      // Show error message in lightbox
      lightbox.innerHTML = `
        <div style="
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          margin: 2rem auto;
          color: #d32f2f;
          pointer-events: auto;
        ">
          <h2>Error Loading Content</h2>
          <p>There was an error loading the content. Please try again later.</p>
          <p><small>${error.message}</small></p>
          <button onclick="document.getElementById('newsLightbox').style.display='none';" style="
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          ">Close</button>
        </div>`;
      lightbox.style.display = 'flex';
      lightbox.classList.add('show');
    }
  }
  
  // Close lightbox function
  function closeLightbox(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    console.log('Closing lightbox...');
    
    // Remove show class to trigger fade out
    lightbox.classList.remove('show');
    
    // Wait for transition to complete
    setTimeout(() => {
      lightbox.style.display = 'none';
      lightbox.innerHTML = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      
      // Remove event listeners
      if (lightbox._keydownHandler) {
        document.removeEventListener('keydown', lightbox._keydownHandler);
        delete lightbox._keydownHandler;
      }
      
      console.log('Lightbox closed and cleaned up');
    }, 300);
  }
  
  // Add click events to all read more links
  document.querySelectorAll('.news-read-more').forEach(link => {
    console.log('Adding click event to link:', link);
    
    // Remove any existing event listeners first
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    
    // Add new event listener
    newLink.addEventListener('click', function(e) {
      console.log('Read more clicked!');
      openLightbox.call(this, e);
    });
    
      // Simpan referensi ke elemen artikel sebelum mengganti link dengan tombol
    const article = newLink.closest('.news-article');
    
    // Buat wrapper untuk tombol yang akan mempertahankan referensi ke artikel
    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.display = 'inline-block';
    
    // Buat tombol baru
    const button = document.createElement('button');
    button.innerHTML = 'Baca Selengkapnya <span style="margin-left: 5px; transition: transform 0.2s;">→</span>';
    button.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 0.6rem 1.2rem;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;
    
    // Hover effect
    button.onmouseover = function() {
      this.style.backgroundColor = '#2563eb';
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
      this.querySelector('span').style.transform = 'translateX(3px)';
    };
    
    button.onmouseout = function() {
      this.style.backgroundColor = '#3b82f6';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      this.querySelector('span').style.transform = 'translateX(0)';
    };
    
    // Click effect
    button.onmousedown = function() {
      this.style.transform = 'translateY(1px)';
    };
    
    button.onmouseup = function() {
      this.style.transform = 'translateY(-2px)';
    };
    
    // Tambahkan event listener yang menggunakan referensi ke artikel
    button.addEventListener('click', function(e) {
      console.log('Read more button clicked!');
      
      // Buat event object baru
      const newEvent = {
        ...e,
        preventDefault: () => e.preventDefault(),
        stopPropagation: () => e.stopPropagation()
      };
      
      // Panggil openLightbox dengan konteks yang benar
      openLightbox.call({
        closest: () => article,
        getAttribute: (attr) => newLink.getAttribute(attr)
      }, newEvent);
    });
    
    // Tambahkan tombol ke wrapper
    buttonWrapper.appendChild(button);
    
    // Ganti link dengan wrapper tombol
    newLink.parentNode.replaceChild(buttonWrapper, newLink);
  });
  
  // Close when clicking outside content
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox(e);
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox(e);
    }
  });
  
  console.log('Lightbox initialization complete');
});

// Mobile menu toggle implementation is now at the top of the file
