const API_URL = "https://sb-film.skillbox.cc/ping";
const statusMessage = document.createElement("div");
statusMessage.style.position = "fixed";
statusMessage.style.bottom = "10px";
statusMessage.style.left = "50%";
statusMessage.style.transform = "translateX(-50%)";
statusMessage.style.padding = "10px 20px";
statusMessage.style.borderRadius = "5px";
statusMessage.style.color = "white";
statusMessage.style.fontWeight = "bold";
document.body.appendChild(statusMessage);

function updateStatus(message, color) {
    statusMessage.textContent = message;
    statusMessage.style.backgroundColor = color;
    statusMessage.style.display = message ? "block" : "none";
}

function checkConnection() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);
    const startTime = Date.now();

    fetch(API_URL, { method: "POST", signal: controller.signal })
        .then((response) => {
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const duration = Date.now() - startTime;
            if (duration > 500) {
                updateStatus("Медленное соединение", "orange");
            } else {
                updateStatus("", "green");
            }
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                updateStatus("Проблема с сетью: запрос прерван", "red");
            } else {
                updateStatus("Проблема с сетью", "red");
            }
        });
}

setInterval(checkConnection, 5000);