let heights = [164, 157, 190, 175, 168];

function renderHeights() {
    const heightList = document.getElementById("heightList");
    heightList.innerHTML = "";

    heights.forEach(height => {
        const li = document.createElement("li");
        li.textContent = height;
        heightList.appendChild(li);
    });
}

function addHeight() {
    const newHeight = prompt("Введите рост ученика:");
    if (!newHeight) {
        alert("Рост не введён!");
        return;
    }
    const parsedHeight = parseInt(newHeight);
    if (isNaN(parsedHeight)) {
        alert("Некорректный ввод! Введите число.");
        return;
    }
    heights.push(parsedHeight);
    renderHeights();
}

function filterHeight() {
    const minHeight = prompt("Введите минимальный рост для фильтрации:");
    if (!minHeight) {
        renderHeights();
        return;
    }
    const parsedMinHeight = parseInt(minHeight);
    if (isNaN(parsedMinHeight)) {
        alert("Некорректный ввод! Введите число.");
        return;
    }
    const filteredHeights = heights.filter(height => height >= parsedMinHeight);
    renderFilteredHeights(filteredHeights);
}

function renderFilteredHeights(filteredHeights) {
    const heightList = document.getElementById("heightList");
    heightList.innerHTML = "";

    filteredHeights.forEach(height => {
        const li = document.createElement("li");
        li.textContent = height;
        heightList.appendChild(li);
    });
}

document.getElementById("addHeight").addEventListener("click", addHeight);
document.getElementById("filterHeight").addEventListener("click", filterHeight);

renderHeights();