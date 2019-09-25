import React from 'react';
import './UserOutput.css'
const UserOutput = (props) =>{


    return (

        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default UserOutput;