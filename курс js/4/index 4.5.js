const priceItem = 25000; 
const amountItem = 3;
const discountItem = 20;


const totalSum = (price, amount, discount) => {
    const totalPrice = price * amount; 
    const discountAmount = (totalPrice * discount) / 100; 
    const finalPrice = totalPrice - discountAmount; 

    return finalPrice;
};


const result = totalSum(priceItem, amountItem, discountItem);

console.log(result);
