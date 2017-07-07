import getGreeting from './js/helper';

import './styles/index.scss';

const element = document.createElement('h1');
element.innerHTML = getGreeting('app');
document.body.appendChild(element);
