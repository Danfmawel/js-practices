document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
    const cardContent = document.getElementById("cardContent");
    const cardTextInput = document.getElementById("cardText");
    const cardColorSelect = document.getElementById("cardColor");

    cardTextInput.addEventListener("input", () => {
        cardContent.textContent = cardTextInput.value || "Ваша карта";
    });

    cardTextInput.addEventListener("focus", () => {
        cardTextInput.style.border = "2px solid #007BFF";
        cardTextInput.style.backgroundColor = "#f0f8ff";
    });

    cardTextInput.addEventListener("blur", () => {
        cardTextInput.style.border = "1px solid #ccc";
        cardTextInput.style.backgroundColor = "#fff";
    });

    cardColorSelect.addEventListener("change", () => {
        card.style.backgroundColor = cardColorSelect.value;
    });
});