document.addEventListener('DOMContentLoaded', function () {
  function checkWindowWidth() {
    const width = window.innerWidth;

    if (width < 1200) {
      console.log('Скрипт не буде виконуватись на екранах менше ніж 1200px');
      return;
    }
    const main__slider = new Swiper('.recent__projects-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 35,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1600: {
          spaceBetween: 80,
        }
      },
      on: {
        init: function () {
          console.log('Swiper ініціалізовано');
        }
      }
    });
  }

  checkWindowWidth();

  window.addEventListener('resize', checkWindowWidth);
});

