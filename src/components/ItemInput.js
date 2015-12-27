'use strict';

import React, { Component } from 'react';

import { Input, Button } from 'react-bootstrap';

export default class ItemInput extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const node = this.refs.input.getInputDOMNode();
    const text = node.value.trim();
    this.props.onClick(text);
    node.value = '';
    node.focus();
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
