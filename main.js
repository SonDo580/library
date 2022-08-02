let myLibrary = [
    {
        author: 'John',
        title: 'Slicing Bread',
        pages: 125,
        isRead: true
    },
    {
        author: 'Mary',
        title: 'Poking Face',
        pages: 200,
        isRead: false
    }
];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

const libraryDisplay = document.querySelector('#library').querySelector('tbody');

function displayBooks() {
    for (let book of myLibrary) {
        const row = document.createElement('tr');
        
        row.innerHTML = 
        `<td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.pages}</td>
        <td>${book.isRead ? 'Yes' : 'No'}</td>`;

        libraryDisplay.appendChild(row);
    }
}


const showFormButton = document.querySelector('#showForm');
const addBookForm = document.querySelector('form');
const blurBackground = document.querySelector('.blur');
showFormButton.addEventListener('click', showAddBookForm);

function showAddBookForm() {
    addBookForm.style.display = 'block';
    blurBackground.style.display = 'block';
}


const addBookButton = document.querySelector('form button.add');
addBookButton.addEventListener('click', addBookToLibrary);

const authorInput = document.querySelector('#author');
const authorErrorSpan = document.querySelector('#authorError');

const titleInput = document.querySelector('#title');
const titleErrorSpan = document.querySelector('#titleError');

const pagesInput = document.querySelector('#pages');
const pagesErrorSpan = document.querySelector('#pagesError');

const isReadInput = document.querySelector('#isRead');    

function addBookToLibrary() {
    authorErrorSpan.textContent = '';
    titleErrorSpan.textContent = '';
    pagesErrorSpan.textContent = '';

    let author = authorInput.value.trim();
    let title = titleInput.value.trim();
    let pages = pagesInput.value;
    let isRead = isReadInput.value;    
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

    if (error) {
        return;
    } else {
        let book = new Book(author, title, pages, isRead);

        add
    }
}