import React, { Component } from 'react';
import './Person.css';

export default class Person extends Component {
    state = {
      show: true,
      
    }
  
      toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  
    render() {
      return (
        <div>
                <button onClick={this.toggle}>toggle: {this.state.show ? 'show' : 'hide'}</button>    
          {this.state.show && <div>fullName:' Tabia Bechir',bio:'I m a students', imgSrc:'', profession:'Students'</div>}
            </div>
       );
    }
  }
  
