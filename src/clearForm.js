function clearForm() {
    const authorForm = document.querySelector('#authorInput');
    const titleForm = document.querySelector('#titleInput');
    const pagesForm = document.querySelector('#pagesInput');
    const status = document.querySelector('#statusInput');

    authorForm.value = '';
    titleForm.value = '';
    pagesForm.value = '';
    status.selectedIndex = 0;
}

export default clearForm;