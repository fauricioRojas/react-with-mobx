import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';

const App = ({ store }) => (
  <section>
    <TodoList store={store} />
  </section>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
