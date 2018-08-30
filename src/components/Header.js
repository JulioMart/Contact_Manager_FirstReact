import React from 'react';
import ProtoTypes from 'prop-types';

// function Header() {
//arrow function
const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My First App'
};

Header.protoTypes = {
  branding: ProtoTypes.string.isRequired
};

export default Header;
