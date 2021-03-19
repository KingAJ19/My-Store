import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import data from './data';

const initialState = {};
const reducer = (state, action) => {
    return {products: data.products};
};

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));s

export default store;