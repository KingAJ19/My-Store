import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productDetailsReducer, productListReducers } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;