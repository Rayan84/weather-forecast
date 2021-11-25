import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import homepageReducer from './homepage/homepage';

const store = createStore(rootReducer, applyMiddleware(logger, reduxThunk));
const rootReducer =

export default store;