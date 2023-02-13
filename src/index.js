import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./utilit/redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./AppContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer
                    store={store}
                />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();




