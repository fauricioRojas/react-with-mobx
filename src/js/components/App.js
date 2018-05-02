import React from 'react';
import PropTypes from 'prop-types';

const App = ({ message }) => (
  <section>Hello {message}!</section>
);

App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
