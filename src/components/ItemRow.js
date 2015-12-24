'use strict';

import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class ItemRow extends Component {
  render() {
    return <ListGroupItem>{this.props.item}</ListGroupItem>;
  }
}

export default ItemRow;
