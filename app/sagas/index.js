import { take, put, call, fork } from 'redux-saga';
import axios from 'axios';
import { routeActions } from 'react-router-redux';
import * as actions from '../actions';

function loginApi({ username, password }) {
  return axios.post('http://localhost:3000/auth/signin', { username, password })
    .then((response) => response.data);
}

export function* login(getState) {
  while (yield take(actions.LOGIN_REQUEST)) {
    try {
      const creds = getState().auth.user;
      const user = yield call(loginApi, creds);
      localStorage.setItem('token', user.token);
      yield put(actions.receiveLogin(user));
      yield put(routeActions.push('/'));
    } catch (error) {
      yield put(actions.loginError(error.data));
    }
  }
}

export default function* root(getState) {
  yield fork(login, getState);
}
