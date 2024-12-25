const burgerBtn = document.querySelector('.header__burger');
const sideMenu = document.querySelector('.header__container-items');
const closeMenu = document.querySelector('.menu__close');

const body = document.body;  // Отримуємо body для блокування прокручування

// Відкриваємо меню при натисканні на burgerBtn
burgerBtn.addEventListener('click', () => {
  // Якщо меню вже відкрите, то закриваємо його
  if (sideMenu.classList.contains('menu--open')) {
    sideMenu.classList.remove('menu--open');
    sideMenu.classList.add('menu--close');
    body.classList.remove('no-scroll');  // Дозволяємо прокручувати після закриття меню
  } else {
    // Якщо меню закрите, то відкриваємо його
    sideMenu.classList.add('menu--open');
    sideMenu.classList.remove('menu--close');
    body.classList.add('no-scroll');  // Блокуємо прокручування при відкритті меню
  }
});

// Закриваємо меню при натисканні на closeMenu
closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('menu--open');
  sideMenu.classList.add('menu--close');
  body.classList.remove('no-scroll');  // Дозволяємо прокручування після закриття меню
});