import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/pages/Test';
// import logo from "./logo.svg";

//import the class to have access to all
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
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
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/contact/edit/:id" component={EditContact} />
								<Route exact path="/about" component={About} />
								<Route exact path="/test" component={Test} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
