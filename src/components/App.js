'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// my components
import ItemInput from './ItemInput';
import ItemList from './ItemList';

class App extends Component {

  render() {
    console.log(this.props);
    const { dispatch } = this.props;
    return (
      <div className="container">

        <ItemInput onClick={ text => {
          return dispatch({ type: 'additem', text });
        } }/>

        <ItemList />

      </div>
    );
  }
}

export default connect()(App);
