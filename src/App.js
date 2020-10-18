import React from 'react';
import { Route } from "react-router-dom"
import { initializeApp } from "./redux/app-reducer"
import { connect } from "react-redux"

import Home from "./components/Home/Home"
import HeaderContainer from "./components/Header/HeaderContainer"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import SuperSidebarContainer from "./components/Navbar/Sidebar/SidebarContainer"
import SuperDialogsContainer from "./components/Dialogs/DialogContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from "./components/Settings/Settings"
import LoginContainer from "./components/Login/LoginContainer"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import './App.css';
import Loader from './components/Loaders/Loader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.init) return <Loader />
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-wrapper-nav">
          <NavbarContainer />
          <SuperSidebarContainer />
        </div>
        <div className="app-wrapper-content">
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/dialogs" render={ () => <SuperDialogsContainer /> } />
          <Route path="/profile/:id" render={ () => <ProfileContainer /> } />
          <Route path="/settings" render={ () => <Settings /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/users" render={ () => <UsersContainer /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/login" render={ () => <LoginContainer /> } />
        </div>  
      </div>
    );
  }
}

const mapStateToProps = state => ({ init: state.app.init })

export default connect(mapStateToProps, {initializeApp})(App);
