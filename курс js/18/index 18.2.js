function progress(time) {
    const progressBar = document.getElementById("progress-bar");
    const timerElement = document.getElementById("timer");

    let elapsedSeconds = 0; // Счётчик прошедших секунд
    timerElement.textContent = `${elapsedSeconds} с`;

    // Устанавливаем ширину progress bar с анимацией
    progressBar.style.transition = `width ${time}s linear`;
    progressBar.style.width = "100%";

    // Таймер для обновления прошедших секунд
    const interval = setInterval(() => {
        elapsedSeconds++;
        timerElement.textContent = `${elapsedSeconds} с`;

        if (elapsedSeconds >= time) {
            clearInterval(interval); // Остановить таймер, когда время истекло
        }
    }, 1000);
}

// Запуск progress bar с анимацией на 5 секунд
progress(5);