import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
import homeReducer from './reducers/home.reducer';
import chartsReducer from './reducers/charts.reducer';
import categoriesReducer from './reducers/categories.reducer';


const reducers = combineReducers({
  rootReducer, homeReducer, chartsReducer, categoriesReducer,
});

const store = createStore(reducers);

export default store;
