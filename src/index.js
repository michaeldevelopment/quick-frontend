import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
  
import { AuthProvider } from "./Context/auth";
import store from "./Store/index";

import App from "./App";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>   
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
