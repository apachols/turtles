// import * as types from '../constants/ActionTypes'

export function addItem(text) {
  return { type: 'additem', text };
}

export function removeItem(idx) {
  return { type: 'removeitem', idx };
}
