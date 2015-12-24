
import { combineReducers } from 'redux';

function items(state, action) {
  if (!state) {
    return [];
  }
  console.log(state);
  switch (action.type) {
  case 'additem':
    return [...state, action.text];
  case 'removeitem':
    return { items: state.filter(
      item => {return item.id !== action.idx;}
    )};
  default:
    return state;
  }
}

const reducer = combineReducers({
  items
});

export default reducer;
