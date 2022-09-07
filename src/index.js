import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// dev: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
