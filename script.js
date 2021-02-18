// Array to store book objects
let myLibrary = [];

// Book Constructor
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// Function that adds book to myLibrary Array
function addBookToLibrary() {
    const author = document.querySelector('#authorForm').value;
    const title = document.querySelector('#titleForm').value;
    const pages = document.querySelector('#pagesForm').value;
    const read = document.querySelector(`input[name='read']:checked`).value;

    const newBook = new Book(author, title, pages, read);

    myLibrary.push(newBook);
}

addBookToLibrary.prototype = Object.create(Book.prototype);