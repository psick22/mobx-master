import { observable, action, computed, makeObservable, toJS } from 'mobx';

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

  @computed
  get todos() {
    return toJS(this._todos);
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
    this._todos.push(todo);
  }

  @action
  selectedTodo(todo) {
    this._todo = todo;
  }

  @action
  updateTodo() {
    let foundTodo = this._todos.find(todo => todo.id === this._todo.id);

    foundTodo.title = this._todo.title;
    foundTodo.date = this._todo.date;

    // 업데이트 되면 input 폼의 밸류를 제거해주는 것을 추가해야할듯
  }
}

export default new TodoStore();
