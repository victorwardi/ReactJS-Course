import React from 'react';
import styles from './Char.module.css';

const Char = (props) =>{
    return <div className={styles.Char} onClick={props.clicked}>
        <span>{props.character}</span>
    </div>
}

export default Char;