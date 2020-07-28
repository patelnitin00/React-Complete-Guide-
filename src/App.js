// React Complete Guide
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Second Commit</h1>

        <Person name="Nitin" age="28"/>
        <Person name="Vraj" age="22">My hobby: Plaing games..</Person>
      </div>
    );
  }
}

export default App;

