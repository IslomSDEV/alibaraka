import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProviderr from "./Context/Context";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProviderr>
          <App />
      </ContextProviderr>
    </BrowserRouter>
  </React.StrictMode>
);
