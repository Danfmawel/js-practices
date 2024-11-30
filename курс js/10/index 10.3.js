const prices = [100, 500, 250, 750, 300];

function renderPrices(prices) {
    const priceList = document.getElementById("priceList");
    priceList.innerHTML = "";

    prices.forEach(price => {
        const li = document.createElement("li");
        li.textContent = price;
        priceList.appendChild(li);
    });
}

function sortAscending() {
    prices.sort((a, b) => a - b);
    renderPrices(prices);
}

function sortDescending() {
    prices.sort((a, b) => b - a);
    renderPrices(prices);
}

document.getElementById("sortAsc").addEventListener("click", sortAscending);
document.getElementById("sortDesc").addEventListener("click", sortDescending);

renderPrices(prices);