import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/Login';
import { ProductInfo } from './components/data-binding/databinding';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NasaComponent } from './components/nasa-api/nasa';
import { EcommerceService } from './components/Ecommerce/Ecommerce';
import 'bootstrap/dist/js/bootstrap.bundle.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EcommerceService></EcommerceService>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
