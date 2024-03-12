import React from 'react';
import ReactDOM from 'react-dom/client'
import './main/styles/stylesheet.css'
import {createStore} from "redux";
import rootReducer from "./main/reducers/rootReducer";
import {Provider} from "react-redux";
import App from "./main/Components/App";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);