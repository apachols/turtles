'use strict';

import React, { Component } from 'react';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

class ItemRow extends Component {
  deleteItem(idx) {
    Dispatcher.dispatch({ type: 'removeitem', idx});
  }

  // Edit item text

  // Drag and Drop to nest a thing

  // Return an item to the parent list

  // Click to show the list of this item instead of the current list

  render() {
    return (
      <ListGroupItem>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <i className="fa fa-trash" onClick={()=>{this.deleteItem(this.props.idx);} }></i>
          </Col>
          <Col xs={6} md={4}>
            {this.props.item}
          </Col>
          <Col xs={6} md={4}>
            {this.props.idx}
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default ItemRow;
