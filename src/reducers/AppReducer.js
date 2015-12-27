
import { combineReducers } from 'redux';

function items(state, action) {
  if (!state) {
    return [];
  }
  switch (action.type) {
  case 'additem':
    return [...state, action.text];
  case 'removeitem':
    return state.filter(
      (item, id) => {return id !== action.idx;}
    );
  default:
    return state;
  }
}

const reducer = combineReducers({
  items
});

export default reducer;
