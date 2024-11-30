function globalError() {
    const error = new Error('Глобальная ошибка');
    error.name = 'GlobalError';
    throw error;
}

function localError() {
    const error = new Error('Локальная ошибка');
    error.name = 'LocalError';
    throw error;
}

function testErrorScope(fn) {
    try {
        try {
            fn(); // Выполняем переданную функцию
        } catch (error) {
            if (error.name === 'LocalError') {
                console.log('Обнаружена локальная ошибка');
                console.error(error);
                return; // Завершаем выполнение внутреннего блока
            }
            throw error; // Пробрасываем ошибку дальше, если это не LocalError
        }
    } catch (error) {
        console.log('Обнаружена глобальная ошибка');
        console.error(error);
    }
}

// Тестирование функций
testErrorScope(localError); // Должно вывести "Обнаружена локальная ошибка"
testErrorScope(globalError); // Должно вывести "Обнаружена глобальная ошибка"