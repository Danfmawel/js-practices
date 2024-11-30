document.addEventListener("DOMContentLoaded", () => {
    const giftArr = [
        {
            title: "Скидка 20% на первую покупку в нашем магазине!",
            icon: "12.png",
        },
        {
            title: "Скидка 10% на всё!",
            icon: "12.png",
        },
        {
            title: "Подарок при первой покупке в нашем магазине!",
            icon: "12.png",
        },
        {
            title: "Бесплатная доставка для вас!",
            icon: "12.png",
        },
        {
            title: "Сегодня день больших скидок!",
            icon: "12.png",
        },
    ];

    const showPopup = () => {
        const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];

        const popupHTML = `
            <div id="popup">
                <img src="12.png" alt="Icon">
                <h2>${randomGift.title}</h2>
                <button id="closePopup">Отлично!</button>
            </div>
        `;

        const popupContainer = document.getElementById("popup-container");
        popupContainer.innerHTML = popupHTML;

        const closeButton = document.getElementById("closePopup");
        closeButton.addEventListener("click", () => {
            popupContainer.innerHTML = "";
        });
    };

    setTimeout(showPopup, 3000);
});