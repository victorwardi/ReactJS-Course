import React, {useEffect, useContext} from 'react';
import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";

const Persons = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(
        () => {
            console.log("[Persons.js] using effect hook!");
        }
    );
    let persons = null;

    if (props.persons.length > 0 && authContext.authenticated) {
        persons = (
            <div>
                {props.persons.map((p, index) => {
                    return <Person
                        name={p.name}
                        age={p.age}
                        key={p.id}
                    />;
                })}
            </div>
        );
    }

    return (
            <div className="Persons">
                <h1>People List</h1>
                {persons}
            </div>
    );
}

export default Persons;