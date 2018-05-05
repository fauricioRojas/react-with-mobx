import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const TodoStatusBar = observer(({ unfinishedTodoCount }) => {
  const getLabel = () => {
    switch (unfinishedTodoCount) {
      case 0:
        return 'Nothing to do';
      case 1:
        return '1 task left';
      default:
        return `${unfinishedTodoCount} tasks left`;
    }
  };

  return (
    <section className="unfinished-todo-count">
      <label>{getLabel()}</label>
    </section>
  );
});

TodoStatusBar.propTypes = {
  unfinishedTodoCount: PropTypes.number.isRequired
};

export default TodoStatusBar;
