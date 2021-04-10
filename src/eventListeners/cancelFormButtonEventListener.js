import bookFormToggle from "../bookFormToggle";

function cancelFormButtonEventListener() {
    const cancelFormButton = document.querySelector('#cancel');

    cancelFormButton.addEventListener('click', () => {
        bookFormToggle();
    });
}

export default cancelFormButtonEventListener;