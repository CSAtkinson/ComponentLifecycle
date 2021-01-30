import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')

  }


  state = {
    persons: [
      { id: 'fdgdsf', name: 'James', age: 32 },
      { id: 'hergy', name: 'Anslee', age: 18 },
      { id: 'fghjdf', name: 'Dawson', age: 21 }
    ],
    otherState: 'Some Other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  shouldComponentUpdate() {
    console.log('App.js ShouldComponentUpdate')
    return true;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount')
  }

  componentDidUpdate() {
    console.log('App.js ComponentDidUpdate')
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
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
    this.setState({ showPersons: !doesShow })
  }

  AuthenticateHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }
    return (
      <Auxillary>
        <button 
          onClick={() => { 
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated : this.state.authenticated, 
            login: this.AuthenticateHandler
          }}>
          {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />) : null}
          {persons}
        </AuthContext.Provider>
      </Auxillary>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);
