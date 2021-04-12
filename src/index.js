import container from "./container";
import cancelFormButtonEventListener from "./eventListeners/cancelFormButtonEventListener";
import formSubmitEventListener from "./eventListeners/formSubmitEventListener";
import footer from "./footer";

const body = document.querySelector('body');

body.appendChild(container());
body.appendChild(footer('https://github.com/robisonwebdev', 'David Robison'));

formSubmitEventListener();
cancelFormButtonEventListener();