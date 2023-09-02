import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./context/MoviesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoviesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoviesContextProvider>
);
