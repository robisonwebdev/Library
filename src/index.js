import footer from "./footer";
import header from "./header";

const content = document.querySelector('#content');

content.appendChild(header('Library'));
content.appendChild(footer('https://github.com/robisonwebdev', 'David Robison'));