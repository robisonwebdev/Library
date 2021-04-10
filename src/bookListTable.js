import displayBooks from "./displayBooks";

function bookListTable() {
    const bookListTable = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const title = document.createElement('th');
    const author = document.createElement('th');
    const pages = document.createElement('th');
    const status = document.createElement('th');
    const del = document.createElement('th');

    bookListTable.setAttribute('id', 'bookListTable');
    pages.setAttribute('class', 'centerAlign');
    status.setAttribute('class', 'centerAlign');
    del.setAttribute('class', 'centerAlign');

    title.innerText = 'Title';
    author.innerText = 'Author';
    pages.innerText = 'Pages';
    status.innerText = 'Status';
    del.innerText = 'Delete';

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(status);
    tr.appendChild(del);
    thead.appendChild(tr);
    bookListTable.appendChild(thead);
    bookListTable.appendChild(displayBooks());

    return bookListTable;
}

export default bookListTable;