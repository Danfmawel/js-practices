let products = ["Кофе", "Яблоки", "Молоко", "Арбуз", "Макароны", "Сахар", "Книга"];

function renderProducts() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    products.sort();

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        itemList.appendChild(li);
    });
}

function addItem() {
    const newItem = prompt("Введите название товара:");
    if (!newItem) {
        alert("Название товара не введено!");
        return;
    }
    products.push(newItem);
    renderProducts();
}

document.getElementById("addItem").addEventListener("click", addItem);

renderProducts();