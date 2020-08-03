/**
 *
 * TheLayout
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTheLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import TheContent from '../TheContent/Loadable';
import TheHeader from '../../components/TheHeader';
import TheSidebar from '../../components/TheSidebar';
import TheFooter from '../../components/TheFooter';

export function TheLayout() {
  useInjectReducer({ key: 'theLayout', reducer });
  useInjectSaga({ key: 'theLayout', saga });

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  theLayout: makeSelectTheLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(TheLayout);
