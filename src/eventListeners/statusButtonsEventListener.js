import statusChange from '../statusChange';

function statusButtonsEventListener(button) {
    button.addEventListener('click', (e) => {
        statusChange(button, e.target.dataset.key);
    })
}

export default statusButtonsEventListener;