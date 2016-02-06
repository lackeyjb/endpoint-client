import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestLogout } from '../../actions';
import { Navbar } from '../../components/Navbar';

export const App = ({
  children,
  isAuthenticated,
  onLogout,
}) => (
  <div>
    <Navbar
      isAuthenticated={isAuthenticated}
      onLogout={onLogout}
    />
    {children}
  </div>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(
  mapStateToProps,
  { onLogout: requestLogout }
)(App);
