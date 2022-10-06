import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings';

const rootReducer = combineReducers({
  greetingData: greetingReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;