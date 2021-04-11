import displayBooks from "./displayBooks";

function refreshDisplayBooks() {
    const bookListTable = document.querySelector('#bookListTable');

    bookListTable.removeChild(bookListTable.lastChild);

    bookListTable.appendChild(displayBooks());
}

export default refreshDisplayBooks;