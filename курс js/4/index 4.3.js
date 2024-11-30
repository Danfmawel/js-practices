const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

console.log(celsiusToFahrenheit(25)); 
console.log(fahrenheitToCelsius(77)); 
