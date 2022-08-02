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