import React, { useEffect, Suspense } from "react";
import { Route } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import "./App.css";

import Home from "./components/Home/Home";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SuperSidebarContainer from "./components/Navbar/Sidebar/SidebarContainer";

import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import LoginContainer from "./components/Login/LoginContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Loader from "./components/Loaders/Loader";
import WithSuspense from "./components/hoc/WithSuspense";

const SuperDialogsContainer = React.lazy(() => import("./components/Dialogs/DialogContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

function App(props) {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.init) return <Loader />;
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-wrapper-nav">
        <NavbarContainer />
        <SuperSidebarContainer />
      </div>
      <div className="app-wrapper-content">
        <React.StrictMode>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/dialogs" render={() => <WithSuspense Component={SuperDialogsContainer} />} />
          <Route path="/profile/:id" render={() => <WithSuspense Component={ProfileContainer} />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/login" render={() => <WithSuspense Component={LoginContainer} />} />
        </React.StrictMode>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ init: state.app.init });

let AppContainer = connect(mapStateToProps, { initializeApp })(App)

let FullApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default FullApp;