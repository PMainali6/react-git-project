import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];

const store = createStore (
    connectRouter(history)(rootReducer),
    applyMiddleware(...middleware)
);

export default store;
export { history };