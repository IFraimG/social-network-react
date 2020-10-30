import React from "react";
import ReactDOM from "react-dom";
import FullApp from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import { ThemeProvider, createTheme, Arwes } from "arwes";
// import myTheme from "./myTheme";

ReactDOM.render(<FullApp />, document.getElementById("root"));

serviceWorker.unregister();