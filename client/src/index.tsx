import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { persistor, store } from './store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from './context/AppContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppContextProvider>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </AppContextProvider>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
