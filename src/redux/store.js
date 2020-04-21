import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import homeReducer from './reducers/home.reducer';
import chartsReducer from './reducers/charts.reducer';
import categoriesReducer from './reducers/categories.reducer';
import chargeReducer from './reducers/charge.reducer';

const reducers = combineReducers({
  rootReducer, homeReducer, chartsReducer, categoriesReducer, chargeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.srr = store;

export default store;
