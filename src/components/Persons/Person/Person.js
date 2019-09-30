import React, {useEffect} from 'react';
import './Person.css';

const Person = (props) => {

    useEffect(
        ()=> {
            console.log("[Persons.js] using effect hook!");
        }, []
    );

    return (
        <div className="Person">
        <p>I am {props.name}! I am {props.age} years old.</p>
        </div>
    );
}

export default Person;