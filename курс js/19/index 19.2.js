// Класс Delivery
class Delivery {
    constructor(name, address, distance, status = 'delivery') {
        this.name = name;
        this.address = address;
        this.distance = distance;
        this.status = status;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card', this.status);

        card.innerHTML = `
            <h3>Имя: ${this.name}</h3>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> ${this.distance} км</p>
            <button class="edit-btn">Изменить</button>
        `;

        card.querySelector('.edit-btn').addEventListener('click', () => {
            EditDelivery.openEditModal(this);
        });

        return card;
    }
}

// Класс EditDelivery
class EditDelivery extends Delivery {
    static openEditModal(delivery) {
        const modal = document.getElementById('edit-modal');
        modal.style.display = 'block';

        document.getElementById('edit-name').value = delivery.name;
        document.getElementById('edit-address').value = delivery.address;
        document.getElementById('edit-distance').value = delivery.distance;
        document.getElementById('edit-status').value = delivery.status;

        document.getElementById('edit-form').onsubmit = (e) => {
            e.preventDefault();
            delivery.name = document.getElementById('edit-name').value;
            delivery.address = document.getElementById('edit-address').value;
            delivery.distance = document.getElementById('edit-distance').value;
            delivery.status = document.getElementById('edit-status').value;
            modal.style.display = 'none';
            renderCards();
        };
    }
}

// Массив доставок
const deliveryArr = [
    new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8),
    new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivered'),
    new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled'),
];

// Контейнер для карточек
const container = document.getElementById('delivery-container');

// Функция рендера карточек
function renderCards() {
    container.innerHTML = '';
    deliveryArr.forEach((delivery) => {
        container.appendChild(delivery.createCard());
    });

    // Подсчет общего расстояния
    const totalDistance = deliveryArr.reduce((sum, item) => sum + Number(item.distance), 0);
    document.getElementById('total-distance').textContent = `Общее расстояние: ${totalDistance} км`;
}

// Инициализация
renderCards();