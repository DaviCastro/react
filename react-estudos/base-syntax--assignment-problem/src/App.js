import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class App extends Component {

  state ={
    text:'testeState'
  }

  textEventHandler = (event) =>{
    this.setState({text:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserOutput text={this.state.text} />
        <UserOutput text={this.state.text} />
        <UserInput change={this.textEventHandler} text={this.state.text} />
      </div>
    );
  }
}

export default App;
