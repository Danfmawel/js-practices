let books = ["Мастер и Маргарита", "Гарри Поттер", "Зов Ктулху", "Властелин колец", "Три мушкетера"];

function renderBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; 

    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book;
        bookList.appendChild(li);
    });
}

function addBook() {
    const bookName = prompt("Введите название книги:");
    if (!bookName) {
        alert("Название книги не введено!");
        return;
    }
    books.push(bookName);
    renderBooks();
}

function findBook() {
    const searchQuery = prompt("Введите название книги для поиска:");
    if (!searchQuery) {
        alert("Название книги не введено!");
        return;
    }

    const bookListItems = document.querySelectorAll("#bookList li");
    let found = false;

    bookListItems.forEach(item => {
        item.classList.remove("highlight");
        if (item.textContent.toLowerCase() === searchQuery.toLowerCase()) {
            item.classList.add("highlight");
            found = true;
        }
    });

    if (!found) {
        alert("Книга не найдена!");
    }
}

document.getElementById("addBook").addEventListener("click", addBook);
document.getElementById("findBook").addEventListener("click", findBook);

renderBooks();