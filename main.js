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

function addBookToLibrary(book) {
    myLibrary.push(book);
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

const showFormButton = document.querySelector('button#showForm');
const addBookForm = document.querySelector('form');
showFormButton.addEventListener('click', showAddBookForm);

function showAddBookForm() {
    addBookForm.style.display = 'block';
}