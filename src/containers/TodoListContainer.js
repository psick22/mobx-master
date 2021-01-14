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
    const { todos } = this.props.todoStore;
    // console.log(1, todoStore.todos); //array

    return (
      <div>
        <TodoListView todos={todos} onSelectedTodo={this.onSelectedTodo} />
      </div>
    );
  }
}

export default TodoListContainer;
