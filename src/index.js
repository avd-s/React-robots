import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));      // renders App.js File on screen using virtual React DOM
registerServiceWorker();
