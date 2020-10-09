import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home/Home"
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
          <Route exact path="/" render={ () => <Home /> } />
          <Route exact path="/dialogs" render={ () => <Dialog users={ props.users } messages={ props.messages } /> } />
          <Route path="/profile" render={ () => <Profile posts={ props.posts } /> } />
          <Route path="/settings" render={ () => <Settings /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
