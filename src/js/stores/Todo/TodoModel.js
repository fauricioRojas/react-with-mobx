import { observable } from 'mobx';

export default class TodoModel {
  id = Date.now();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }
}
