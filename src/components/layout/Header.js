import React from 'react';
import ProtoTypes from 'prop-types';
import { Link } from 'react-router-dom';

// function Header() {
//arrow function
const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href="/" className="navbar-brand">
					{props.branding}
				</a>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fa fa-home" /> Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact/add" className="nav-link">
								<i className="fa fa-plus" />Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								<i className="fa fa-question" /> About
							</Link>
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
