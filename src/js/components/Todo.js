import React from 'react';
import { PropTypes } from 'prop-types';
import { observer } from 'mobx-react';

const Todo = observer(({ todo, toggleFinished }) => {
  console.log(`<Todo /> ${todo.title}`);
  return (
    <li>
      <input type="checkbox"
        checked={todo.finished}
        onClick={() => toggleFinished(todo.id)} />
      {todo.title}
    </li>
  );
});

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleFinished: PropTypes.func.isRequired
};

export default Todo;
