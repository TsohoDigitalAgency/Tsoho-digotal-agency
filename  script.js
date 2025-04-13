// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting Tsoho Digital Agency! We will get back to you soon.');
  this.reset();
});


---