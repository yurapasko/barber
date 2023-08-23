const customSliderWrapper = document.querySelector('.custom-slider-wrapper');
const customSlides = document.querySelectorAll('.custom-slide');
const customIndicator = document.querySelector('.custom-indicator');

let customCurrentIndex = 0;
let customStartX = 0;
let customIsDragging = false;

function customGoToSlide(index) {
  if (index < 0) {
    customCurrentIndex = customSlides.length - 1;
  } else if (index >= customSlides.length) {
    customCurrentIndex = 0;
  }

  customSliderWrapper.style.transform = `translateX(-${customCurrentIndex * 100}%)`;

  customUpdateIndicator();
}

function customUpdateIndicator() {
  const customIndicators = Array.from(customIndicator.children);

  customIndicators.forEach((indicatorItem, index) => {
    if (index === customCurrentIndex) {
      indicatorItem.style.backgroundColor = '#FFFFFF';
    } else {
      indicatorItem.style.backgroundColor = '#888';
    }
  });
}

function customHandleTouchStart(event) {
  if (!customIsDragging) {
    customIsDragging = true;
    customStartX = event.touches[0].clientX;
  }
}

function customHandleTouchMove(event) {
  if (customIsDragging) {
    const currentX = event.touches[0].clientX;
    const diffX = currentX - customStartX;
    const percentageMoved = (diffX / window.innerWidth) * 100;

    customSliderWrapper.style.transform = `translateX(calc(-${customCurrentIndex * 100}% + ${percentageMoved}px))`;
  }
}

function customHandleTouchEnd() {
  if (customIsDragging) {
    customIsDragging = false;
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - customStartX;
    const threshold = window.innerWidth / 4;

    if (diffX > threshold) {
      customCurrentIndex--;
    } else if (diffX < -threshold) {
      customCurrentIndex++;
    }

    customGoToSlide(customCurrentIndex);
  }
}

// Додайте події для тач-свайпів
customSliderWrapper.addEventListener('touchstart', customHandleTouchStart);
customSliderWrapper.addEventListener('touchmove', customHandleTouchMove);
customSliderWrapper.addEventListener('touchend', customHandleTouchEnd);

// Ініціалізація
customSlides.forEach(() => {
  const indicatorItem = document.createElement('div');
  indicatorItem.classList.add('custom-indicator-item');
  customIndicator.appendChild(indicatorItem);
});

customUpdateIndicator();
