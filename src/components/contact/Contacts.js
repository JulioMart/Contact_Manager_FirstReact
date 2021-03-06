import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						//we don't need this <div>, there's another one at app.js
						// <div>
						<React.Fragment>
							<h1 className="display-4 mb-2">
								<span className="text-danger">Contact</span> List
							</h1>
							{contacts.map((contact) => (
								<Contact
									key={contact.id}
									//pass the strings to Contact
									// name={contact.name}
									// email={contact.email}
									// phone={contact.phone}

									// or just the Object to simplify
									contact={contact}
									// deleteClickedHandler={this.deleteContact.bind(this, contact.id)}
								/>
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
