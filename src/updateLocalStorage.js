import myLibrary from './myLibrary';

function updateLocalStorage() {
    localStorage.setItem('myLibraryStored', JSON.stringify(myLibrary));
}

export updateLocalStorage;