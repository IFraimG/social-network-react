import React from 'react';
import { Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import SuperSidebarContainer from "./components/Navbar/Sidebar/SidebarContainer"
import SuperDialogsContainer from "./components/Dialogs/DialogContainer"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import UsersContainer from "./components/Users/UsersContainer"
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-nav">
        <Navbar />
        <SuperSidebarContainer />
      </div>
      <div className="app-wrapper-content">
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/dialogs" render={ () => <SuperDialogsContainer /> } />
        <Route exact path="/profile/:id" component={ ProfileContainer } />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/users" render={ () => <UsersContainer /> } />
        <Route path="/music" render={ () => <Music /> } />
      </div>  
    </div>
  );
}

export default App;
