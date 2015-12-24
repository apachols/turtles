'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// my components
// import ItemRow from './ItemRow';
import ItemInput from './ItemInput';

// bootstrap components
// import { ListGroup } from 'react-bootstrap';

class App extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className="container">
        <ItemInput onClick={ text => {
          return dispatch({ type: 'additem', text });
        } }/>
      </div>
    );
  }
}

// function select(state) {
//   return {
//     items: state.items
//   };
// }

export default connect()(App);

/*
        <ListGroup>
        {
          // In lieu of a collection component for the time being
          this.props.items.map((item, i) => (
            <ItemRow item={item} idx={i} key={i}/>
          ))
        }
        </ListGroup>
*/
