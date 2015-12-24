'use strict';

import React, { Component } from 'react';

import Dispatcher from '../dispatcher/Dispatcher';

import { Input, Button } from 'react-bootstrap';


class ItemInput extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    Dispatcher.dispatch({ type: 'additem', text: this.refs.input.getInputDOMNode().value });
    this.refs.input.getInputDOMNode().value = '';
  }

  render() {
    return (
      <form ref="form" onSubmit={ (e)=>{this.handleSubmit(e);} }>
        <Input label="Add Item" type="text" placeholder="Enter Item Text" ref="input"/>
        <Button type="submit" bsStyle="primary">Add Item</Button>
      </form>
    );
  }
}

export default ItemInput;
