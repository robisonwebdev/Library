function bookFormToggle() {
    const bookFormDiv = document.querySelector('#bookFormDiv');
    const addBookButton = document.querySelector('#addBookButton');

    if (bookFormDiv.style.display === 'none') {
        bookFormDiv.style.display = 'flex';
        addBookButton.classList.add('removeDisplay');
    } else {
        bookFormDiv.style.display = 'none';
        addBookButton.classList.remove('removeDisplay');
    }
}

export default bookFormToggle;