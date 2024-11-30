class Delivery {
    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance; // in kilometers
    }

    renderCard() {
        const card = document.createElement("div");
        card.className = "delivery-card";
        card.innerHTML = `
            <p><strong>Имя:</strong> ${this.name}</p>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> ${this.distance} км</p>
        `;
        return card;
    }
}

class EditDelivery extends Delivery {
    constructor(name, address, distance, status = "delivery") {
        super(name, address, distance);
        this.status = status;
    }

    renderCard() {
        const card = super.renderCard();
        card.classList.add(this.status);

        const editButton = document.createElement("button");
        editButton.textContent = "Изменить";
        editButton.className = "edit-button";
        editButton.addEventListener("click", () => this.openEditModal());

        card.appendChild(editButton);
        return card;
    }

    openEditModal() {
        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-content">
                <label>Имя: <input type="text" id="edit-name" value="${this.name}"></label>
                <label>Адрес: <input type="text" id="edit-address" value="${this.address}"></label>
                <label>Расстояние: <input type="number" id="edit-distance" value="${this.distance}"></label>
                <label>Статус: 
                    <select id="edit-status">
                        <option value="delivery" ${this.status === "delivery" ? "selected" : ""}>Доставляется</option>
                        <option value="delivered" ${this.status === "delivered" ? "selected" : ""}>Доставлено</option>
                        <option value="canceled" ${this.status === "canceled" ? "selected" : ""}>Отменено</option>
                    </select>
                </label>
                <button class="save-button">Сохранить</button>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector(".save-button").addEventListener("click", () => {
            this.name = modal.querySelector("#edit-name").value;
            this.address = modal.querySelector("#edit-address").value;
            this.distance = parseFloat(modal.querySelector("#edit-distance").value);
            this.status = modal.querySelector("#edit-status").value;

            document.body.removeChild(modal);
            renderDeliveryCards(); // Re-render cards
        });
    }

    static getTotalDistance(deliveries) {
        return deliveries
            .filter(delivery => delivery.status !== "canceled")
            .reduce((total, delivery) => total + delivery.distance, 0);
    }
}

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

function renderDeliveryCards() {
    const container = document.getElementById("delivery-container");
    container.innerHTML = "";
    deliveryArr.forEach(delivery => {
        container.appendChild(delivery.renderCard());
    });
}

document.getElementById("calculate-distance").addEventListener("click", () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
    document.getElementById("total-distance").textContent = `Общее расстояние: ${totalDistance} км`;
});

renderDeliveryCards();