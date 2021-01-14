import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generatId from '../IDGenerator';
// bind 뭔지 공부

@inject('todoStore')
@autobind
@observer
class TodoEditFormContainer extends Component {
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  onAddTodo(todo) {
    console.log(todo);
    const newTodo = { ...todo, id: generatId(5) };
    console.log(newTodo);

    this.props.todoStore.addTodo(newTodo);
  }

  render() {
    const { todoStore } = this.props;

    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}
        onAddTodo={this.onAddTodo}
      />
    );
  }
}

export default TodoEditFormContainer;
