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

@observer
class TodoListView extends PureComponent {
  render() {
    const { todoItem } = this.props;
    console.log('todo', todoItem);

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
            {todoItem.length > 0 ? (
              todoItem.map(item => (
                <TableRow key={item.id}>
                  <TableCell align='center'>{item.title}</TableCell>
                  <TableCell align='center'>{item.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align='center'>Empty</TableCell>
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
