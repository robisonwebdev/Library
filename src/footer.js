function footer(address, name) {
    const div = document.createElement('div');
    const small = document.createElement('small');
    const a = document.createElement('a');

    div.setAttribute('id', 'footer');
    a.setAttribute('href', address);
    a.setAttribute('target', '_blank');

    small.innerText = 'Developed by ';
    a.innerText = name;

    small.appendChild(a);
    div.appendChild(small);

    return div;
}

export default footer;