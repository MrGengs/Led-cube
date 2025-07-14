document.addEventListener('DOMContentLoaded', function() {
  // Animate statistics counter
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      obj.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Intersection Observer for stats counter
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target;
        const target = parseInt(statNumber.getAttribute('data-count'));
        animateValue(statNumber, 0, target, 2000);
        observer.unobserve(statNumber); // Only animate once
      }
    });
  }, { threshold: 0.5 });

  // Observe each stat number
  statNumbers.forEach(statNumber => {
    observer.observe(statNumber);
  });
});
