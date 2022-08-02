let myLibrary = [
    {
        author: 'Shadow',
        title: 'Metal Shark',
        pages: 275,
        isRead: true
    },
    {
        author: 'Sonic',
        title: 'Super Hedgehog',
        pages: 100,
        isRead: false
    }
];

const libraryDisplay = document.querySelector('#library tbody');

const showFormButton = document.querySelector('#showForm');
showFormButton.addEventListener('click', showForm);

const addBookForm = document.querySelector('form');

const blurBackground = document.querySelector('.blur');

const addBookButton = document.querySelector('form #addBook');
addBookButton.addEventListener('click', addBook);

const authorInput = document.querySelector('#author');
const authorErrorSpan = document.querySelector('#authorError');

const titleInput = document.querySelector('#title');
const titleErrorSpan = document.querySelector('#titleError');

const pagesInput = document.querySelector('#pages');
const pagesErrorSpan = document.querySelector('#pagesError');

const isReadInput = document.querySelector('#isRead');

const cancelFormButton = document.querySelector('form #cancelForm');
cancelFormButton.addEventListener('click', hideForm);

displayBooks();     // Display all books in library on the first load

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function displayBooks() {
    for (let book of myLibrary) {
        displayBook(book);
    }
}

function showForm() {
    addBookForm.style.display = 'block';
    blurBackground.style.display = 'block';
}

function hideForm() {
    resetInput();
    resetError();

    addBookForm.style.display = 'none';
    blurBackground.style.display = 'none';
}

function addBook() {
    resetError();

    let author = authorInput.value.trim();
    let title = titleInput.value.trim();
    let pages = pagesInput.value;
    let isRead = isReadInput.value;

    if (isInvalidForm(author, title, pages)) {
        return;

    } else {
        let book = new Book(author, title, pages, isRead);
        myLibrary.push(book);
        hideForm();
        displayBook(book);
    }
}

function displayBook(book) {
    const row = document.createElement('tr');
    row.innerHTML =
        `<td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td>${book.isRead ? 'Yes' : 'No'}</td>`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('danger');
    deleteButton.setAttribute('data-index', myLibrary.indexOf(book));
    deleteButton.addEventListener('click', deleteBook);

    const cell = document.createElement('td');

    cell.appendChild(deleteButton);
    row.appendChild(cell);
    libraryDisplay.appendChild(row);
}

function isInvalidForm(author, title, pages) {
    let error = false;

    if (author === '') {
        authorErrorSpan.textContent = "Please provide the author's name!";
        error = true;
    }
    if (title === '') {
        titleErrorSpan.textContent = "Please provide the book's title!";
        error = true;
    }
    if (pages === '') {
        pagesErrorSpan.textContent = "Please provide the number of pages!";
        error = true;
    }
    if (pages <= 0) {
        pagesErrorSpan.textContent = "Number of pages must be positive!";
        error = true;
    }

    return error;
}

function resetError() {
    authorErrorSpan.textContent = '';
    titleErrorSpan.textContent = '';
    pagesErrorSpan.textContent = '';
}

function resetInput() {
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
}

function deleteBook(event) {
    console.log(event);
}