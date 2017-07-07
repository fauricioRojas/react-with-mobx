import getGreeting from './js/helper';

const element = document.createElement('h1');
element.innerHTML = getGreeting('vendor');
document.body.appendChild(element);
