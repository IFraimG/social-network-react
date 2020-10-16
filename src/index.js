import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./redux/redux-store"
import { Provider } from "react-redux"
import * as serviceWorker from './serviceWorker';
// import { ThemeProvider, createTheme, Arwes } from "arwes"
// import myTheme from "./myTheme"
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    {/* <ThemeProvider theme={ createTheme(myTheme) }>
      <Arwes> */}
        <Provider store={ store }>
            <App />
        </Provider>
      {/* </Arwes>
    </ThemeProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
);  

serviceWorker.unregister();