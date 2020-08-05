// React Complete Guide
import React, { Component } from 'react';
//import React, { useState } from 'react';  //useState is most important react hook
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
    ],
    otherState: 'some other state',
    showPersons: false
  }

  switchnameHandler = (newName) => { 
    //console.log('Button Clicked!!');
    //this keyword works or say can access stated because we are using arrow function else it won't work
    //DON'T DO THIS:->   this.state.persons[0].name = "Nitin";

    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: "Manu", age:29},
      {name: "Maria", age:25}
    ]
  })
}


onnameChangedHandler = (event) => {

  this.setState({
    persons:[
      {name: 'Max', age: 28},
      {name: event.target.value, age:29},
      {name: "Maria", age:25}

    ]
  })
} 

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}  

  render() {

    const style = {
      backgroundColor : "White",
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (  
        <div>
            {
              this.state.persons.map(person => {
                return <Person name={person.name} age={person.age}/>
              })
            }
        </div>  
      );
    }

    return (
      <div className="App">
        <h1>Second Commit</h1>
         
        <button style={style}
       // onClick={() => this.switchnameHandler('Nitin')}
       onClick= {this.togglePersonHandler}>Switch Name</button>  {/* 1st way to bind */}
          {persons}
     
      </div>
    );
  }

}

  /*
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
  };
*/

/** Using state logic by using function 
 * i.e using function instead of class
*/

/*
const App = () => {

  //useState always return 2 elements: current state or updated state(whenever we changes) and 
  //the other is function that allows to update the state

//array destructuring
const [personsState, setPersonsState] =  useState({
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age:29},
      {name: "Maria", age:22} 
    ]
});

//better to create different useState for management as it will not modify the changes but replace it
const [otherState, setOtherState] =  useState('some other value');


const switchnameHandler = () => {
  //console.log('Button Clicked!!');
  //this keyword works or say can access stated because we are using arrow function else it won't work
  //DON'T DO THIS:->   this.state.persons[0].name = "Nitin";

  setPersonsState({
    persons: [
    {name: "Nitin", age: 28},
    {name: "Manu", age:29},
    {name: "Maria", age:25}
  ]

})
};







  
    return (
      <div className="App">
        <h1>Second Commit</h1>
        <button onClick={switchnameHandler}>Switch Name</button>

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby: Plaing games.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        
      </div>
    );


}*/


export default App;

