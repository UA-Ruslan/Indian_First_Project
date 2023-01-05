import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App
                    store={store}
                />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
}

rerenderTree(store.getState());
store.subscribe(() => {
    rerenderTree(store.getState())
});

reportWebVitals();




