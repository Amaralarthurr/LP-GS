
  const carousel = document.getElementById('carousel');
  const images = document.querySelectorAll('#carousel img');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop para o início
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1; // Loop para o final
    }
    updateCarousel();
  });

  // Atualizar carrossel em redimensionamento para ajustar largura corretamente
  window.addEventListener('resize', updateCarousel);
