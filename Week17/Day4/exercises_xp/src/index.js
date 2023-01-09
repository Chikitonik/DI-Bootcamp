import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// store import
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrapping and sending store to the App. Always only 1 App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
