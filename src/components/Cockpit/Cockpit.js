import React, {useEffect} from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js UseEffect');
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            console.log('Cockpit.js Cleanup work in use Effect')
        };
    }, []);

    useEffect(() => {
        console.log('Cockpit.js 2nd use effect')
        return () => {
            console.log('Cockpit.js Cleanup work in 2nd use Effect')
        };        
    })

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
      }
      if (props.personsLength <= 1){
        assignedClasses.push(classes.bold)
      }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(Cockpit);