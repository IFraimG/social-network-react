import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialog from "./components/Dialogs/Dialog"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={ Dialog } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/news" component={ News } />
          <Route exact path="/music" component={ Music } />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
