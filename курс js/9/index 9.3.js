function createCar(additionalProps) {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    };

    return { ...baseCar, ...additionalProps };
}

const newCar = createCar({ name: 'Haval', hp: 198 });
console.log(newCar);