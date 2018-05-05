import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoStatusBar from './TodoStatusBar';

@inject('todoStore')
@observer
class TodoContainer extends Component {
  render() {
    const { todoStore } = this.props;

    return (
      <section className="todo-container">
        <TodoForm addTodo={todoStore.addTodo} />
        <TodoList todos={todoStore.todos}
          toggleFinished={todoStore.toggleFinished} 
          removeTodo={todoStore.removeTodo} />
        <TodoStatusBar unfinishedTodoCount={todoStore.unfinishedTodoCount} />
      </section>
    );
  }
}

export default TodoContainer;
