import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    //render() {
    //    return (
    //      <p>
    //        Hello, <input type="text" placeholder="Your name here" />!
    //        It is {this.props.date.toTimeString()}
    //      </p>
    //    );
    //} 
    render() {
        return <div>Hello {this.props.date.toTimeString()}<x-search>{this.props.name}</x-search>!</div>;
    }
}

export default App;
