import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tablesSample state domain
 */

const selectTablesSampleDomain = state => state.tablesSample || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TablesSample
 */

const makeSelectTablesSample = () =>
  createSelector(
    selectTablesSampleDomain,
    substate => substate,
  );

export default makeSelectTablesSample;
export { selectTablesSampleDomain };
