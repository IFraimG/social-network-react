import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialog from "./components/Dialogs/Dialog"
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={ Dialog } />
          <Route path="/profile" component={ Profile } />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
