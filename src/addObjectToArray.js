import myLibrary from './myLibrary';
import book from './bookConstructor';

function addObjectToArray() {
    const author = document.querySelector('#authorInput').value;
    const title = document.querySelector('#titleInput').value;
    const pages = document.querySelector('#pagesInput').value;
    const status = document.querySelector('#statusInput').value;
    const dataKey = `${author.replace(/ /g, '')}_${pages}`;

    const newBook = new book(author, title, pages, status, dataKey);

    myLibrary.push(newBook);
}

export default addObjectToArray;