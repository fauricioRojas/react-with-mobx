import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Todo from './Todo';
import TodoForm from './TodoForm';

@inject('todoStore')
@observer
class TodoList extends Component {
  render() {
    console.log('<TodoList />');
    const { todoStore } = this.props;

    return (
      <section>
        <TodoForm addTodo={todoStore.addTodo} />
        <ul>
          {todoStore.todos.map(todo => (
            <Todo todo={todo}
              toggleFinished={todoStore.toggleFinished}
              key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoStore.unfinishedTodoCount}
      </section>
    );
  }
}

export default TodoList;
