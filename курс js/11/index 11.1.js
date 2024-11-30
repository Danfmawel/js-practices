document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("surveyForm");
    const resultDiv = document.getElementById("result");

    const rating = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    rating.addEventListener("input", () => {
        ratingValue.textContent = rating.value;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
        const comments = document.getElementById("comments").value.trim();

        let valid = true;

        if (!name) {
            document.getElementById("nameError").textContent = "Имя обязательно для заполнения.";
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        if (!email || !validateEmail(email)) {
            document.getElementById("emailError").textContent = "Введите корректный email.";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (!valid) {
            return;
        }

        const genderText = gender ? gender.value : "Не указан";
        const interestsText = interests.length > 0 ? interests.join(", ") : "Не указаны";

        resultDiv.innerHTML = `
            <p><strong>Имя пользователя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Пол:</strong> ${genderText}</p>
            <p><strong>Оценка сервиса:</strong> ${rating.value}</p>
            <p><strong>Интересы:</strong> ${interestsText}</p>
            <p><strong>Дополнительные комментарии:</strong> ${comments || "Нет комментариев"}</p>
        `;
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});