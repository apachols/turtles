'use strict';

import React, { Component } from 'react';
// my components
import ItemInput from './ItemInput';
import ItemRow from './ItemRow';
// stores
import AppStore from '../stores/AppStore';
// bootstrap components
import { ListGroup } from 'react-bootstrap';

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
    this.setState({items: AppStore.getItems()});
  }

  render() {
    return (
      <div className="container">
        <ItemInput />
        <ListGroup>
        {
          // In lieu of a collection component for the time being
          this.state.items.map((item, i) => (
            <ItemRow item={item} key={i}/>
          ))
        }
        </ListGroup>
      </div>
    );
  }
}

export default App;
