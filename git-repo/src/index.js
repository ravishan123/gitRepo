import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers'

import App from './App';

// import reducers from './reducers';



const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));