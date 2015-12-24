'use strict';

import React, { Component } from 'react';
import ItemInput from './ItemInput';
import StringOutput from './StringOutput';

import ItemRow from './ItemRow';

import AppStore from '../stores/AppStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.onAppStoreUpdate = this.onAppStoreUpdate.bind(this);
  }

  componentDidMount() {
    AppStore.addListener(this.onAppStoreUpdate);
  }

  componentWillUnmount() {
    AppStore.removeListener (this.onAppStoreUpdate);
  }

  onAppStoreUpdate() {
    console.log('on app store update');
    this.setState({items: AppStore.getItems()});
  }

  render() {
    return (
      <div>
        <StringOutput />
        <ItemInput />
        {
          // In lieu of a collection component for the time being
          this.state.items.map((item, i) => (
            <ItemRow item={item} key={i}/>
          ))
        }
      </div>
    );
  }
}

export default App;
