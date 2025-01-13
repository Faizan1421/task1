const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let scrollAmount = 0;

const slideWidth = slider.children[0].offsetWidth + 16; // Include gap (space-x-4 is 16px)

next.addEventListener('click', () => {
  if (scrollAmount < slider.scrollWidth - slider.offsetWidth) {
    scrollAmount += slideWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

prev.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= slideWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

// Reset position on window resize
window.addEventListener('resize', () => {
  slider.style.transform = 'translateX(0)';
  scrollAmount = 0;
});
