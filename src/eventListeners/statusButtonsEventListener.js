import refreshDisplayBooks from '../refreshDisplayBooks';
import statusChange from '../statusChange';

function statusButtonsEventListener(button) {
    button.addEventListener('click', (e) => {
        statusChange(button, e.target.dataset.key);
        refreshDisplayBooks();
    })
}

export default statusButtonsEventListener;