import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetings';

const reducer = combineReducers({
  greetingData: greetingReducer,
});
const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
