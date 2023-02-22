import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import RootReducer, { browserHistory } from './root-reducer';
import RootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(browserHistory);

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
RootReducer,
composeEnhancers(applyMiddleware(sagaMiddleware, historyMiddleware), offline(offlineConfig))
);

sagaMiddleware.run(RootSaga);

export default store;