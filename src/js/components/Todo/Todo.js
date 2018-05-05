import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = ({ todo, toggleFinished, removeTodo }) => (
  <li>
    <section>
      <label className={todo.finished ? 'finished-todo' : ''}
        onClick={() => toggleFinished(todo.id)}>
        <input type="checkbox"
          checked={todo.finished}
          onClick={() => toggleFinished(todo.id)} />
        {todo.title}
      </label>
      <span className="float-right be-red"
        onClick={() => removeTodo(todo.id)}>&times;</span>
    </section>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleFinished: PropTypes.func.isRequired
};

export default Todo;
