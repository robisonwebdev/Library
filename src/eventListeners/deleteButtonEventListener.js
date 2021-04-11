import myLibrary from '../myLibrary';
import findObjectInArray from '../findObjectInArray';
import refreshDisplayBooks from '../refreshDisplayBooks';
import deleteObjectInArray from '../deleteObjectInArray';

function deleteButtonEventListener(button) {
    button.addEventListener('click', (e) => {
        deleteObjectInArray(myLibrary, findObjectInArray(e.target.dataset.key, myLibrary), 1);
        refreshDisplayBooks();
    })
}

export default deleteButtonEventListener;