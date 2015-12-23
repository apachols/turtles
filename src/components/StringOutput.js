'use strict';

import React, { Component } from 'react';
import AppStore from '../stores/AppStore';

class StringOutput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.onAppStoreUpdate = this.onAppStoreUpdate.bind(this);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }

  onAppStoreUpdate() {
    this.setState({text: AppStore.getText()});
  }

  componentDidMount() {
    AppStore.addListener(this.onAppStoreUpdate);
  }

  componentWillUnmount() {
    AppStore.removeListener (this.onAppStoreUpdate);
  }
}

export default StringOutput;
