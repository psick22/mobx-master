import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {
  render() {
    const { todoStore } = this.props;
    // console.log(1, todoStore.todos); //array
    return (
      <div>
        <TodoListView todoItem={todoStore.todos} />
      </div>
    );
  }
}

export default TodoListContainer;
