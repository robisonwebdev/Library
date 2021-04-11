import header from './header'
import addBookButton from './addBookButton'
import bookListContainer from './bookListContainer';

function container() {
    const div = document.createElement('div');

    div.setAttribute('id', 'container');

    div.appendChild(header('Library'));
    div.appendChild(bookListContainer());
    div.appendChild(addBookButton());

    return div;
}

export default container;