import addObjectToArray from "../addObjectToArray";
import refreshDisplayBooks from '../refreshDisplayBooks';
import bookFormToggle from '../bookFormToggle';
import clearForm from "../clearForm";

function formSubmitEventListener() {
    const submit = document.querySelector('#submit');

    submit.addEventListener('click', () => {
        addObjectToArray();
        clearForm();
        refreshDisplayBooks();
        bookFormToggle();
    })
}

export default formSubmitEventListener;