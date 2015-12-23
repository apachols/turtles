import {Store} from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';

// is this a good thing?
let text = '';

class AppStore extends Store {
  getText() {
    return text;
  }

  __onDispatch(action) {
    switch (action.type) {
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
