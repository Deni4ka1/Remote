document.addEventListener('DOMContentLoaded', function () {
    const serviceLinks = document.querySelectorAll('.menu__sub-link'); // усі пункти меню
    const navLine = document.getElementById('nav-line');
    const serviceSections = document.querySelectorAll('.service__change');
    
    // Функція для оновлення активного пункту меню
    function updateNavLine(activeLink) {
      const activeTarget = activeLink.dataset.target; // Отримуємо значення data-target
      const activeSection = document.getElementById(activeTarget); // Отримуємо відповідну секцію
      // Оновлюємо секцію
      serviceSections.forEach(section => {
        if (section !== activeSection) {
          section.classList.remove('active'); // Прибираємо клас active з інших секцій
        }
      });
      activeSection.classList.add('active'); // Додаємо клас active до вибраної секції
      
      // Оновлення меню навігації
      const newNavLine = `
        <li>
          <a href="/Projects/Remote/index.html" class="nav__text">Home
            <svg class="nav__text-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11L3 6.4L4.55556 5L8 8.2L11.4444 5L13 6.4L8 11Z" fill="#194484" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="nav__text">Services
            <svg class="nav__text-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 11L3 6.4L4.55556 5L8 8.2L11.4444 5L13 6.4L8 11Z" fill="#194484" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#${activeTarget}" class="nav__text">${activeLink.textContent.trim()}</a>
        </li>
      `;
      
      navLine.innerHTML = newNavLine; // Оновлюємо навігацію
    }
  
    // Додаємо слухачів подій на кожен пункт меню
    serviceLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Запобігаємо переходу за лінком
        const target = link.dataset.target;
        
        // Зміна URL в адресному рядку без перезавантаження сторінки
        history.pushState(null, null, `#${target}`);
  
        updateNavLine(link); // Оновлюємо навігацію та секцію
      });
    });
  
    // Функція для завантаження відповідної секції за URL
    function loadSectionFromURL() {
      const sectionID = window.location.hash.substring(1); // Отримуємо частину хешу з URL
      const sectionLink = document.querySelector(`.menu__sub-link[data-target="${sectionID}"]`);
  
      if (sectionID && sectionLink) {
        updateNavLine(sectionLink); // Оновлюємо секцію та навігацію
      } else {
        // Якщо не знайдено, показуємо першу секцію (Mobile App)
        const firstLink = document.querySelector('.menu__sub-link');
        if (firstLink) updateNavLine(firstLink);
      }
    }
  
    // Ініціалізація: завантажуємо секцію при завантаженні сторінки
    loadSectionFromURL();
  
    // Слухаємо зміни URL (повернення назад / вперед)
    window.addEventListener('popstate', loadSectionFromURL);
  });
  
  
  