/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_EXPRESSION } from './constants';

// The initial state of the App
export const initialState = fromJS({
  expression: [],
});

function caculatorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EXPRESSION:
      return state.set('expression', fromJS(action.exp));
    default:
      return state;
  }
}

export default caculatorReducer;
