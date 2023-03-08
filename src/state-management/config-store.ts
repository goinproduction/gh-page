import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import rootSaga from './sagas';
import { history } from '../utils/history';

const sagaMiddleware = createSagaMiddleware({ context: { history } });
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
