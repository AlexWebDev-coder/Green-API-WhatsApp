import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./public/style/index.css";
import "./public/style/App.css";
import "react-toastify/dist/ReactToastify.css";

import ToastConfigContainer from "./ui/toast-config/index.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastConfigContainer />
    </Provider>
  </React.StrictMode>
);
