import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mean from "./Links/Mean"
import Pern from "./Links/Pern"
import Flutter from "./Links/Flutter"
import Laravel from "./Links/Laravel"
import Mern from "./Links/Mern"

import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={App} />
                <Route path='/mern' Component={Mern} />
                <Route path='/mean' Component={Mean} />
                <Route path='/pern' Component={Pern} />
                <Route path='/flutter' Component={Flutter} />
                <Route path='/laravel' Component={Laravel} />

            </Routes>

        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
