import React from 'react';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Navbar/Sidebar/Sidebar"
import Profile from "./components/Profile/Profile"
import Dialog from "./components/Dialogs/Dialog"
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
        <Sidebar store={ props.store } />
      </div>
      <div className="app-wrapper-content">
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/dialogs" render={ () => <Dialog dispatch={ props.store.dispatch.bind(props.store) } users={ props.store.getState.profilePage.users } messages={ props.store.getState.dialogsPage.messages } msgValue={ props.store.getState.dialogsPage.msgValue } /> } />
        <Route path="/profile" render={ () => <Profile store={ props.store } /> } />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music /> } />
      </div>  
    </div>
  );
}

export default App;
