import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./reducers/index.js"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {history} from './history/history';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

