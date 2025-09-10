const typedText = document.querySelector(".typed");
const text = "Frontend Developer";
let i = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && i < text.length) {
    typedText.textContent = text.substring(0, i + 1);
    i++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && i > 0) {
    typedText.textContent = text.substring(0, i - 1);
    i--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});


