import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { userSigninReducer } from './reducers/userReducer';
import { productDetailsReducer, productListReducers } from './reducers/productReducers';

const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
    }
};
const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;