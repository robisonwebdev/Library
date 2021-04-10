import bookListTable from "./bookListTable";

function bookListContainer() {
    const bookListContainer = document.createElement('div');

    bookListContainer.setAttribute('id', 'bookListContainer');

    bookListContainer.appendChild(bookListTable());

    return bookListContainer;
}

export default bookListContainer;