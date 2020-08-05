// React Complete Guide
import React, { Component } from 'react';
//import React, { useState } from 'react';  //useState is most important react hook
//import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';



class App extends Component {
 
  
  //special property 'state' can be used only if you extends Component, cannot be used in function or lamda function
  //props are set and managed from outside of component
  //state is managed from inside commponent
  // you can use state on functional based component bu using React hooks

  state = {
    persons: [
      {id:'abc1', name: "Max", age: 28},
      {id:'def2', name: "Manu", age:29},
      {id:'ghi3', name: "Maria", age:22}
    ],
    otherState: 'some other state',
    showPersons: false
  }

 /*
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
}*/

deletePersonHander = (personIndex) => {
  //const persons = this.state.persons; //not better approach
  //const persons = this.state.persons.slice();  //slice creates a new array (copy of array) - better way to handle arrays/reference type
 const persons = [...this.state.persons];  //spread operator - create the new copy same as splice and a better way too

  persons.splice(personIndex, 1);
  this.setState({persons : persons});
}


onnameChangedHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex( p => {
    return p.id === id;
  });

  //const person = this.state.persons[personIndex];
  const person = {
    ...this.state.persons[personIndex]
  }

  //const person = Object.assign({}, this.state.persons[personIndex]);//another way but not better

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons:persons });
} 

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}  

  render() {

    const style = {
      backgroundColor : "green",
      color: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
       // <StyleRoot>  
        <div>
            {
              this.state.persons.map((person,index) => {
                return <Person 
                          click = {() => this.deletePersonHander(index)}
                          name={person.name} 
                          age={person.age} 
                          key = {person.id}
                          changed = {(event) => this.onnameChangedHandler(event, person.id)}
                          />
              })
            }
        </div>  
       // </StyleRoot>
      );
      style.backgroundColor= 'red';   
      style[':hover'] = {
        backgroundColor :'salmon',
        color : 'black'
      }  
    }

    //let classes = ['red', 'bold'].join(' '); //reslut will be string-> "red bold"
    const classes = [];

    if(this.state.persons.length <=2 ){
      classes.push('red'); //will push red class in classes array, classes=['red']
    }

    if(this.state.persons.length <=1 ){
      classes.push('bold'); //classes=['red', 'bold']; both are satisfied
    }

    return (
      <div className="App">
        <h1>React App</h1>
        {/*<p className={classes}>This is working fine!!</p> // cannot be juxt classes- it should be string*/}
        <p className={classes.join(' ')}>This is working fine!!</p>
         
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
//higher order compoments - wrapping component inside component - adding exter functionality
//export default Radium(App);

