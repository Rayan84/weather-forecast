import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import homepageReducer, { loopFetchSixCities } from './homepage/homepage';
import detailsReducer from './details/details';

const reducer = combineReducers({
  homepage: homepageReducer,
  details: detailsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, reduxThunk));
store.dispatch(loopFetchSixCities());
export default store;
