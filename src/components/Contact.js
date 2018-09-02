import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = (e) => {
    this.setState({
      //inverse state from showContactInfo
      showContactInfo: !this.state.showContactInfo
    });
  }


  render() {
    //this.props when Class

    // here we're receiving the strings from Contacts
    // const { name, email, phone } = this.props;

    // or we can receive only the Object
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>

        {/* when string from Contacts */}
        {/* <h4>{name}</h4> */}

        {/* when object */}

        {showContactInfo ? (
          <div>
            <h4>{contact.name} <i onClick={this.onShowClick} className="fa fa-minus-circle"></i></h4>
            <ul className='list-group'>
              <li className='list-group-item'>Email: {contact.email}</li>
              <li className='list-group-item'>Phone: {contact.phone}</li>
            </ul>
          </div>) :
          <h4>{contact.name} <i onClick={this.onShowClick} className="fa fa-plus-circle" style={{ color: 'blue' }}></i></h4>}
      </div>
    );
  }
}

// when strings
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

// when object
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;