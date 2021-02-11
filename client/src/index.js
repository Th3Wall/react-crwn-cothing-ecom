import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//React Router
import { BrowserRouter } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
//Redux-Persist
import { PersistGate } from 'redux-persist/integration/react';
//Service Worker
import * as serviceWorker from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();