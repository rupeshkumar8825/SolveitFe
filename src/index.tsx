import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PublicClientApplication} from "@azure/msal-browser";

import { msalConfig } from "./auth-config";


// creating new public client application using msal config 
const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App instance = {msalInstance}/>
      </Provider>
    </Router>
  </React.StrictMode>,
);
