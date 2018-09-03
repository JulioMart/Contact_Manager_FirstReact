import React, { Component } from 'react';
import Contacts from './components/contact/Contacts';
import Header from './components/contact/layout/Header';
import AddContact from './components/contact/AddContact';
// import logo from "./logo.svg";

//import the class to have access to all
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <h1>The App Component</h1> */}
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact></AddContact>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
