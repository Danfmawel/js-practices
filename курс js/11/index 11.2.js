document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("deliveryForm");
    const tableBody = document.getElementById("productTableBody");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("productName").value.trim();
        const weight = parseFloat(document.getElementById("productWeight").value);
        const distance = parseFloat(document.getElementById("deliveryDistance").value);

        if (!name || weight <= 0 || distance <= 0) {
            errorMessage.textContent = "Пожалуйста, введите корректные значения для веса и расстояния.";
            return;
        }
        errorMessage.textContent = "";

        const deliveryCost = ((weight * distance) / 10).toFixed(2);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${weight}</td>
            <td>${distance}</td>
            <td>${deliveryCost} руб.</td>
        `;
        tableBody.appendChild(row);

        form.reset();
    });
});