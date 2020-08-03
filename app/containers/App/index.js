/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../../scss/style.scss';
import { Helmet } from 'react-helmet';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('../TheLayout/Loadable'));

// Pages
const Login = React.lazy(() => import('../Login/Loadable'));
/* const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500')); */

export default function App() {
  return (
    <HashRouter hashType="slash">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ERP Project</title>
      </Helmet>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={props => <Login {...props} />}
          />
          {/* <Route
            exact
            path="/register"
            name="Register Page"
            render={props => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={props => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={props => <Page500 {...props} />}
          /> */}
          <Route
            path="/"
            name="Home"
            render={props => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
