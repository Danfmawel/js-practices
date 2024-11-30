// Класс Delivery
class Delivery {
    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance;
    }

    // Метод для получения HTML-элемента карточки доставки
    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        card.innerHTML = `
            <h3>Имя: ${this.name}</h3>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> ${this.distance} км</p>
        `;

        return card;
    }
}

// Массив доставок
const deliveryArr = [
    new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
    new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
    new Delivery('Оля', 'ул. Ткачей, д. 43', 11),
];

// Контейнер для карточек доставок
const container = document.getElementById('delivery-container');

// Добавление карточек на страницу
deliveryArr.forEach((delivery) => {
    container.appendChild(delivery.createCard());
});