
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import App from "./App";
import { Provider } from 'react-redux';
import storeConfig from './store/configureStore';
const store = storeConfig();
ReactDOM.render(
  
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  
  document.getElementById("root")
);
