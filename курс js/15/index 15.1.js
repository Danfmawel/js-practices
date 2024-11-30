document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const titleInput = document.getElementById("title");
    const genreInput = document.getElementById("genre");
    const yearInput = document.getElementById("year");
    const watchedInput = document.getElementById("watched");
    const movieTable = document.querySelector("#movieTable tbody");
    const filterTitle = document.getElementById("filterTitle");
    const filterGenre = document.getElementById("filterGenre");
    const filterYear = document.getElementById("filterYear");
    const filterWatched = document.getElementById("filterWatched");
    const clearFilters = document.getElementById("clearFilters");
    const deleteAllButton = document.getElementById("deleteAll");

    let movies = []; // Локальный массив фильмов

    // Функция для отображения фильмов в таблице
    const renderMovies = () => {
        movieTable.innerHTML = ""; // Очищаем таблицу перед обновлением
        const filteredMovies = movies.filter(filterMovies); // Фильтруем фильмы
        filteredMovies.forEach((movie, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.year}</td>
                <td>${movie.watched ? "Да" : "Нет"}</td>
                <td>
                    <button class="deleteButton" data-index="${index}">Удалить</button>
                </td>
            `;
            movieTable.appendChild(row);
        });
    };

    // Функция фильтрации фильмов
    const filterMovies = (movie) => {
        const titleFilter = filterTitle.value.trim().toLowerCase();
        const genreFilter = filterGenre.value.trim().toLowerCase();
        const yearFilter = filterYear.value.trim();
        const watchedFilter = filterWatched.value;

        return (
            (titleFilter === "" || movie.title.toLowerCase().includes(titleFilter)) &&
            (genreFilter === "" || movie.genre.toLowerCase().includes(genreFilter)) &&
            (yearFilter === "" || movie.year.toString() === yearFilter) &&
            (watchedFilter === "all" ||
                (watchedFilter === "yes" && movie.watched) ||
                (watchedFilter === "no" && !movie.watched))
        );
    };

    // Обработка отправки формы для добавления фильма
    movieForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        // Считываем данные из формы
        const newMovie = {
            title: titleInput.value.trim(),
            genre: genreInput.value.trim(),
            year: parseInt(yearInput.value.trim()),
            watched: watchedInput.checked,
        };

        // Проверяем, что все поля заполнены корректно
        if (!newMovie.title || !newMovie.genre || !newMovie.year) {
            alert("Пожалуйста, заполните все поля формы.");
            return;
        }

        // Добавляем фильм в массив
        movies.push(newMovie);

        // Обновляем таблицу и очищаем форму
        renderMovies();
        movieForm.reset();
    });

    // Обработка удаления фильма
    movieTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteButton")) {
            const index = e.target.dataset.index; // Получаем индекс фильма
            movies.splice(index, 1); // Удаляем фильм из массива
            renderMovies(); // Обновляем таблицу
        }
    });

    // Удаление всех фильмов
    deleteAllButton.addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите удалить все фильмы?")) {
            movies = []; // Очищаем массив фильмов
            renderMovies(); // Обновляем таблицу
        }
    });

    // Обработка фильтров
    [filterTitle, filterGenre, filterYear, filterWatched].forEach((input) =>
        input.addEventListener("input", renderMovies)
    );

    // Сброс фильтров
    clearFilters.addEventListener("click", () => {
        filterTitle.value = "";
        filterGenre.value = "";
        filterYear.value = "";
        filterWatched.value = "all";
        renderMovies();
    });
});