import {Store} from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

// is this a good thing?
let items = [];

class AppStore extends Store {

  getItems() {
    return items;
  }

  addItem(itemText) {
    items.push(itemText);
  }

  removeItem(itemIndex) {
    items.splice(itemIndex, 1);
  }

  __onDispatch(action) {
    switch (action.type) {

    case 'additem':
      this.addItem(action.text);
      break;

    case 'removeitem':
      this.removeItem(action.idx);
      break;

    default:
      break;
    }

    this.__emitChange();
  }

}

export default new AppStore(Dispatcher);
