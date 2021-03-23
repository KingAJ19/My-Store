import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducers } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;