import myLibrary from './myLibrary';

function checkForLocalStorage() {
    if (!localStorage.getItem('myLibraryStored')) {
        localStorage.setItem('myLibraryStored', JSON.stringify(myLibrary));
    } else {
        myLibrary = JSON.parse(localStorage.getItem('myLibraryStored'));
    }
}

export default checkForLocalStorage;