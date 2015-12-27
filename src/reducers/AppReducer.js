
import { combineReducers } from 'redux';

const initialState = ['Any old thing'];

function items(state = initialState, action) {

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
