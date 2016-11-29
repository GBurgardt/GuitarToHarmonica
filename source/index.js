import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
//
// import configureStore from './store';
//
// const store = configureStore();


ReactDOM.render(<Provider store={store}>{router}</Provider>,
document.getElementById('app'))
