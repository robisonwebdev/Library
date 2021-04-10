import addBookButtonEventListener from './eventListeners/addBookButtonEventListener';
import bookForm from "./bookForm";

function addBookButton() {
    const div = document.createElement('div');
    const button = document.createElement('button');

    div.setAttribute('id', 'addBookDiv');
    button.setAttribute('id', 'addBookButton');
    button.setAttribute('class', 'bookFormButtons');
    button.setAttribute('type', 'button');

    button.innerText = 'Add Book';

    addBookButtonEventListener(button);

    div.appendChild(button);
    div.appendChild(bookForm());

    return div;
}

export default addBookButton;