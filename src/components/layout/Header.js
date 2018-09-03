import React from 'react';
import ProtoTypes from 'prop-types';

// function Header() {
//arrow function
const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{props.branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My First App'
};

Header.protoTypes = {
  branding: ProtoTypes.string.isRequired
};

export default Header;
