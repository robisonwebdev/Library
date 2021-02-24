// Array to store book objects
let myLibrary = [
    {
        author: 'David Robison',
        title: 'Wind Hunter',
        pages: '523',
        status: 'Read',
        dataKey: 'DavidRobison_523',
    },
    {
        author: 'Patrick Rothfuss',
        title: 'The Name of the Wind',
        pages: '662',
        status: 'Reading',
        dataKey: 'PatrickRothfuss_662',
    },
    {
        author: 'Robert Jordan',
        title: 'The Great Hunt',
        pages: '706',
        status: 'Not Read',
        dataKey: 'RobertJordan_706',
    },
];

// Book Constructor
function Book(author, title, pages, status, dataKey) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.dataKey = dataKey;
}

// Function that adds book to myLibrary Array
function addBookToLibrary() {
    const author = document.querySelector('#authorForm').value;
    const title = document.querySelector('#titleForm').value;
    const pages = document.querySelector('#pagesForm').value;
    const status = document.querySelector('#status').value;
    const dataKey = `${author.replace(/ /g, '')}_${pages}`;

    const newBook = new Book(author, title, pages, status, dataKey);

    myLibrary.push(newBook);
}

addBookToLibrary.prototype = Object.create(Book.prototype);

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

function displayBookList() {
    deleteBookList();

    myLibrary.forEach((book) => {
        const bookListTBody = document.querySelector('tbody');
        const bookListTR = document.createElement('tr');
        const titleTD = document.createElement('td');
        const authorTD = document.createElement('td');
        const pagesTD = document.createElement('td');
        const statusTD = document.createElement('td');
        const statusBtn = document.createElement('button');
        const deleteTD = document.createElement('td');
        const deleteBtn = document.createElement('i');

        bookListTR;
        titleTD.innerText = book.title;
        authorTD.innerText = book.author;
        pagesTD.innerText = book.pages;
        pagesTD.classList.add('centerAlign');
        statusTD.classList.add('centerAlign');
        statusBtn.setAttribute('type', 'button');
        statusBtn.setAttribute('class', 'statusBtns');
        statusBtn.setAttribute('data-key', book.dataKey)
        statusBtn.innerText = book.status;
        deleteTD.classList.add('centerAlign');
        deleteBtn.setAttribute('class', 'las la-trash');
        deleteBtn.setAttribute('data-key', book.dataKey);

        statusTD.appendChild(statusBtn);
        deleteTD.appendChild(deleteBtn);
        bookListTR.appendChild(titleTD);
        bookListTR.appendChild(authorTD);
        bookListTR.appendChild(pagesTD);
        bookListTR.appendChild(statusTD);
        bookListTR.appendChild(deleteTD);
        bookListTBody.appendChild(bookListTR);
    })
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

function deleteBookList() {
    const bookListTBody = document.querySelector('tbody');

    bookListTBody.innerHTML = '';
}

function deleteObjectInArray(array, start, end) {
    array.splice(start, end);
}

function findObjectInArray(key, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].dataKey == key) {
            return i;
        }
    }
}

function statusBtnsEventListener() {
    const statusBtns = document.querySelectorAll('.statusBtns')

    statusBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            statusChange(btn, e.target.dataset.key);
        })
    })
}

function statusChange(btn, key) {
    if (btn.textContent == 'Read') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Reading';    
    } else if (btn.textContent == 'Reading') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Not Read';
    } else if (btn.textContent == 'Not Read') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Read';
    }

    displayBookList();
    statusBtnsEventListener();
}

displayBookList();
statusBtnsEventListener();


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






// OLD CODE

// function editBtnsEventListeners() {
//     const editBtns = document.querySelectorAll('.las');

//     editBtns.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//             // deleteObjectInArray(myLibrary, findObjectInArray(e.target.dataset.key, myLibrary), 1);  // For Test, remove later
//             bookInputToggle();
//             editBook(myLibrary, findObjectInArray(e.target.dataset.key, myLibrary));
//         })
//     })
// }

// function editBook(array, position) {
//     const header = document.querySelector('#formHeader');
//     const author = document.querySelector('#authorForm');
//     const title = document.querySelector('#titleForm');
//     const pages = document.querySelector('#pagesForm');
//     const status = document.querySelector('#status');

//     header.innerText = 'Edit Book';

//     author.value = array[position].author;
//     title.value = array[position].title;
//     pages.value = array[position].pages;
//     status.value = array[position].status;
// }