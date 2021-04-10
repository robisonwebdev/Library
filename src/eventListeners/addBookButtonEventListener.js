import bookFormToggle from '../bookFormToggle';

function addBookButtonEventListener(target) {
    target.addEventListener('click', () => {
        bookFormToggle();
    })
}

export default addBookButtonEventListener;