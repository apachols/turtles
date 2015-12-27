'use strict';
// react imports
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// bootstrap components
import { ListGroup } from 'react-bootstrap';
// my components
import ItemRow from './ItemRow';

class ItemList extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {dispatch} = this.props;
    const {store} = this.context;
    return (
      <ListGroup>
      {
        store.getState().items.map((item, i) => (
          <ItemRow item={item} idx={i} key={i} deleteItem={
            (idx) => {
              dispatch({ type: 'removeitem', idx});
            }
          }/>
        ))
      }
      </ListGroup>
    );
  }
}
ItemList.contextTypes = {
  store: PropTypes.object
};

export default connect()(ItemList);
