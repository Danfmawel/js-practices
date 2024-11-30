// Функция для загрузки записей из localStorage
function getRecords() {
    return JSON.parse(localStorage.getItem('warehouse')) || [];
}

// Функция для сохранения записей в localStorage
function saveRecords(records) {
    localStorage.setItem('warehouse', JSON.stringify(records));
}

// Отображение главной страницы
function renderHomePage() {
    const records = getRecords();
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="container">
            <h1>Склад</h1>
            <button id="addRecordButton">Добавить запись</button>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Полка</th>
                        <th>Вес</th>
                        <th>Время хранения</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    ${records.map((record, index) => `
                        <tr>
                            <td>${record.name}</td>
                            <td>${record.shelf}</td>
                            <td>${record.weight} кг</td>
                            <td>${record.date}</td>
                            <td><button class="delete" data-index="${index}">Удалить</button></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    document.getElementById('addRecordButton').addEventListener('click', renderAddPage);

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const updatedRecords = getRecords();
            updatedRecords.splice(index, 1);
            saveRecords(updatedRecords);
            renderHomePage();
        });
    });
}

// Отображение страницы добавления записи
function renderAddPage() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="container">
            <h1>Добавить запись</h1>
            <form id="addRecordForm">
                <label for="name">Название</label>
                <input type="text" id="name" name="name" required />

                <label for="shelf">Полка</label>
                <input type="text" id="shelf" name="shelf" required />

                <label for="weight">Вес (кг)</label>
                <input type="number" id="weight" name="weight" required />

                <label for="date">Время хранения</label>
                <input type="date" id="date" name="date" required />

                <button type="submit">Добавить</button>
            </form>
        </div>
    `;

    document.getElementById('addRecordForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const record = {
            name: document.getElementById('name').value,
            shelf: document.getElementById('shelf').value,
            weight: document.getElementById('weight').value,
            date: document.getElementById('date').value,
        };

        const records = getRecords();
        records.push(record);
        saveRecords(records);

        renderHomePage();
    });
}

// Инициализация приложения
renderHomePage();