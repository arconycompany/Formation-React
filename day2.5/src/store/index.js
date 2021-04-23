import { createStore } from 'redux'
import {productListReducer} from './reducers/app';
import {data} from './reducers/data';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    productListReducer,
    data
});

export const store = createStore(reducers);


