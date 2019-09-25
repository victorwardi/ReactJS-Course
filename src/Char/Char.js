import React from 'react';

const Char = (props) =>{

    const charStyle = {
        display : 'inline-block',
        padding: '16px',
        margin: '16px',
        border: 'solid 1px #ccc'
    }


    return <div style={charStyle} onClick={props.clicked}>
        {props.character}
    </div>
}

export default Char;