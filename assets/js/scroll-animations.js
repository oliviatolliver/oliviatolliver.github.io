const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right').forEach(el => {
  observer.observe(el);
});