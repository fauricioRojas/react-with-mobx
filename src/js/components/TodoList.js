import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';
import TodoForm from './TodoForm';

@observer
class TodoList extends Component {
  render() {
    const { store } = this.props;

    return (
      <section>
        <TodoForm store={store} />
        <ul>
          {store.todos.map(todo => (
            <Todo todo={todo}
              store={store}
              key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </section>
    );
  }
}

export default TodoList;
