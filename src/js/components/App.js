import React from 'react';
import DevTools from 'mobx-react-devtools';
import TodoContainer from './Todo/TodoContainer';

const App = () => (
  <section className="container">
    <section className="app-title">
      <label>My ToDo List</label>
    </section>
    <TodoContainer />
    <DevTools />
  </section>
);

export default App;
