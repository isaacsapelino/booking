import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { Appointments } from './models';
import App from './components/App';

const store = init({
    models: {Appointments,},
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('app'));