import bookFormToggle from "../bookFormToggle";
import clearForm from "../clearForm";

function cancelFormButtonEventListener() {
    const cancelFormButton = document.querySelector('#cancel');

    cancelFormButton.addEventListener('click', () => {
        clearForm();
        bookFormToggle();
    });
}

export default cancelFormButtonEventListener;