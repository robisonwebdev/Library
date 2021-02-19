// Array to store book objects
let myLibrary = [
    {
        author: 'David Robison',
        title: 'Wind Hunter',
        pages: '523',
        read: 'yes'
    },
    {
        author: 'Patrick Rothfuss',
        title: 'The Name of the Wind',
        pages: '662',
        read: 'yes'
    },
    {
        author: 'Robert Jordan',
        title: 'The Great Hunt',
        pages: '706',
        read: 'no'
    },
];

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

function displayBookList() {
    myLibrary.forEach((book) => {
        const bookListTBody = document.querySelector('tbody');
        const bookListTR = document.createElement('tr');
        const titleTD = document.createElement('td');
        const authorTD = document.createElement('td');
        const pagesTD = document.createElement('td');
        const statusTD = document.createElement('td');

        bookListTR;
        titleTD.innerText = book.title;
        authorTD.innerText = book.author;
        pagesTD.innerText = book.pages;
        statusTD.innerText = book.read;

        bookListTR.appendChild(titleTD);
        bookListTR.appendChild(authorTD);
        bookListTR.appendChild(pagesTD);
        bookListTR.appendChild(statusTD);
        bookListTBody.appendChild(bookListTR);
    })
}

// Eventlisteners 
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
})