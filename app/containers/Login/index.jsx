import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions';
import LoginForm from '../../components/LoginForm';
import styles from './Login.scss';


class Login extends Component {
  static propTypes = {
    requestLogin: PropTypes.func,
  };

  render() {
    return (
      <LoginForm className={`${styles.login} container`} onLoginUser={this.props.requestLogin} />
    );
  }
}

export default connect(null, { requestLogin })(Login);
