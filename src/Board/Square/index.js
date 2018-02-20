import React from 'react';
import styles from './styles.css';

let Square = (props) => {
    return(
        <button className="square" onClick={props.clickHandler}></button>
    );
}

export default Square;