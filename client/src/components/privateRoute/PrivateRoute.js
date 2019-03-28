import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../configs/routes';
import { getIsAuthenticated } from '../session/sessionSelectors';

const PrivateRoute = ({
  component: Component,
  redirectTo = routes.SIGN_IN,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
