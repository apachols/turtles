'use strict';

import React, { Component } from 'react';
import Dispatcher from '../dispatcher/Dispatcher';

class ItemInput extends Component {

  constructor(props) {
    super(props);
  }

  handleValueChange(e) {
    // Native react style of component information sharing
    this.props.changeFunction(e.target.value);

    // Flux style of component information sharing
    Dispatcher.dispatch({ type: 'UPDATE', text: e.target.value });
  }

  render() {
    return <div>
      <input type="text" onChange={ this.handleValueChange.bind(this) }/>
      <h1>{this.props.text}</h1>
    </div>;
  }
}

export default ItemInput;
