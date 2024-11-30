function hello() {
    console.log('Skill');
}

try {
    helo(); // Ошибочный вызов
} catch (error) {
    console.error('Произошла ошибка:', error.message);
}

console.log('complete');