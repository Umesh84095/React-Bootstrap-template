import React from "react";
import ReactDOM from "react-dom";
// import './index.scss';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18nextInit";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
