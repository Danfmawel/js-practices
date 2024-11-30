function addToCart(itemName) {
    const cart = document.getElementById("cart");

    const listItem = document.createElement("li");

    listItem.textContent = itemName;

    cart.appendChild(listItem);
}