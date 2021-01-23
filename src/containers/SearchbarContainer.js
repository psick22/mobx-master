import React, { Component } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind
@observer
class SearchbarContainer extends Component {
  onSetSearchText(text) {
    this.props.todoStore.setSearchText(text);
  }

  render() {
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={e => this.onSetSearchText(e.target.value)}
      />
    );
  }
}

export default SearchbarContainer;
