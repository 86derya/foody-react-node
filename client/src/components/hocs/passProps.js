import React from 'react';

const passProps = props => Component => ownProps => (
  <Component {...props} {...ownProps} />
);

export default passProps;
