import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getProductsFromApi } from './actions/data';
import { appReducer } from './reducers/app';
import { dataReducer } from './reducers/data';

const reducers = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

// store.dispatch(getProductsFromApi());
