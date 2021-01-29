import React, { Component } from 'react';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')

  }


  state = {
    persons: [
      {id: 'fdgdsf', name: 'James', age: 32},
      {id: 'hergy', name: 'Anslee', age: 18},
      {id: 'fghjdf', name: 'Dawson', age: 21}
    ],
    otherState: 'Some Other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount')
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
    console.log('[App.js] render')
    let persons = null;  

    if (this.state.showPersons) {
      persons =<Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>          
    }
    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons ={this.state.persons}
          clicked = {this.togglePersonsHandler}
          />
        {persons}               
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
