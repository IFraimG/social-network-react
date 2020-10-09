import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, text: "hellllo1", likesCount: 0 },
  { id: 2, text: "hellllo2", likesCount: 3 },
  { id: 3, text: "hellllo3", likesCount: 5 },
  { id: 4, text: "hellllo4", likesCount: 6 },
  { id: 5, text: "hellllo5", likesCount: 4 },
]

let messages = [
  { id: 1, message: "hellllo" },
  { id: 2, message: "Welcome to MyOcean V2 !!!" },
  { id: 3, message: "It is a new social network of Kulagin Aleksandr ^___^" },
]

let usersData = [
  { id: 1, name: "Pushok1" },
  { id: 2, name: "Pushok2" }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={ postsData } messages={ messages } users={ usersData } />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
