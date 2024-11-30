document.addEventListener("DOMContentLoaded", () => {
    const promoCodeArr = [
        { promocode: "PROM10", gift: "Скидка 10%" },
        { promocode: "PROM50", gift: "Скидка 50%" },
        { promocode: "GIFT", gift: "Подарок в корзине" },
    ];

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
    const savedCode = cookies.promocode;
    if (savedCode) {
        const savedPromo = promoCodeArr.find((promo) => promo.promocode === savedCode);
        if (savedPromo) {
            message.textContent = `Промокод применён. ${savedPromo.gift}`;
            input.value = savedPromo.promocode;
            input.disabled = true;
            button.disabled = true;
        }
    }

    button.addEventListener("click", () => {
        const userCode = input.value.trim();
        const promo = promoCodeArr.find((promo) => promo.promocode === userCode);

        if (promo) {
            message.textContent = `Промокод применён. ${promo.gift}`;
            message.style.color = "green";
            setCookie("promocode", userCode, 7);
            input.disabled = true;
            button.disabled = true;
        } else {
            message.textContent = "Неверный промокод. Попробуйте ещё раз.";
            message.style.color = "red";
        }
    });
});