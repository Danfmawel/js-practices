const currentYear = new Date().getFullYear();

let users = [];
for (let i = 1; i <= 3; i++) {
    let name = prompt(`Введите имя пользователя ${i}:`);
    let birthYear = parseInt(prompt(`Введите год рождения пользователя ${i}:`));
    let age = currentYear - birthYear;
    users.push({ name, age });
}

users.forEach((user, index) => {
    console.log(`${index + 1} '${user.name}' ${user.age}`);
});

let totalAge = users.reduce((sum, user) => sum + user.age, 0);
let averageAge = Math.floor(totalAge / users.length);

console.log("Средний возраст пользователей:", averageAge);