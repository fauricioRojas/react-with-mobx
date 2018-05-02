import React from 'react';
import { render } from 'react-dom';
import App from './js/components/App';
import TodoStore from './js/store/Todo/TodoStore';

import './scss/index.scss';

const todoStore = new TodoStore();

render(
  <App store={todoStore} />,
  document.getElementById('app')
);
