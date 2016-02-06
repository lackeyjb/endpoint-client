import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './containers/App';
import requireAuthentication from './containers/AuthenticatedComponent';
import Login from './containers/Login';
import Home from './components/Home';
import Protected from './components/Protected';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="protected" component={requireAuthentication(Protected)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
