import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the theLayout state domain
 */

const selectTheLayoutDomain = state => state.theLayout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TheLayout
 */

const makeSelectTheLayout = () =>
  createSelector(
    selectTheLayoutDomain,
    substate => substate,
  );

export default makeSelectTheLayout;
export { selectTheLayoutDomain };
