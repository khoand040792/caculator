import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCaculator = state => state.get('caculator', initialState);

const selectExpression = () =>
  createSelector(selectCaculator, caculateState =>
    caculateState.get('expression'),
  );

export { selectCaculator, selectExpression };
