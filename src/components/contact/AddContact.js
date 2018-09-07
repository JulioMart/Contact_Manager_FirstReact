import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		const newContact = {
			id: uuid(),
			name: name,
			email,
			phone
		};

		dispatch({ type: 'ADD_CONTACT', payload: newContact });

		this.setState({
			name: '',
			email: '',
			phone: ''
		});
	};

	render() {
		const { name, email, phone } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter name ..."
										value={name}
										onChange={this.onChange}
									/>
									<TextInputGroup
										label="Email"
                    name="email"
                    type='email'
										placeholder="Enter email ..."
										value={email}
										onChange={this.onChange}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter phone number ..."
										value={phone}
										onChange={this.onChange}
									/>
									{/* <div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											className="form-control form-control-lg"
											placeholder="Enter email ..."
											name="email"
											value={email}
											onChange={this.onChange}
										/>
									</div> */}
									
									<input type="submit" className="btn btn-light btn-block" value="Add Contact" />
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContact;
