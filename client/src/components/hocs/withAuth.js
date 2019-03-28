import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../session/sessionOperations';
import { getIsAuthenticated } from '../session/sessionSelectors';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    componentDidUpdate() {
      const { isAuthenticated, location, history } = this.props;

      const { from } = location.state || { from: { pathname: '/' } };

      if (isAuthenticated) {
        history.push({
          pathname: from.pathname,
          state: { from: location },
        });
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
  });

  const mapDispatchToProps = {
    signIn,
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WithAuth);
};

export default withAuth;
