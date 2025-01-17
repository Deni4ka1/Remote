document.addEventListener('DOMContentLoaded', function () {
  const main__slider = new Swiper('.recent__projects-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        console.log('Swiper ініціалізовано');
      }
    }
  });
});
