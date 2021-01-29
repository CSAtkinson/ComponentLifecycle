import React, {Component} from 'react';
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxillary'

import classes from './Person.module.css'


class Person extends Component{
    render() {
        console.log('[Person.js] rendering...')
        return(
        <React.Fragment>
            <p onClick={this.props.click}>
                I'm a Person whose name is {this.props.name} and I'm {this.props.age} years old
            </p>
            <p key="item2">{this.props.children}</p>
            <input 
                key="item3" 
                type="text"
                onChange={this.props.changed} 
                value={this.props.name} /> 
        </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);