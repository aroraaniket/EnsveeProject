import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { AuthReducer } from './Reducers/AuthReducer';


const reducer = combineReducers({
  
AuthData:AuthReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  
 
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
 