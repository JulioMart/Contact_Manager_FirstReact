import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.payload)
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [ action.payload, ...state.contacts ]
			};
		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map(
					(contact) => 
					contact.id === action.payload.id 
					? (contact = action.payload) //if
					: contact									 //then
					)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			// {
			// 	id: 1,
			// 	name: 'John Doe',
			// 	email: 'jdoe@gmail.com',
			// 	phone: '123-456-7890'
			// },
			// {
			// 	id: 2,
			// 	name: 'Mary Ann',
			// 	email: 'mann@gmail.com',
			// 	phone: '123-456-7890'
			// },
			// {
			// 	id: 3,
			// 	name: 'Neo Smith',
			// 	email: 'neosmith@gmail.com',
			// 	phone: '123-456-7890'
			// }
		],

		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		}
	};

	// ASYNC
	async componentDidMount() {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		this.setState({ contacts: res.data });
	}

	// componentDidMount() {
	// 	axios.get('https://jsonplaceholder.typicode.com/users')
	// 	.then((response) => this.setState({
	// 			contacts: response.data
	// 		})
	// 	);
	// }

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
