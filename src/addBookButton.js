function addBookButton() {
    const div = document.createElement('div');
    const button = document.createElement('button');

    div.setAttribute('id', 'addBookDiv');
    button.setAttribute('id', 'addBookButton');
    button.setAttribute('class', 'libraryFormButtons');
    button.setAttribute('type', 'button');

    button.innerText = 'Add Book';

    div.appendChild(button);

    return div;
}

export default addBookButton;