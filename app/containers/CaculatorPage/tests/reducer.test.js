import { fromJS } from 'immutable';

import caculatorReducer from '../reducer';
import { changeExpression } from '../actions';
describe('caculate reducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      expression: [],
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(caculatorReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeExpression action correctly', () => {
    const fixture = [];
    const expectedResult = state.set('expression', fromJS(fixture));

    expect(caculatorReducer(state, changeExpression(fixture))).toEqual(
      expectedResult,
    );
  });
});
