import findObjectInArray from './findObjectInArray';
import myLibrary from './myLibrary';

function statusChange(btn, key) {
    if (btn.textContent == 'Read') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Not Read';
    } else if (btn.textContent == 'Reading') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Read';
    } else if (btn.textContent == 'Not Read') {
        myLibrary[findObjectInArray(key, myLibrary)].status = 'Reading';
    }

    // updateLocalStorage();
    // displayBookList();
    // statusBtnsEventListener();
    // deleteIconEventListener();
}

export default statusChange;