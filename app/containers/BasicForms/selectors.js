import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the basicForms state domain
 */

const selectBasicFormsDomain = state => state.basicForms || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BasicForms
 */

const makeSelectBasicForms = () =>
  createSelector(
    selectBasicFormsDomain,
    substate => substate,
  );

export default makeSelectBasicForms;
export { selectBasicFormsDomain };
