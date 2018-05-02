import React from 'react';
import { render } from 'react-dom';
import App from './js/components/App';

import './scss/index.scss';

render(
  <App message="Mobx-React" />,
  document.getElementById('app')
);
