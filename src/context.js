import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component{
  state = {
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

  render(){
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;