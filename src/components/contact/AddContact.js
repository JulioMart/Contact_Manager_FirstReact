import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

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
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											className="form-control form-control-lg"
											placeholder="Enter name ..."
											name="name"
											value={name}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											className="form-control form-control-lg"
											placeholder="Enter email ..."
											name="email"
											value={email}
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											type="text"
											className="form-control form-control-lg"
											placeholder="Enter phone..."
											name="phone"
											value={phone}
											onChange={this.onChange}
										/>
									</div>
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