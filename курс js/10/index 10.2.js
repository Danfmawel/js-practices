const list = document.getElementById("dynamicList");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Новый элемент списка";
    list.appendChild(newItem);
});

removeButton.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    } else {
        alert("Список пуст, удалять нечего!");
    }
});