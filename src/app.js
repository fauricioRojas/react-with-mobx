import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './js/components/App';
import stores from './js/stores';

import './scss/index.scss';

// For easier debugging
window._____APP_STATE_____ = stores;

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app')
);
