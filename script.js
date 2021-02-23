// Array to store book objects
let myLibrary = [
    {
        author: 'David Robison',
        title: 'Wind Hunter',
        pages: '523',
        status: 'Read'
    },
    {
        author: 'Patrick Rothfuss',
        title: 'The Name of the Wind',
        pages: '662',
        status: 'Reading'
    },
    {
        author: 'Robert Jordan',
        title: 'The Great Hunt',
        pages: '706',
        status: 'Not Read'
    },
];

// Book Constructor
function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

// Function that adds book to myLibrary Array
function addBookToLibrary() {
    const author = document.querySelector('#authorForm').value;
    const title = document.querySelector('#titleForm').value;
    const pages = document.querySelector('#pagesForm').value;
    const status = document.querySelector('#status').value;

    const newBook = new Book(author, title, pages, status);

    myLibrary.push(newBook);
}

addBookToLibrary.prototype = Object.create(Book.prototype);

function displayBookList() {
    deleteBookList();

    myLibrary.forEach((book) => {
        const bookListTBody = document.querySelector('tbody');
        const bookListTR = document.createElement('tr');
        const titleTD = document.createElement('td');
        const authorTD = document.createElement('td');
        const pagesTD = document.createElement('td');
        const statusTD = document.createElement('td');
        const editTD = document.createElement('td');
        const editBtn = document.createElement('i');

        bookListTR;
        titleTD.innerText = book.title;
        authorTD.innerText = book.author;
        pagesTD.innerText = book.pages;
        pagesTD.classList.add('centerAlign');
        statusTD.innerText = book.status;
        statusTD.classList.add('centerAlign');
        editTD.classList.add('centerAlign');
        editBtn.setAttribute('class', 'las la-edit');

        editTD.appendChild(editBtn);
        bookListTR.appendChild(titleTD);
        bookListTR.appendChild(authorTD);
        bookListTR.appendChild(pagesTD);
        bookListTR.appendChild(statusTD);
        bookListTR.appendChild(editTD);
        bookListTBody.appendChild(bookListTR);
    })
}

function deleteBookList() {
    const bookListTBody = document.querySelector('tbody');

    bookListTBody.innerHTML = '';
}

function bookInputToggle() {
    const addToLibrary = document.querySelector('#bookInput');
    const openBookInputBtn = document.querySelector('#openBookInputBtn');

    if (addToLibrary.style.display === 'none') {
        addToLibrary.style.display = 'flex';
        openBookInputBtn.classList.add('removeDisplay');
    } else {
        addToLibrary.style.display = 'none';
        openBookInputBtn.classList.remove('removeDisplay');
    }
}

function deleteBookInputValues() {
    const authorForm = document.querySelector('#authorForm');
    const titleForm = document.querySelector('#titleForm');
    const pagesForm = document.querySelector('#pagesForm');
    const status = document.querySelector('#status');

    authorForm.value = '';
    titleForm.value = '';
    pagesForm.value = '';
    status.selectedIndex = 0;
}

// Eventlisteners 
const openBookInputBtn = document.querySelector('#openBookInputBtn');
const submitBtn = document.querySelector('#submit');
const cancelBtn = document.querySelector('#cancel');

openBookInputBtn.addEventListener('click', () => {
    bookInputToggle();
})

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
    bookInputToggle();
    deleteBookInputValues();
    displayBookList();
})

cancelBtn.addEventListener('click', () => {
    bookInputToggle();
    deleteBookInputValues();
})

displayBookList();