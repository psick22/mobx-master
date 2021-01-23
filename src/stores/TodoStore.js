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

  @observable
  _searchText = '';
  get searchText() {
    return this._searchText;
  }

  @action
  setSearchText(text) {
    this._searchText = text;
  }

  @action
  setTodoProps(name, value) {
    console.log('set');
    this._todo = {
      ...this._todo,
      [name]: value,
    };
  }

  // add 버튼을 클릭했을때 실행되게함 (todo를 받아서 todos 리스트로 넣어주는 기능)
  @action
  addTodo(todo) {
    if (!todo.title) {
      todo.title = 'Untitled';
    }
    this._todos.push(todo);
    this._todo = {};
  }

  @action
  selectedTodo(todo) {
    this._todo = todo;
  }

  @action
  updateTodo() {
    let isValid = false;

    Object.keys(this._todo).forEach(key => {
      if (key === 'id') {
        isValid = true;
      } else return;
    });
    if (isValid) {
      let foundTodo =
        this._todo && this._todos.find(todo => todo.id === this._todo.id);

      foundTodo.title = this._todo.title;
      foundTodo.date = this._todo.date;
      this._todo = {};
    }
  }

  @action
  removeTodo() {
    let isValid = false;

    Object.keys(this._todo).forEach(key => {
      if (key === 'id') {
        isValid = true;
      } else return;
    });

    if (isValid) {
      let index =
        this._todo && this._todos.findIndex(todo => todo.id === this._todo.id);
      if (index > -1) {
        this._todos.splice(index, 1);
      }
      console.log('remove');
      this._todo = {};
    }
  }
}

export default new TodoStore();
