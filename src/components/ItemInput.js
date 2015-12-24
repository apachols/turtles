'use strict';

import React, { Component } from 'react';
import Dispatcher from '../dispatcher/Dispatcher';

class ItemInput extends Component {

  constructor(props) {
    super(props);
  }

  handleValueChange(e) {
    Dispatcher.dispatch({ type: 'UPDATE', text: e.target.value });
  }

  handleButtonClick() {
    Dispatcher.dispatch({ type: 'additem', text: this.refs.input.value });
  }

  render() {
    return <div>

      <input type="text" onChange={ this.handleValueChange.bind(this) } ref="input"/>

      <button onClick={ this.handleButtonClick.bind(this) }>Add Item</button>

    </div>;
  }
}

export default ItemInput;
