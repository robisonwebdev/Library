import myLibrary from '../myLibrary';
import findObjectInArray from '../findObjectInArray';
import refreshDisplayBooks from '../refreshDisplayBooks';
import deleteObjectInArray from '../deleteObjectInArray';

function deleteButtonEventListener(button) {
    button.addEventListener('click', (e) => {
        deleteObjectInArray(myLibrary, findObjectInArray(e.target.dataset.key, myLibrary), 1);
        console.log(e.target.dataset.key);
        refreshDisplayBooks();
        console.log(myLibrary);
    })
}

export default deleteButtonEventListener;