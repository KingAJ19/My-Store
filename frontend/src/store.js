import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducers } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducers
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));s

export default store;