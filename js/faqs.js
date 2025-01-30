document.addEventListener('DOMContentLoaded', function() {
    // Знайдемо всі елементи з класом faqs__descr-title
    const faqTitles = document.querySelectorAll('.faqs__descr-title');
    
    // Додаємо обробник подій для кожного елемента
    faqTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            // Знайдемо відповідний текст (faqs__descr) для кожного заголовка
            const faqDescr = this.nextElementSibling; // Це буде .faqs__descr
            const arrow = this.querySelector('::before'); // Це псевдоелемент стрілки
            
            // Якщо опис відкритий, закриваємо його, інакше відкриваємо
            faqDescr.classList.toggle('active');
            
            // Поворот стрілки
            this.classList.toggle('active');
        });
    });
});

