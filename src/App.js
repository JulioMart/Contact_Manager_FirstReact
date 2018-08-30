import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
// import logo from "./logo.svg";
import './App.css';

class App extends Component {
  render() {
    return (
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
        <Contact name="John Doe" email="jdoe@gmail.com" phone="123-456-7890" />
        <Contact name="Mary Jane" email="mary@gmail.com" phone="123-456-7890" />
      </div>
    );
  }
}

export default App;
