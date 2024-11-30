// Функция, которая имитирует запрос для загрузки URL картинок котов
function fetchCatImages() {
    return new Promise((resolve) => {
        const catImages = [
            "18.1.jpg",
            "18.2.jpg",
            "18.3.jpg"
        ];
        const delay = Math.random() * (5000 - 2000) + 2000; // Задержка от 2 до 5 секунд
        setTimeout(() => resolve(catImages), delay);
    });
}

// Функция, которая имитирует запрос для загрузки URL картинок собак
function fetchDogImages() {
    return new Promise((resolve) => {
        const dogImages = [
            "18.4.jpg",
            "18.5.jpg",
            "18.6.jpg"
        ];
        const delay = Math.random() * (5000 - 2000) + 2000; // Задержка от 2 до 5 секунд
        setTimeout(() => resolve(dogImages), delay);
    });
}

// Функция для отображения заглушек
function displayPlaceholders(count) {
    const container = document.querySelector(".images-container");
    for (let i = 0; i < count; i++) {
        const placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        container.appendChild(placeholder);
    }
}

// Функция для замены заглушек на загруженные изображения
function replacePlaceholders(images) {
    const placeholders = document.querySelectorAll(".placeholder");
    images.forEach((url, index) => {
        if (placeholders[index]) {
            const img = document.createElement("img");
            img.src = url;
            placeholders[index].replaceWith(img);
        }
    });
}

// Загрузка изображений и обработка результатов
async function loadImages() {
    try {
        // Отображаем заглушки (по 3 для котов и собак)
        displayPlaceholders(6);

        // Имитируем загрузку изображений
        const [catImages, dogImages] = await Promise.all([fetchCatImages(), fetchDogImages()]);

        // Скрываем GIF загрузки
        document.getElementById("loading").style.display = "none";

        // Заменяем заглушки на изображения
        replacePlaceholders([...catImages, ...dogImages]);
    } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
    }
}

// Запуск загрузки при загрузке страницы
loadImages();