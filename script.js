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

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
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

// Services Section
class ServicesManager {
  constructor() {
    this.serviceCards = document.querySelectorAll('.service-card');
    this.serviceDetailOverlay = document.getElementById('serviceDetailOverlay');
    this.serviceDetailContent = document.querySelector('.service-detail-content');
    this.closeButton = document.querySelector('.close-service-detail');
    
    // Service data
    this.services = {
      'custom-led': {
        title: 'Custom LED Cube',
        description: 'Kami menyediakan solusi LED Cube yang sepenuhnya dapat disesuaikan sesuai kebutuhan spesifik proyek Anda. Mulai dari ukuran, resolusi, hingga fitur khusus, tim ahli kami akan membantu mewujudkan visi kreatif Anda menjadi kenyataan.',
        features: [
          'Desain dan pengembangan LED Cube custom',
          'Berbagai ukuran dan resolusi tersedia',
          'Integrasi dengan sistem kontrol yang mudah',
          'Dukungan teknis dan pemeliharaan',
          'Solusi hemat energi dengan kualitas visual terbaik'
        ]
      },
      'workshop': {
        title: 'Workshop & Pelatihan',
        description: 'Program pelatihan komprehensif kami dirancang untuk semua tingkat keahlian, dari pemula hingga profesional. Pelajari dasar-dasar teknologi LED Cube, pemrograman, hingga teknik animasi lanjutan dari para ahli di bidangnya.',
        features: [
          'Pelatihan untuk semua tingkat keahlian',
          'Materi praktis dan langsung aplikatif',
          'Fasilitas dan peralatan lengkap',
          'Sertifikat kelulusan',
          'Dukungan pasca-pelatihan'
        ]
      },
      'maintenance': {
        title: 'Maintenance & Perbaikan',
        description: 'Layanan perawatan dan perbaikan profesional untuk semua produk LED Cube. Tim teknis kami yang berpengalaman siap memberikan solusi cepat dan tepat untuk memastikan perangkat Anda berfungsi optimal.',
        features: [
          'Diagnosis dan perbaikan kerusakan',
          'Pembersihan dan perawatan berkala',
          'Upgrade perangkat lunak',
          'Penggantian komponen jika diperlukan',
          'Layanan panggilan darurat'
        ]
      },
      'consulting': {
        title: 'Konsultasi Teknologi',
        description: 'Manfaatkan pengetahuan dan pengalaman tim ahli kami untuk memberikan solusi teknologi terbaik untuk kebutuhan proyek Anda. Dari perencanaan hingga implementasi, kami siap membantu mewujudkan visi Anda.',
        features: [
          'Konsultasi teknis gratis',
          'Analisis kebutuhan proyek',
          'Rekomendasi solusi terbaik',
          'Rancangan sistem terintegrasi',
          'Dukungan implementasi proyek'
        ]
      }
    };
    
    this.init();
  }
  
  init() {
    // Add click event to service cards
    this.serviceCards.forEach(card => {
      // Only add click event to the learn more link, not the entire card
      const learnMoreLink = card.querySelector('.service-learn-more');
      
      if (learnMoreLink) {
        learnMoreLink.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const serviceType = card.getAttribute('data-service');
          this.openServiceDetail(serviceType);
        });
      }
      
      // Add hover effect
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      });
    });
    
    // Close button event
    this.closeButton.addEventListener('click', () => this.closeServiceDetail());
    
    // Close when clicking outside content
    this.serviceDetailOverlay.addEventListener('click', (e) => {
      if (e.target === this.serviceDetailOverlay) {
        this.closeServiceDetail();
      }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.serviceDetailOverlay.classList.contains('active')) {
        this.closeServiceDetail();
      }
    });
  }
  
  openServiceDetail(serviceType) {
    const service = this.services[serviceType];
    if (!service) return;
    
    // Update content
    this.serviceDetailContent.innerHTML = `
      <h2>${service.title}</h2>
      <p>${service.description}</p>
      
      <div class="service-features">
        <h3>Keunggulan Layanan:</h3>
        <ul>
          ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="service-cta">
        <a href="https://wa.link/fplqmd" target="_blank" class="whatsapp-button">
          Konsultasi Sekarang via WhatsApp
        </a>
      </div>
    `;
    
    // Show overlay
    this.serviceDetailOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
      this.serviceDetailOverlay.style.opacity = '1';
      this.serviceDetailOverlay.style.visibility = 'visible';
    }, 10);
  }
  
  closeServiceDetail() {
    // Hide overlay with animation
    this.serviceDetailOverlay.style.opacity = '0';
    this.serviceDetailOverlay.style.visibility = 'hidden';
    
    // Remove active class after animation completes
    setTimeout(() => {
      this.serviceDetailOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }, 300);
  }
}

