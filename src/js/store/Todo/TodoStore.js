import { computed, observable, action, configure } from 'mobx';
import TodoModel from './TodoModel';

configure({ enforceActions: true });

export default class TodoStore {
  @observable todos = [];

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title));
  }

  @action
  toggleFinished(id) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
      }
    })
  }
}
