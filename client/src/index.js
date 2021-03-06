import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import { init } from '@rematch/core';
import {
    Agents,
    Book,
} from './models';
import { Provider } from 'react-redux';

const store = init({
    models: {
        Agents,
        Book,
    }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('app'));