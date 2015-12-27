'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// my components
import ItemInput from './ItemInput';
import ItemList from './ItemList';
// actions
import {addItem} from '../actions';

// Nuke all semicolons forever
// Edit item text
// Drag and Drop to nest a thing
// Return an item to the parent list
// Click to show the list of this item instead of the current list

class App extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className="container">

        <ItemInput onClick={ text => {
          return dispatch(addItem(text));
        }}/>

        <ItemList />

      </div>
    );
  }
}

export default connect()(App);
