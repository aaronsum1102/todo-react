import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import rootStore from "./stores"

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
