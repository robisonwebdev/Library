function header(text) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');

    div.setAttribute('id', 'header');
    h1.setAttribute('id', 'headerTitle');

    h1.innerText = text;

    div.appendChild(h1);

    return div;
}

export default header;