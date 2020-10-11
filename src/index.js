import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./redux/redux-store"
import * as serviceWorker from './serviceWorker';
import "./index.css"

let rendererEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={ store } dispatch={ store.dispatch.bind(store) } state={ state } />
    </BrowserRouter>,
    document.getElementById('root')
  );  
}
rendererEntireTree(store.getState())

store.subscribe( () => rendererEntireTree(store.getState()))

serviceWorker.unregister();
