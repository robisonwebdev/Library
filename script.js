const myBooks = (function() {
    // Array to store book objects
    let myLibrary = [
        {
            author: 'David Ratrick',
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

    class book {
        constructor(author, title, pages, status, dataKey) {
            this.author = author;
            this.title = title;
            this.pages = pages;
            this.status = status;
            this.dataKey = dataKey;
        }
    }

    function addToLibrary() {
        const author = document.querySelector('#authorForm').value;
        const title = document.querySelector('#titleForm').value;
        const pages = document.querySelector('#pagesForm').value;
        const status = document.querySelector('#status').value;
        const dataKey = `${author.replace(/ /g, '')}_${pages}`;

        const newBook = new book(author, title, pages, status, dataKey);

        myLibrary.push(newBook);

    }

    function deleteFromLibrary(start, end) {
        myLibrary.splice(start, end);
    }

    return {
        myLibrary: myLibrary,
        add: addToLibrary,
        delete: deleteFromLibrary,
    }
})();

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

function deleteIconEventListener() {
    const deleteIcon = document.querySelectorAll('.la-trash');

    deleteIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            // deleteObjectInArray(myBooks.myLibrary, findObjectInArray(e.target.dataset.key, myBooks.myLibrary), 1);
            // myBooks.delete(findObjectInArray(e.target.dataset.key, myBooks.myLibrary), 1)
            deleteBook(e);
        })
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

function deleteBook(e) {
    myBooks.delete(findObjectInArray(e.target.dataset.key, myBooks.myLibrary), 1);

    // updateLocalStorage();
    displayBookList();
    statusBtnsEventListener();
    deleteIconEventListener();
}

// function deleteObjectInArray(array, start, end) {
//     array.splice(start, end);

//     // updateLocalStorage();
//     displayBookList();
//     statusBtnsEventListener();
//     deleteIconEventListener();
// }

function displayBookList() {
    deleteBookList();

    myBooks.myLibrary.forEach((book) => {
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
        myBooks.myLibrary[findObjectInArray(key, myBooks.myLibrary)].status = 'Not Read'; 
    } else if (btn.textContent == 'Reading') {
        myBooks.myLibrary[findObjectInArray(key, myBooks.myLibrary)].status = 'Read';
    } else if (btn.textContent == 'Not Read') {
        myBooks.myLibrary[findObjectInArray(key, myBooks.myLibrary)].status = 'Reading';
    }

    // updateLocalStorage();
    displayBookList();
    statusBtnsEventListener();
    deleteIconEventListener();
}

// function checkForLocalStorage() {
//     if (!localStorage.getItem('myLibraryStored')) {
//         localStorage.setItem('myLibraryStored', JSON.stringify(myLibrary));
//     } else {
//         myLibrary = JSON.parse(localStorage.getItem('myLibraryStored'));
//     }
// }

// function updateLocalStorage() {
//     localStorage.setItem('myLibraryStored', JSON.stringify(myLibrary));
// }

// checkForLocalStorage();
displayBookList();
statusBtnsEventListener();
deleteIconEventListener();


// Eventlisteners 
const openBookInputBtn = document.querySelector('#openBookInputBtn');
const submitBtn = document.querySelector('#submit');
const cancelBtn = document.querySelector('#cancel');


openBookInputBtn.addEventListener('click', () => {
    bookInputToggle();
})

submitBtn.addEventListener('click', () => {
    myBooks.add();
    // updateLocalStorage();
    bookInputToggle();
    deleteBookInputValues();
    displayBookList();
    statusBtnsEventListener();
    deleteIconEventListener();
})

cancelBtn.addEventListener('click', () => {
    bookInputToggle();
    deleteBookInputValues();
})