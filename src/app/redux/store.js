/*import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/
import chatbotreducer from './chatbotreducer';
const redux = require('redux');
//const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware =require('redux-thunk').default

const store = createStore(chatbotreducer,applyMiddleware(thunkMiddleware));

console.log("store");
export default store;
