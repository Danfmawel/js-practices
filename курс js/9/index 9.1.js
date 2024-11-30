const cars = {
    bmw: {
        name: "BMW",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 250
    },
    audi: {
        name: "Audi",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 300
    },
    tesla: {
        name: "Tesla",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 450
    }
};

const getCar = (carName) => {
    const car = cars[carName.toLowerCase()];
    
    if (car) {
        return car;
    } else {
        console.log("Автомобиль не найден");
        return null;
    }
};

console.log(getCar("BMW"));
console.log(getCar("audi"));
console.log(getCar("Toyota"));