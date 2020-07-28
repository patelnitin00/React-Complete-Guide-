// React Complete Guide
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  //special property 'state' can be used only if you extends Component, cannot be used in function or lamda function
  //props are set and managed from outside of component
  //state is managed from inside commponent
  // you can use state on functional based component bu using React hooks

  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age:29},
      {name: "Maria", age:22}
    ]
  }

  //method for button click
  switchnameHandler = () => {
    //console.log('Button Clicked!!');
    //this keyword works or say can access stated because we are using arrow function else it won't work
    //DON'T DO THIS:->   this.state.persons[0].name = "Nitin";

    this.setState({
      persons: [
      {name: "Nitin", age: 28},
      {name: "Manu", age:29},
      {name: "Maria", age:25}
    ],
    otherState: 'Some other value'

  })
  }


  render() {
    return (
      <div className="App">
        <h1>Second Commit</h1>
        <button onClick={this.switchnameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby: Plaing games.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        
      </div>
    );
  }
}

export default App;

