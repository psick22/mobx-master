import React, { PureComponent } from 'react';

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';
import { observer } from 'mobx-react';

import moment from 'moment';

@observer
class TodoListView extends PureComponent {
  render() {
    const { todos, onSelectedTodo } = this.props;

    console.log('todo', todos);

    return (
      <TableContainer component={Paper}>
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(todos) && todos.length ? (
              todos.map(todo => (
                <TableRow
                  key={todo.id}
                  onClick={() => onSelectedTodo(todo)}
                  hover
                >
                  <TableCell align='center'>{todo.title}</TableCell>
                  <TableCell align='center'>
                    {moment(todo.date).format('YYYY-MM-DD HH:MM')}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align='center'>Empty</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TodoListView;
