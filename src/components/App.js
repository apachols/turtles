'use strict';

import React, { Component } from 'react';
import ItemInput from './ItemInput';
import StringOutput from './StringOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'initial'
    };
  }

  onInputChange(v) {
    this.setState({data: v});
  }

  render() {
    return <div>
      <ItemInput text={this.state.data} changeFunction={this.onInputChange.bind(this)} />
      <StringOutput text={this.state.data} />
    </div>;
  }
}

export default App;
