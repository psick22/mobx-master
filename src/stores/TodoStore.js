import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _todo = {}; // id, title, date
  get todo() {
    return this._todo;
  }

  @observable
  _todos = [];

  get todos() {
    return this._todos;
  }

  @action
  setTodoProps(name, value) {
    this._todo = {
      ...this._todo,
      [name]: value,
    };
  }

  // add 버튼을 클릭했을때 실행되게함 (todo를 받아서 todos 리스트로 넣어주는 기능)
  @action
  addTodo(todo) {
    this._todos = [...this._todos, todo];
    this._todo = {};
  }
}

export default new TodoStore();
