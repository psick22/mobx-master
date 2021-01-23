import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {
  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }

  render() {
    const { todos, _searchText } = this.props.todoStore;
    console.log(todos, _searchText);
    let searchTodos = [];
    if (_searchText) {
      searchTodos = todos.filter(
        todo =>
          todo?.title.toLowerCase().includes(_searchText.toLowerCase()) ===
          true,
      );
    }
    return (
      <div>
        {_searchText ? (
          <TodoListView
            todos={searchTodos}
            onSelectedTodo={this.onSelectedTodo}
          />
        ) : (
          <TodoListView todos={todos} onSelectedTodo={this.onSelectedTodo} />
        )}
      </div>
    );
  }
}

export default TodoListContainer;
