import { createStore } from 'redux';
import reducer from './reducers/cart';

const initialState = {cart:[], summary:0};

const store = createStore(reducer, initialState);
export default store;
