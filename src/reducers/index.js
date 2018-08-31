import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repoList from './repoList';
//import

const rootReducer = combineReducers({repoList, routing: routerReducer});
export default rootReducer;