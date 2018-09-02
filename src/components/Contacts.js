import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '123-456-7890'
        },
        {
          id: 2,
          name: 'Mary Ann',
          email: 'mann@gmail.com',
          phone: '123-456-7890'
        },
        {
          id: 3,
          name: 'Neo Smith',
          email: 'neosmith@gmail.com',
          phone: '123-456-7890'
        }
      ]
    }
  }

  render() {
    const { contacts } = this.state;

    return (
      //we don't need this <div>, there's another one at app.js
      // <>
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}

            //pass the strings to Contact
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}

            // or just the Object to simplify
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;