// const ratings = document.querySelectorAll('.form__rating');
// if (ratings.length > 0) {
//     initRatings();
// }


// function initRatings() {
//     let ratingActive, ratingValue;
//     for (let index = 0; index < ratings.length; index++) {
//         const rating = ratings[index];
//         initRating(rating);
//     }


//     function initRating(rating) {
//         initRatingVars(rating);

//         setRatingActiveWidth();

//         if (rating.classList.contains('rating_set')) {
//             setRating(rating);
//         }
//     }


//     function initRatingVars(rating) {
//         ratingActive = rating.querySelector('.rating__active')
//         ratingValue = rating.querySelector('.rating__value')
//     }


//     function setRatingActiveWidth(index = ratingValue.innerHTML) {
//         const ratingActiveWidth = index / 0.05;
//         ratingActive.style.width = `${ratingActiveWidth}%`;
//     }


//     function setRating(rating) {
//         const ratingItems = rating.querySelectorAll('.rating__item');
//         for (let index = 0; index < ratingItems.length; index++) {
//             const ratingItem = ratingItems[index];

//             ratingItem.addEventListener("mouseenter", function (e) {
//                 initRatingVars(rating);
//                 setRatingActiveWidth(ratingItem.value);
//             });
//             ratingItem.addEventListener("mouseleave", function (e) {
//                 setRatingActiveWidth();
//             });
//             ratingItem.addEventListener("click", function (e) {
//                 initRatingVars(rating);
//                 if (rating.dataset.ajax) {
//                     setRatingValue(ratingItem.value, rating);
//                 } else {
//                     ratingValue.innerHTML = index + 1;
//                     setRatingActiveWidth();
//                 }
//             });
//         }
//     }

// }

// const ratings = document.querySelectorAll('.form__rating');
// if (ratings.length > 0) {
//     initRatings();
// }

// function initRatings() {
//     let ratingActive, ratingValue, ratingCurrentValue;
//     for (let index = 0; index < ratings.length; index++) {
//         const rating = ratings[index];
//         initRating(rating);
//     }

//     function initRating(rating) {
//         initRatingVars(rating);
//         setRatingActiveWidth(); // Ініціалізація активної ширини

//         if (rating.classList.contains('rating_set')) {
//             setRating(rating); // Налаштовуємо інтерактивність для рейтингу
//         }
//     }

//     function initRatingVars(rating) {
//         ratingActive = rating.querySelector('.rating__active');
//         ratingValue = rating.querySelector('.rating__value');
//         ratingCurrentValue = parseFloat(ratingValue.innerHTML); // Ініціалізація поточного значення
//     }

//     function setRatingActiveWidth(index = ratingCurrentValue) {
//         // Оновлюємо ширину активного рейтингу
//         const ratingActiveWidth = index * 20; // 1.0 -> 20%, 5.0 -> 100%
//         ratingActive.style.width = `${ratingActiveWidth}%`;
//     }

//     function setRating(rating) {
//         const ratingBody = rating.querySelector('.rating__body');

//         // Додаємо події для руху курсору по шкалі
//         ratingBody.addEventListener("mousemove", function (e) {
//             const rect = ratingBody.getBoundingClientRect(); // Отримуємо розмір шкали
//             const offsetX = e.clientX - rect.left; // Відстань курсора від лівого краю шкали
//             const ratingValueCalculated = (offsetX / rect.width) * 5; // Значення від 0 до 5

//             // Прямо тут округлюємо тільки для відображення на шкалі до 1 десяткового знака
//             const roundedValue = Math.floor(ratingValueCalculated * 10) / 10; // Округлення до 1 десяткового знака

//             // Оновлюємо тільки ширину активної частини шкали
//             setRatingActiveWidth(roundedValue);
//             ratingValue.innerHTML = roundedValue.toFixed(1); // Відображаємо на шкалі
//         });

//         // Подія при кліку по шкалі для фіксації значення
//         ratingBody.addEventListener("click", function () {
//             // Фіксуємо поточне значення без округлення
//             ratingCurrentValue = parseFloat(ratingValue.innerHTML); // Оновлюємо поточне значення після кліку
//             setRatingActiveWidth(ratingCurrentValue); // Фіксуємо вибраний рейтинг
//         });

//         // Подія при наведенні на елементи
//         const ratingItems = rating.querySelectorAll('.rating__item');
//         ratingItems.forEach(ratingItem => {
//             ratingItem.addEventListener("mouseenter", function () {
//                 const value = parseFloat(ratingItem.dataset.value);
//                 setRatingActiveWidth(value); // Оновлюємо ширину при наведенні
//             });

//             ratingItem.addEventListener("mouseleave", function () {
//                 // Повертаємо до поточного вибраного значення після того, як курсор покинув елемент
//                 setRatingActiveWidth(ratingCurrentValue); // Повертаємо значення шкали до того, що було вибрано
//                 ratingValue.innerHTML = ratingCurrentValue.toFixed(1); // Повертаємо значення на шкалу
//             });

//             // Подія при кліку на елемент
//             ratingItem.addEventListener("click", function () {
//                 const value = parseFloat(ratingItem.dataset.value);
//                 // Оновлюємо внутрішнє значення рейтингу
//                 ratingValue.innerHTML = value.toFixed(1); // Встановлюємо вибране значення з точністю до 1 знака
//                 ratingCurrentValue = value; // Оновлюємо поточне значення
//                 setRatingActiveWidth(value); // Оновлюємо ширину активної частини
//             });
//         });
//     }
// }

const ratings = document.querySelectorAll('.form__rating');
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            enableDynamicRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = parseFloat(ratingValue.dataset.value || ratingValue.innerHTML)) {
        const ratingActiveWidth = index * 20; // 1 бал = 20% ширини
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function enableDynamicRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');

        for (let i = 0; i < ratingItems.length; i++) {
            const ratingItem = ratingItems[i];

            // Наведення: динамічно відображає результат
            ratingItem.addEventListener("mousemove", function (e) {
                const rect = ratingItem.getBoundingClientRect();
                const offsetX = e.clientX - rect.left; // Позиція курсора всередині елемента
                const value = calculateValue(i, offsetX, rect.width);
                setRatingActiveWidth(value);
                ratingValue.innerHTML = formatRating(value);
            });

            // Прибирання курсору: повернення до збереженого значення
            ratingItem.addEventListener("mouseleave", function () {
                setRatingActiveWidth();
                ratingValue.innerHTML = formatRating(parseFloat(ratingValue.dataset.value || ratingValue.innerHTML));
            });

            // Натискання: фіксація обраного значення
            ratingItem.addEventListener("click", function (e) {
                const rect = ratingItem.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const value = calculateValue(i, offsetX, rect.width);
                ratingValue.dataset.value = value; // Збереження нового значення
                ratingValue.innerHTML = formatRating(value);
                setRatingActiveWidth(value);
            });
        }
    }

    function calculateValue(index, offsetX, width) {
        // Розрахунок оцінки на основі позиції курсору
        const step = 0.5; // Крок оцінки
        const fraction = Math.round((offsetX / width) / step) * step; // Частка всередині елемента
        return (index + 1) - (1 - fraction);
    }

    function formatRating(value) {
        // Форматування: без десяткової частини для цілих чисел
        return Number.isInteger(value) ? value.toString() : value.toFixed(1);
    }
}

















