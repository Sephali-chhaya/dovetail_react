import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from 'react-router-dom';

import {store} from './redux/store'
import { Provider } from 'react-redux';


//  export const dovetailContext= createContext('http://localhost:49509');

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <ProSidebarProvider>    
    {/* <dovetailContext.Provider value = "http://localhost:49509"> */}
    
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    
    {/* </dovetailContext.Provider>     */}
    </ProSidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
