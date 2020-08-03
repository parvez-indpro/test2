/**
 *
 * TheContent
 *
 */

import React, { memo, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { CContainer, CFade } from '@coreui/react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import uuid from 'react-uuid';
import makeSelectTheContent from './selectors';
import reducer from './reducer';
import saga from './saga';

import routes from '../../routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

export function TheContent() {
  useInjectReducer({ key: 'theContent', reducer });
  useInjectSaga({ key: 'theContent', saga });

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map(
              route =>
                route.component && (
                  <Route
                    key={uuid()}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                ),
            )}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
}

const mapStateToProps = createStructuredSelector({
  theContent: makeSelectTheContent(),
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

export default compose(
  withConnect,
  memo,
)(TheContent);
