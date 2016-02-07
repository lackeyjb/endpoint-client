import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import sagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const reduxRouterMiddleware = syncHistory(hashHistory);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        reduxRouterMiddleware,
        sagaMiddleware(rootSaga),
        logger()
      )
    )
  );

  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
