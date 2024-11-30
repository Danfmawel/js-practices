document.addEventListener("DOMContentLoaded", () => {
    const promoCodeObj = {
        promocode: "PROM50",
        gift: "Скидка 50%",
    };

    const input = document.getElementById("promoCodeInput");
    const button = document.getElementById("applyPromoButton");
    const message = document.getElementById("promoMessage");

    function getCookie() {
        return document.cookie.split("; ").reduce((acc, item) => {
            const [name, value] = item.split("=");
            acc[name] = value;
            return acc;
        }, {});
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    const cookies = getCookie();
    if (cookies.promocode && cookies.promocode === promoCodeObj.promocode) {
        message.textContent = `Промокод применён. ${promoCodeObj.gift}`;
        input.value = promoCodeObj.promocode;
        input.disabled = true;
        button.disabled = true;
    }

    button.addEventListener("click", () => {
        const userCode = input.value.trim();
        if (userCode === promoCodeObj.promocode) {
            message.textContent = `Промокод применён. ${promoCodeObj.gift}`;
            setCookie("promocode", userCode, 7);
            input.disabled = true;
            button.disabled = true;
        } else {
            message.textContent = "Неверный промокод. Попробуйте ещё раз.";
            message.style.color = "red";
        }
    });
});