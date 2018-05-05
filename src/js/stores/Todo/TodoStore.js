import { computed, observable, action } from 'mobx';
import TodoModel from './TodoModel';

class TodoStore {
  @observable todos = [];

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action.bound addTodo(title) {
    this.todos.push(new TodoModel(title));
  }

  @action.bound removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @action.bound toggleFinished(id) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
      }
    });
  }
}

export default new TodoStore();
