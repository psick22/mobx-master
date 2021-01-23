import 'date-fns';
import React, { PureComponent } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { observer } from 'mobx-react';

@observer
class TodoEditFormView extends PureComponent {
  constructor(props) {
    super(props);
    this.testRef = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(event) {
    if (event.which === 13) {
      console.log(this.testRef);
      this.testRef.current.focus();
      this.props.onAddTodo();
    }
  }

  render() {
    const {
      todo,
      onSetTodoProps,
      onAddTodo,
      onUpdateTodo,
      onRemoveTodo,
    } = this.props;

    return (
      <form noValidate>
        <Grid container xs={12} spacing={3}>
          <Grid item={true} xs={3}>
            <TextField
              inputRef={this.testRef}
              autoFocus={true}
              margin='normal'
              id='outlined-basic'
              label='Title'
              variant='standard'
              value={todo?.title ? todo.title : ''}
              onKeyDown={this.handleKeyDown}
              onChange={event => onSetTodoProps('title', event.target.value)}
            />
          </Grid>
          <Grid item={true} xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-dialog'
                label='Date'
                format='yyyy-MM-dd'
                onKeyDown={this.handleKeyDown}
                value={todo && todo.date ? todo.date : null}
                onChange={date => onSetTodoProps('date', date?.valueOf())}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={onAddTodo}
            variant='contained'
            color='primary'
            startIcon={<SaveIcon />}
          >
            Add
          </Button>
          &nbsp;&nbsp;
          <Button
            variant='contained'
            color='default'
            startIcon={<UpdateIcon />}
            onClick={onUpdateTodo}
          >
            Update
          </Button>
          &nbsp;&nbsp;
          <Button
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon />}
            onClick={onRemoveTodo}
          >
            Delete
          </Button>
          &nbsp;&nbsp;
        </Grid>
      </form>
    );
  }
}
export default TodoEditFormView;
