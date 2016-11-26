/**
 * Created by qinai on 11/20/16.
 */
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import combineReducers from '../reducers/index.js';

const loggerMiddleware = createLogger();

export let store = createStore(
    combineReducers,
    applyMiddleware(
        loggerMiddleware,
    ),
);
store.subscribe(() => {
    console.log('store:: store.getState is ', store.getState());
});