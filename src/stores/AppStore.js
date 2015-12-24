import {Store} from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

// is this a good thing?
let text = '';

let items = [];

class AppStore extends Store {
  getText() {
    return text;
  }

  getItems() {
    return items;
  }

  addItem(itemText) {
    items.push(itemText);
    console.log(items);
  }

  __onDispatch(action) {
    switch (action.type) {

    case 'additem':
      this.addItem(action.text);
      break;

    case 'UPDATE':
      text = action.text;
      break;

    default:
      break;
    }

    this.__emitChange();
  }

}

export default new AppStore(Dispatcher);
