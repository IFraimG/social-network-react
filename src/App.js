import React from 'react';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Navbar/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import DialogContainer from "./components/Dialogs/DialogContainer"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import './App.css';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-nav">
        <Navbar />
        <Sidebar friends={ props.state.sidebar.friends } />
      </div>
      <div className="app-wrapper-content">
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/dialogs" render={ () => <DialogContainer store={ props.store } /> } />
        <Route path="/profile" render={ () => <Profile store={ props.store } /> } />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music /> } />
      </div>  
    </div>
  );
}

export default App;