// Blog Manager Class
class BlogManager {
  constructor() {
    this.articles = [
      // News Article 1
      {
        id: 1,
        title: 'Volux Hadir di Tech Expo 2024',
        excerpt: 'Volux kembali mencuri perhatian di ajang tahunan Tech Expo 2024 dengan menampilkan inovasi terbaru di bidang teknologi visual.',
        category: 'news',
        date: '11 Juli 2024',
        image: 'assets/news/tech-expo-2024.png',
        content: `
          <p>Volux kembali mencuri perhatian di ajang tahunan Tech Expo 2024 dengan menampilkan inovasi terbaru di bidang teknologi visual. Pengunjung berkesempatan untuk mengalami langsung keajaiban LED Cube generasi terbaru kami.</p>
          <p>Di acara yang berlangsung selama 3 hari ini, tim Volux memamerkan berbagai inovasi terbaru dalam teknologi tampilan LED. Salah satu yang menjadi sorotan adalah LED Cube dengan resolusi 4K yang mampu menampilkan konten 3D tanpa memerlukan kacamata khusus.</p>
          <p>Tidak hanya itu, pengunjung juga bisa berinteraksi langsung dengan produk-produk Volux melalui berbagai demo interaktif. "Kami ingin menunjukkan bahwa teknologi LED tidak hanya tentang tampilan, tapi juga tentang pengalaman yang imersif," ujar salah satu perwakilan Volux.</p>
          <p>Acara ini dihadiri oleh lebih dari 10.000 pengunjung dari berbagai kalangan, mulai dari profesional industri, akademisi, hingga pecinta teknologi.</p>
        `,
        related: [2, 3]
      },
      
      // News Article 2
      {
        id: 2,
        title: 'Juara Kompetisi Inovasi Digital Nasional',
        excerpt: 'Bangga mengumumkan bahwa tim riset Volux berhasil meraih juara pertama dalam Kompetisi Inovasi Digital Nasional 2024.',
        category: 'news',
        date: '5 Juli 2024',
        image: 'assets/news/innovation-competition.jpg',
        content: `
          <p>Bangga mengumumkan bahwa tim riset Volux berhasil meraih juara pertama dalam Kompetisi Inovasi Digital Nasional 2024. Penghargaan ini diberikan atas terobosan teknologi LED Cube yang mengintegrasikan AI untuk pengalaman visual yang lebih interaktif.</p>
          <p>Tim yang terdiri dari 5 orang engineer Volux ini mengembangkan sistem yang memungkinkan LED Cube merespons gerakan pengguna secara real-time. Teknologi ini menggunakan kamera pendeteksi gerakan dan kecerdasan buatan untuk menciptakan pengalaman interaktif yang belum pernah ada sebelumnya.</p>
          <p>"Kami sangat bangga dengan pencapaian tim kami. Ini adalah bukti bahwa inovasi tanpa henti kami diakui di tingkat nasional," kata Manajer Riset Volux. "Teknologi ini akan segera kami implementasikan dalam produk-produk komersial Volux di kuartal berikutnya."</p>
          <p>Kompetisi yang diikuti oleh lebih dari 200 tim dari seluruh Indonesia ini menilai aspek inovasi, kegunaan, dan potensi dampak dari setiap proyek yang dilombakan.</p>
        `,
        related: [1, 3]
      },
      
      // News Article 3
      {
        id: 3,
        title: 'Workshop Teknologi LED Cube untuk Pelajar',
        excerpt: 'Sebagai bagian dari program CSR, Volux menyelenggarakan workshop teknologi LED Cube untuk 100 pelajar SMA se-Jabodetabek.',
        category: 'news',
        date: '28 Juni 2024',
        image: 'assets/news/workshop.png',
        content: `
          <p>Sebagai bagian dari program CSR, Volux menyelenggarakan workshop teknologi LED Cube untuk 100 pelajar SMA se-Jabodetabek. Acara ini bertujuan untuk memperkenalkan dunia teknologi visual dan menginspirasi generasi muda untuk berinovasi.</p>
          <p>Selama workshop sehari penuh, para peserta diajak untuk memahami dasar-dasar teknologi LED, prinsip kerja LED Cube, dan bahkan berkesempatan untuk merakit miniatur LED Cube sederhana. "Kami ingin menunjukkan bahwa teknologi tinggi seperti ini bisa dipelajari dan dikuasai oleh siapapun, termasuk pelajar SMA," ujar salah satu mentor workshop.</p>
          <p>Acara yang berlangsung di Gedung Pusat Inovasi Volux ini juga menghadirkan demo spektakuler dari berbagai produk LED Cube terbaru. Para peserta terlihat antusias mengikuti setiap sesi, terutama saat mereka bisa mencoba langsung teknologi augmented reality yang terintegrasi dengan LED Cube.</p>
          <p>"Ini adalah komitmen kami untuk turut serta dalam mencerdaskan kehidupan bangsa, khususnya di bidang teknologi digital dan kreatif," tambah perwakilan Volux. "Kami berharap dari acara ini akan lahir talenta-talenta baru di bidang teknologi visual."</p>
        `,
        related: [1, 2]
      },
      {
        id: 3,
        title: 'Workshop Teknologi LED: Dari Dasar Hingga Mahir',
        excerpt: 'Ikuti workshop eksklusif kami untuk mempelajari seluk beluk teknologi LED Cube dari para ahli.',
        category: 'tutorial',
        date: '5 Juli 2025',
        image: 'assets/blog/led-workshop.jpg',
        content: `
          <p>Workshop teknologi LED kami dirancang untuk semua tingkat keahlian, dari pemula hingga profesional. Anda akan mempelajari:</p>
          <ul>
            <li>Dasar-dasar teknologi LED dan prinsip kerjanya</li>
            <li>Cara memprogram animasi kustom</li>
            <li>Teknik troubleshooting yang efektif</li>
            <li>Integrasi dengan sistem lainnya</li>
          </ul>
          <p>Dibimbing langsung oleh para ahli dengan pengalaman bertahun-tahun di industri ini.</p>
        `,
        related: [1, 5]
      },
      {
        id: 4,
        title: '5 Aplikasi Kreatif LED Cube di Berbagai Industri',
        excerpt: 'Temukan bagaimana berbagai industri memanfaatkan LED Cube untuk menciptakan pengalaman visual yang menakjubkan.',
        category: 'news',
        date: '1 Juli 2025',
        image: 'assets/blog/led-applications.jpg',
        content: `
          <p>LED Cube tidak hanya sekadar pajangan visual, tetapi juga memiliki berbagai aplikasi praktis di berbagai industri:</p>
          <h3>1. Hiburan dan Event</h3>
          <p>Digunakan untuk konser musik, pameran seni, dan acara-acara besar untuk menciptakan pengalaman visual yang memukau.</p>
          
          <h3>2. Pendidikan</h3>
          <p>Sebagai media pembelajaran interaktif untuk memvisualisasikan konsep-konsep kompleks.</p>
          
          <h3>3. Retail dan Pemasaran</h3>
          <p>Menarik perhatian pengunjung dengan tampilan produk yang kreatif dan interaktif.</p>
        `,
        related: [2, 5]
      },
      {
        id: 5,
        title: 'Masa Depan Teknologi Display: Apa yang Bisa Kita Harapkan?',
        excerpt: 'Eksplorasi tren dan inovasi terbaru dalam teknologi display dan bagaimana ini akan mempengaruhi industri.',
        category: 'technology',
        date: '25 Juni 2025',
        image: 'assets/blog/future-display.jpg',
        content: `
          <p>Teknologi display terus berkembang dengan pesat, dan masa depan terlihat semakin cerah dengan berbagai inovasi yang sedang dikembangkan:</p>
          
          <h3>1. Fleksibilitas yang Lebih Baik</h3>
          <p>Layar yang dapat ditekuk dan digulung akan menjadi lebih umum, membuka kemungkinan desain yang lebih kreatif.</p>
          
          <h3>2. Resolusi yang Lebih Tinggi</h3>
          <p>Dengan teknologi micro-LED, kita dapat mengharapkan layar dengan kepadatan piksel yang jauh lebih tinggi.</p>
          
          <h3>3. Efisiensi Energi</h3>
          <p>Teknologi OLED dan micro-LED yang lebih efisien akan mengurangi konsumsi daya secara signifikan.</p>
        `,
        related: [1, 4]
      }
    ];
    
    this.currentCategory = 'all';
    this.currentSearch = '';
    this.visibleCount = 4;
    
    this.init();
  }
  
