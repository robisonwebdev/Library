import deleteButtonEventListener from './eventListeners/deleteButtonEventListener';
import statusButtonsEventListener from './eventListeners/statusButtonsEventListener';
import myLibrary from './myLibrary';

function displayBooks() {
    const bookListTBody = document.createElement('tbody');

    myLibrary.forEach((book) => {

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

        statusButtonsEventListener(statusBtn);
        deleteButtonEventListener(deleteBtn);

        statusTD.appendChild(statusBtn);
        deleteTD.appendChild(deleteBtn);
        bookListTR.appendChild(titleTD);
        bookListTR.appendChild(authorTD);
        bookListTR.appendChild(pagesTD);
        bookListTR.appendChild(statusTD);
        bookListTR.appendChild(deleteTD);
        bookListTBody.appendChild(bookListTR);
    })

    return bookListTBody;
}

export default displayBooks;