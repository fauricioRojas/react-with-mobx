import React from 'react';
import { PropTypes } from 'prop-types';
import { observer } from 'mobx-react';

const Todo = observer(({ todo, store }) => (
  <li>
    <input type="checkbox"
      checked={todo.finished}
      onClick={() => store.toggleFinished(todo.id)} />
    {todo.title}
  </li>
));

Todo.propTypes = {
  store: PropTypes.object.isRequired
};

export default Todo;
