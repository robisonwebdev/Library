import container from "./container";
import footer from "./footer";

const body = document.querySelector('body');

body.appendChild(container());
body.appendChild(footer('https://github.com/robisonwebdev', 'David Robison'));