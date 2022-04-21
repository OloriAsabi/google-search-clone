import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateContextProvider } from './context/StateContextProvider';
import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateContextProvider>
           <App />
    </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

