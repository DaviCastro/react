import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      {name:'Max',age:28 },
      {name:'Manu',age:29},
      {name:'Davi',age:28}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons:[
      {name:'Max',age:28 },
      {name:newName,age:29},
      {name:'Davi',age:47}
    ] })
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name:event.target.value,age:28 },
      {name:'Manu',age:29},
      {name:'Davi',age:47}
    ] })
  }

// Bonito mas perfomance ruim <button onClick={()=>this.switchNameHandler('testeArrow')} >Switch name</button>
//Feio mas performance melhor <Person onClick={this.switchNameHandler.bind(this,'teste')}  name={this.state.persons[0].name} age={this.state.persons[0].age} />

  render() {
    return (
      <div className="App">
        <h1>Hi i'm react app</h1>
        
        <button onClick={()=>this.switchNameHandler('testeArrow')} >Switch name</button>
        <Person onClick={this.switchNameHandler.bind(this,'teste')}  name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler.bind(this)} />
        <Person click={this.switchNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
