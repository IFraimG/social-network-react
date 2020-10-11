import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./redux/store"
import * as serviceWorker from './serviceWorker';
import "./index.css"

let rendererEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={ store } />
    </BrowserRouter>,
    document.getElementById('root')
  );  
}
rendererEntireTree(store)

store.subscribe(rendererEntireTree)

serviceWorker.unregister();
