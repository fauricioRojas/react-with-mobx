import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = ({ todo, toggleFinished, removeTodo }) => {
  const onClick = (e, id) => {
    e.preventDefault();
    toggleFinished(id);
  };

  return (
    <li>
      <section>
        <label className={todo.finished ? 'finished-todo' : ''}
          onClick={e => onClick(e, todo.id)}>
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
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleFinished: PropTypes.func.isRequired
};

export default Todo;
