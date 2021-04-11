import statusChange from '../statusChange';

function statusBtnsEventListener() {
    const statusBtns = document.querySelectorAll('.statusBtns')

    statusBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            statusChange(btn, e.target.dataset.key);
        })
    })
}

export default statusBtnsEventListener;