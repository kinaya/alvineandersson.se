import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }

//registerServiceWorker();
