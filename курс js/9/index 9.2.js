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
    mercedes: {
        name: "Mercedes",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 400
    }
};

const listCarNames = (cars) => {
    for (let car in cars) {
        console.log(car);
    }
};

listCarNames(cars);