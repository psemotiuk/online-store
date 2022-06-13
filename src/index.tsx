import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
//import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import 'normalize.css';
import './index.scss';
import swDev from './service-worker'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
swDev()
