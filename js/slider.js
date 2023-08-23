const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);



function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  slides[index].classList.add('active');
  indicators[index].classList.add('active');

  currentSlide = index;
}

function goToSlide(index) {
  if (index === currentSlide) return;
  showSlide(index);
}

function prevSlide() {
  const newIndex = (currentSlide - 1 + 3) % 3;
  showSlide(newIndex);
}

function nextSlide() {
  const newIndex = (currentSlide + 1) % 3;
  showSlide(newIndex);
}
