import React from 'react';
import ReactDOM from 'react-dom/client'
import MainPage from "./main/Components/MainPage";
import './main/styles/stylesheet.css'
import {createStore} from "redux";
import rootReducer from "./main/reducers/rootReducer";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainPage/>
);