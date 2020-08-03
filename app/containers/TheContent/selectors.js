import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the theContent state domain
 */

const selectTheContentDomain = state => state.theContent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TheContent
 */

const makeSelectTheContent = () =>
  createSelector(
    selectTheContentDomain,
    substate => substate,
  );

export default makeSelectTheContent;
export { selectTheContentDomain };
