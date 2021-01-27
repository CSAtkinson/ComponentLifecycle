import React, { Component } from 'react';
import classes from './App.module.css'



//import './App.css';
import Persons from '../components/Persons/Persons';

//import UserInput from './UserInput/UserInput'
//import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    persons: [
      {id: 'fdgdsf', name: 'James', age: 32},
      {id: 'hergy', name: 'Anslee', age: 18},
      {id: 'fghjdf', name: 'Dawson', age: 21}
    ],
    otherState: 'Some Other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>   
        </div> 
      );
          btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> 
        {persons}               
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
