import React from 'react';
import { PropTypes } from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleFinished, removeTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo todo={todo}
        toggleFinished={toggleFinished}
        removeTodo={removeTodo}
        key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleFinished: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;
