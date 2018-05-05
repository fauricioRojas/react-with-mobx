import { configure } from 'mobx';
import todoStore from './Todo/TodoStore';

// only methods decorated with @action can modify your state
configure({ enforceActions: true });

export default {
  todoStore
};
