document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const titleInput = document.getElementById("title");
    const genreInput = document.getElementById("genre");
    const yearInput = document.getElementById("year");
    const watchedInput = document.getElementById("watched");
    const movieTable = document.querySelector("#movieTable tbody");
    const sortCriteria = document.getElementById("sortCriteria");
    const sortButton = document.getElementById("sortButton");
    const cancelEditButton = document.getElementById("cancelEdit");

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let editingIndex = null;

    const saveToLocalStorage = () => {
        localStorage.setItem("movies", JSON.stringify(movies));
    };

    const renderMovies = () => {
        movieTable.innerHTML = "";
        movies.forEach((movie, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.year}</td>
                <td>${movie.watched ? "Да" : "Нет"}</td>
                <td>
                    <button data-edit="${index}">Редактировать</button>
                    <button data-delete="${index}">Удалить</button>
                </td>
            `;
            movieTable.appendChild(row);
        });
    };

    movieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const genre = genreInput.value.trim();
        const year = parseInt(yearInput.value.trim());
        const watched = watchedInput.checked;

        if (!title || !genre || !year) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        if (editingIndex !== null) {
            movies[editingIndex] = { title, genre, year, watched };
            editingIndex = null;
            cancelEditButton.style.display = "none";
        } else {
            movies.push({ title, genre, year, watched });
        }

        saveToLocalStorage();
        renderMovies();
        movieForm.reset();
    });

    movieTable.addEventListener("click", (e) => {
        const editIndex = e.target.dataset.edit;
        const deleteIndex = e.target.dataset.delete;

        if (editIndex !== undefined) {
            const movie = movies[editIndex];
            titleInput.value = movie.title;
            genreInput.value = movie.genre;
            yearInput.value = movie.year;
            watchedInput.checked = movie.watched;
            editingIndex = editIndex;
            cancelEditButton.style.display = "inline-block";
        }

        if (deleteIndex !== undefined) {
            movies.splice(deleteIndex, 1);
            saveToLocalStorage();
            renderMovies();
        }
    });

    cancelEditButton.addEventListener("click", () => {
        editingIndex = null;
        movieForm.reset();
        cancelEditButton.style.display = "none";
    });

    sortButton.addEventListener("click", () => {
        const criteria = sortCriteria.value;
        movies.sort((a, b) => {
            if (a[criteria] < b[criteria]) return -1;
            if (a[criteria] > b[criteria]) return 1;
            return 0;
        });
        renderMovies();
    });

    renderMovies();
});