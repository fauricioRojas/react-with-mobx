import { configure } from 'mobx';
import TodoStore from './Todo/TodoStore';

// only methods decorated with @action can modify your state
configure({ enforceActions: true });

export default {
  todoStore: TodoStore
};
