document.addEventListener('DOMContentLoaded', function() {
    // Функція для вибору відповідної секції
    function changeSection(selectedSection) {
        // Отримуємо всі секції
        const sections = document.querySelectorAll('.service__change');
        
        // Сховуємо всі секції
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Показуємо тільки обрану секцію
        const activeSection = document.getElementById(selectedSection);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }

    // Обробка натискання на підменю для Services
    const serviceLinks = document.querySelectorAll('.menu__sub-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').split('#')[1]; // Отримуємо ID секції
            changeSection(sectionId);
        });
    });

    // Початкове відображення секції при завантаженні сторінки
    // Використовуємо значення по замовчуванню або першу секцію
    changeSection('dynamic-content1');
});
