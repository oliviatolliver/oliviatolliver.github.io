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

// POST PAGE ANIMATIONS

// Hero band fades up on load
const postHero = document.querySelector('.post-hero');
if (postHero) {
  setTimeout(() => postHero.classList.add('visible'), 100);
}

// Section headings animate in as you scroll to them
const postHeadings = document.querySelectorAll('.post-content-area .inner h2');
if (postHeadings.length) {
  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  postHeadings.forEach(h => headingObserver.observe(h));
}