let product1 = prompt("Введите название товара 1:");
let price1 = parseFloat(prompt(`Введите стоимость товара ${product1}:`));
let count1 = parseInt(prompt(`Введите количество товара ${product1}:`));
console.log(product1, price1 * count1);

let product2 = prompt("Введите название товара 2:");
let price2 = parseFloat(prompt(`Введите стоимость товара ${product2}:`));
let count2 = parseInt(prompt(`Введите количество товара ${product2}:`));
console.log(product2, price2 * count2);

let product3 = prompt("Введите название товара 3:");
let price3 = parseFloat(prompt(`Введите стоимость товара ${product3}:`));
let count3 = parseInt(prompt(`Введите количество товара ${product3}:`));
console.log(product3, price3 * count3);

let totalCost = (price1 * count1) + (price2 * count2) + (price3 * count3);
console.log("Сумма всей покупки:", totalCost);