  init() {
    // DOM Elements
    this.articlesContainer = document.getElementById('articlesContainer');
    this.searchInput = document.getElementById('blogSearch');
    this.loadMoreBtn = document.getElementById('loadMoreBtn');
    this.modal = document.getElementById('articleModal');
    this.modalContent = document.querySelector('.modal-body');
    
    // Event Listeners
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.filterByCategory(e));
    });
    
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
    
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
      searchButton.addEventListener('click', () => this.handleSearch({ target: this.searchInput }));
    }
    
    if (this.loadMoreBtn) {
      this.loadMoreBtn.addEventListener('click', () => this.loadMore());
    }
    
    document.querySelector('.close-modal').addEventListener('click', () => this.closeModal());
    
    // Close modal when clicking outside content
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
    
    // Initial render
    this.renderArticles();
  }
  
  filterByCategory(e) {
    const category = e.target.getAttribute('data-category');
    this.currentCategory = category;
    this.visibleCount = 4; // Reset visible count
    
    // Update active state of buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });
    
    this.renderArticles();
  }
  
  handleSearch(e) {
    this.currentSearch = e.target.value.toLowerCase();
    this.visibleCount = 4; // Reset visible count
    this.renderArticles();
  }
  
  loadMore() {
    this.visibleCount += 4;
    this.renderArticles();
  }
  
  getFilteredArticles() {
    return this.articles.filter(article => {
      const matchesCategory = this.currentCategory === 'all' || article.category === this.currentCategory;
      const matchesSearch = article.title.toLowerCase().includes(this.currentSearch) || 
                          article.excerpt.toLowerCase().includes(this.currentSearch);
      
      return matchesCategory && matchesSearch;
    });
  }
  
  renderArticles() {
    const filteredArticles = this.getFilteredArticles();
    const articlesToShow = filteredArticles.slice(0, this.visibleCount);
    
    this.articlesContainer.innerHTML = articlesToShow.map(article => `
      <article class="article-card">
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <div class="article-content">
          <span class="article-category">${this.getCategoryName(article.category)}</span>
          <h3 class="article-title">${article.title}</h3>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <span class="article-date">
              <i class="far fa-calendar-alt"></i>
              ${article.date}
            </span>
            <a href="#" class="read-more" data-id="${article.id}">Baca Selengkapnya</a>
          </div>
        </div>
      </article>
    `).join('');
    
    // Update load more button
    if (this.loadMoreBtn) {
      this.loadMoreBtn.style.display = this.visibleCount >= filteredArticles.length ? 'none' : 'inline-block';
    }
    
    // Add event listeners to read more buttons
    document.querySelectorAll('.read-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const articleId = parseInt(btn.getAttribute('data-id'));
        this.openArticle(articleId);
      });
    });
  }
  
  getCategoryName(category) {
    const categories = {
      'technology': 'Teknologi',
      'tutorial': 'Tutorial',
      'tips': 'Tips & Trik',
      'news': 'Berita'
    };
    return categories[category] || category;
  }
  
  openArticle(id) {
    const article = this.articles.find(a => a.id === id);
    if (!article) return;
    
    // Get related articles
    const relatedArticles = article.related.map(relId => 
      this.articles.find(a => a.id === relId)
    ).filter(Boolean);
    
    // Format date
    const formattedDate = new Date(article.date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Create modal content
    this.modalContent.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="modal-article-image">
      <div class="modal-article-content">
        <span class="article-category">${this.getCategoryName(article.category)}</span>
        <h1>${article.title}</h1>
        <div class="modal-article-meta">
          <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
          <span><i class="far fa-folder"></i> ${this.getCategoryName(article.category)}</span>
        </div>
        <div class="modal-article-body">
          ${article.content}
        </div>
        
        <div class="article-share">
          <h4 class="share-title">Bagikan Artikel</h4>
          <div class="share-buttons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="share-button facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}" target="_blank" class="share-button twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.excerpt)}" target="_blank" class="share-button linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + window.location.href)}" target="_blank" class="share-button whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        ${relatedArticles.length > 0 ? `
          <div class="related-articles">
            <h3 class="related-title">Artikel Terkait</h3>
            <div class="related-grid">
              ${relatedArticles.map(relArticle => `
                <div class="related-article" onclick="blogManager.openArticle(${relArticle.id})">
                  <img src="${relArticle.image}" alt="${relArticle.title}">
                  <h4>${relArticle.title}</h4>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    
    // Add styles for related articles
    const style = document.createElement('style');
    style.textContent = `
      .related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      
      .related-article {
        cursor: pointer;
        transition: transform 0.2s;
      }
      
      .related-article:hover {
        transform: translateY(-3px);
      }
      
      .related-article img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 0.75rem;
      }
      
      .related-article h4 {
        font-size: 1rem;
        color: #334155;
        margin: 0;
        line-height: 1.4;
      }
      
      @media (max-width: 768px) {
        .related-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
    this.modalContent.appendChild(style);
    
    // Show modal
    this.modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Add smooth scroll to top of modal
    this.modal.scrollTop = 0;
  }
  
  closeModal() {
    this.modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Initialize services and blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.services')) {
    const servicesManager = new ServicesManager();
  }
  
  if (document.getElementById('blog')) {
    window.blogManager = new BlogManager();
  }
});

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
        <div class="lightbox-header">
          <h2>${title}</h2>
          <div class="lightbox-meta">${meta}</div>
          <button class="news-lightbox-close" aria-label="Close">&times;</button>
        </div>
        
        <div class="lightbox-body">
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
      
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Update lightbox content
      lightbox.innerHTML = content;
      
      // Show lightbox
      lightbox.style.display = 'flex';
      
      // Prevent body from scrolling but maintain scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      
      // Store scroll position for later restoration
      lightbox._scrollY = scrollY;
      
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
      
      // Restore body scrolling and positioning
      const scrollY = lightbox._scrollY || 0;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollY);
      
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
