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

// Mobile menu toggle (untuk future enhancement)
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
