import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions';
import LoginForm from '../../components/LoginForm';
import styles from './Login.scss';

const Login = ({ onLoginUser }) => (
  <LoginForm className={`${styles.login} container`} onLoginUser={onLoginUser} />
);

Login.propTypes = {
  onLoginUser: PropTypes.func,
};

export default connect(null, { onLoginUser: requestLogin })(Login);
