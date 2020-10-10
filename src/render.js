import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, sendMessage } from "./redux/state"
import "./index.css"

export let rendererEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPosts={ addPost } sendMessage={ sendMessage } />
    </BrowserRouter>,
    document.getElementById('root')
  );  
}
